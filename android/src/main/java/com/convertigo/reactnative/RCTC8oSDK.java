package com.convertigo.reactnative;

import android.util.Log;
import android.widget.Toast;

import com.convertigo.clientsdk.*;


import com.convertigo.clientsdk.exception.C8oException;
import com.facebook.react.bridge.*;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.*;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import org.json.JSONException;
import org.json.JSONObject;

import java.lang.reflect.Array;
import java.util.HashMap;
import java.util.Map;

public class RCTC8oSDK extends ReactContextBaseJavaModule {
    C8o c8o;
    ReactApplicationContext context;

    public RCTC8oSDK(ReactApplicationContext reactContext) {
        super(reactContext);
        context = reactContext;
    }

    @Override
    public String getName() {
        return "C8oReact";
    }


    @ReactMethod
    public void init(final String endPoint, final ReadableMap JsSettings, Promise promise) throws JSONException {
      C8oSettings settings = new C8oSettings();
      if(JsSettings.toHashMap().get("_timeout") != null && (int)Math.round(Double.parseDouble(JsSettings.toHashMap().get("_timeout").toString())) != -1){
        settings.setTimeout((int)Math.round(Double.parseDouble(JsSettings.toHashMap().get("_timeout").toString())));
      }
      if(JsSettings.toHashMap().get("_trustAllCertificates") != null){
        settings.setTrustAllCertificates((boolean)JsSettings.toHashMap().get("_trustAllCertificates"));
      }
      if(((HashMap)JsSettings.toHashMap().get("_cookies")).size() > 0){
          Object key = ((HashMap)JsSettings.toHashMap().get("_cookies")).keySet().toArray()[0];
          Object value = ((HashMap)JsSettings.toHashMap().get("_cookies")).values().toArray()[0];
          settings.addCookie(key.toString(), value.toString());
      }
      if(JsSettings.toHashMap().get("_logRemote") != null){
        settings.setLogRemote((boolean)JsSettings.toHashMap().get("_logRemote"));
      }
      if(JsSettings.toHashMap().get("_logLevelLocal") != null){
          try{
              settings.setLogLevelLocal((int)Math.round(Double.parseDouble((((HashMap)JsSettings.toHashMap().get("_logLevelLocal"))).values().toArray()[1].toString())));
          }
          catch (Exception e){
              settings.setLogLevelLocal((int)Math.round(Double.parseDouble((((HashMap)JsSettings.toHashMap().get("_logLevelLocal"))).values().toArray()[0].toString())));
          }
      }
      if(JsSettings.toHashMap().get("_fullsyncUsername") != null){
          //TODO
      }
      if(JsSettings.toHashMap().get("_fullSyncPassword") != null){
          //TODO
      }
      if(JsSettings.toHashMap().get("_fullSyncLocalSuffix") != null){
          settings.setFullSyncLocalSuffix(JsSettings.toHashMap().get("_fullSyncLocalSuffix").toString());
      }
      if(JsSettings.toHashMap().get("_fullSyncStorageEngine") != null){
          settings.setFullSyncStorageEngine(JsSettings.toHashMap().get("_fullSyncStorageEngine").toString());
      }
      if(JsSettings.toHashMap().get("_fullSyncEncryptionKey") != null){
        settings.setFullSyncEncryptionKey(JsSettings.toHashMap().get("_fullSyncEncryptionKey").toString());
      }
      if(JsSettings.toHashMap().get("_useEncryption") != null){
        settings.setUseEncryption((boolean)JsSettings.toHashMap().get("_useEncryption"));
      }
      if(JsSettings.toHashMap().get("_defaultDatabaseName") != null){
          settings.setDefaultDatabaseName(JsSettings.toHashMap().get("_defaultDatabaseName").toString());
      }
      if(JsSettings.toHashMap().get("_logC8o") != null){
          settings.setLogC8o((boolean)JsSettings.toHashMap().get("_logC8o"));
      }
      if(JsSettings.toHashMap().get("_authenticationCookieValue") != null){
          settings.setAuthenticationCookieValue(JsSettings.toHashMap().get("_authenticationCookieValue").toString());
      }

      try {
          c8o = new C8o(this.context,
                  endPoint,
                  settings
          );
          promise.resolve(true);
      } catch (Exception e) {
          promise.reject("C8oReactError",e.getMessage());
      }
    }

