package com.convertigo.reactnative;

import android.util.Log;
import android.widget.Toast;
import com.convertigo.clientsdk.*;

import com.facebook.react.bridge.Arguments;
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
import java.util.Map;

public class C8oReact extends ReactContextBaseJavaModule {
    C8o c8o;
    ReactApplicationContext context;

  public C8oReact(ReactApplicationContext reactContext) {
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
      try {
          c8o = new C8o(this.context,
                  endPoint,
                  settings
          );
      } catch (Exception e) {
          Log.e("C8oReact", e.getMessage());
      }
  }

  @ReactMethod
  public void callJson(String requestable, final ReadableMap JsObject, Promise promise) throws JSONException {
      final Promise p = promise;
      final ReactApplicationContext ctx = this.context;
      c8o.callJson(requestable, JsonConvert.reactToJSON(JsObject))
          .thenUI(new C8oOnResponse<JSONObject>() {
              @Override
              public C8oPromise<JSONObject> run(JSONObject jObject, Map<String, Object> parameters) throws Throwable {
                  // the jObject is available, the current code is executed in an another working thread
                  Log.i("C8oReact", jObject.toString(4));
                  p.resolve(JsonConvert.jsonToReact(jObject));
                  return null;
              }
          })
          .progress(new C8oOnProgress() {
              @Override
              public void run(C8oProgress c8oProgress) {
                  ctx.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                     .emit("Progress", c8oProgress.getStatus() + ":" + c8oProgress.getCurrent() + "/" + c8oProgress.getTotal());
              }
          })
          .failUI(new C8oOnFail() {
              @Override
              public void run(Throwable throwable, Map<String, Object> parameters) {
                  Log.e("C8oReact", "Error In SDK call", throwable);
                  p.reject("Error in SDK call", throwable);
              }
          });
  }
}