    @ReactMethod
    public void callJson(String requestable, final ReadableMap JsObject, final String id, final Promise p) throws JSONException {
        // Get context
        final ReactApplicationContext ctx = this.context;

        // Get Params
        JSONObject parameters = JsonConvert.reactToJSON(JsObject);

        try{
            // Get the given localcache parameters
            Object myObj = parameters.get("__localCache");
            // Remove it from parameters
            parameters.remove("__localCache");
            // Create an Android C8oLocalCache Object from the js properties
            C8oLocalCache localCache = new C8oLocalCache(Boolean.parseBoolean(((JSONObject)((JSONObject) myObj).get("priority")).get("isAvailable").toString()) == true ? C8oLocalCache.Priority.LOCAL : C8oLocalCache.Priority.SERVER, Long.parseLong(((JSONObject) myObj).get("ttl").toString()));
            // Add it to parameters
            parameters.put(C8oLocalCache.PARAM, localCache);

        }
        catch (Exception e) {
            // If there is not  localCache param, catch exception
            Log.d("exception", e.toString());
        }

        // Do the call
        c8o.callJson(requestable, parameters)
          .thenUI(new C8oOnResponse<JSONObject>() {
              @Override
              public C8oPromise<JSONObject> run(JSONObject jObject, Map<String, Object> parameters) throws Throwable {
                  // the jObject is available, the current code is executed in an another working thread
                  // if it is from live then emit an event
                  if(((HashMap)parameters).get("__fromLive") != null) {
                      ctx.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                              .emit("live-" + id, JsonConvert.jsonToReact(jObject));
                  }
                  //if it is not from live resolve normally
                  else {
                      p.resolve(JsonConvert.jsonToReact(jObject));
                  }
                  return null;
              }
          })
          .progress(new C8oOnProgress() {
              @Override
              public void run(C8oProgress c8oProgress) {
                  // Wrap c8oProgress properties into in a JSONObject
                  JSONObject Jprogress = new JSONObject();
                  try {
                      Jprogress.put("continuous", c8oProgress.isContinuous());
                      Jprogress.put("finished", c8oProgress.isFinished());
                      Jprogress.put("pull", c8oProgress.isPull());
                      Jprogress.put("current", c8oProgress.getCurrent());
                      Jprogress.put("total", c8oProgress.getTotal());
                      Jprogress.put("status", c8oProgress.getStatus());
                      Jprogress.put("taskInfo", c8oProgress.getTaskInfo());
                      Jprogress.put("raw", c8oProgress.getRaw());
                      Jprogress.put("description", c8oProgress.toString());

                      // emit a new Event with a progress id
                      ctx.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                        .emit("progress-"+id, JsonConvert.jsonToReact(Jprogress));
                  } catch (JSONException e) {
                      e.printStackTrace();
                  }
              }
          })
          .failUI(new C8oOnFail() {
              @Override
              public void run(Throwable throwable, Map<String, Object> parameters) {
                  // Reject the error
                  p.reject("C8oReactError", throwable);
              }
          });
    }
    // Re Wrap logs
    @ReactMethod
    public void log(String message, Integer type, final Promise promise) throws JSONException {
      switch (type){
          case 0:
              this.c8o.log.fatal(message);
              promise.resolve(true);
              break;
          case 1:
              this.c8o.log.error(message);
              promise.resolve(true);
              break;
          case 2:
              this.c8o.log.warn(message);
              promise.resolve(true);
              break;
          case 3:
              this.c8o.log.info(message);
              promise.resolve(true);
              break;
          case 4:
              this.c8o.log.debug(message);
              promise.resolve(true);
              break;
          case 5:
              this.c8o.log.trace(message);
              promise.resolve(true);
              break;
      }

    }
    // Cancel Live
    @ReactMethod
    public void cancelLive(String id, final Promise promise)  {
        try{
            this.c8o.cancelLive(id);
            promise.resolve(true);
        }
        catch (C8oException e){
            promise.reject(e.getMessage(), e);
        }

    }
}