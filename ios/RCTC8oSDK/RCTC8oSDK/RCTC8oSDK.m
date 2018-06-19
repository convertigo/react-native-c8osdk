//
//  RCTC8oSDK.m
//  RCTC8oSDK
//
//  Created by Charles Grimont on 12/06/2018.
//  Copyright © 2018 Convertigo. All rights reserved.
//
#import "RCTC8oSDK.h"
#import <React/RCTLog.h>
#import <React/RCTConvert.h>

@import C8o;

@interface RCTC8oSDK()
@property (nonatomic) bool isEmulator;
@property C8o *C8o;
@property C8oResponseJsonListener *Resp;
@property C8oExceptionListener *Exep;
@property C8oSettings *C8oSettings;
@property NSString *Str;
@end


@implementation RCTC8oSDK
{
    bool hasListeners;
}
@synthesize isEmulator;
RCT_EXPORT_MODULE(C8oReact);
// Will be called when this module's first listener is added.
-(void)startObserving {
    hasListeners = YES;
    // Set up any upstream listeners or background tasks as necessary
}

// Will be called when this module's last listener is removed, or on dealloc.
-(void)stopObserving {
    hasListeners = NO;
    // Remove upstream listeners, stop unnecessary background tasks
}

- (NSArray<NSString *> *)supportedEvents
{
    return @[@"progress"];
}
// Method Init
RCT_REMAP_METHOD(init,
                 endpoint:(NSString *)endpoint
                 settings:(NSDictionary *)settings
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    // init settings
    _C8oSettings = [C8oSettings alloc];
    _C8oSettings = [_C8oSettings init];
    NSDictionary *dict = settings;
    if(dict[@"_timeout"] != nil){
        RCTLog(@"%@", dict[@"_timeout"]);
        _C8oSettings = [_C8oSettings setTimeout:[dict[@"_timeout"] integerValue]];
    }
    if(dict[@"_trustAllCertificates"] != nil){
        _C8oSettings = [_C8oSettings setTrustAllCertificates:[NSNumber numberWithBool:dict[@"_trustAllCertificates"]]];
    }
    if([dict[@"_cookies"] count] > 0){
        id key = [[dict[@"_cookies"] allKeys] objectAtIndex:0];
        id value = [dict[@"_cookies"] objectForKey:key];
        _C8oSettings = [_C8oSettings addCookie:key value:value];
    }
    if(dict[@"_logRemote"] != nil){
        _C8oSettings = [_C8oSettings setLogRemote:dict[@"_logRemote"]];
    }
    if(dict[@"_logLevelLocal"] != nil){
        C8oLogLevel logLevel;
        NSDictionary *di = dict[@"_logLevelLocal"];
        NSInteger intv = [di[@"priority"] integerValue];
        switch(intv){
            case 0:
                logLevel = C8oLogLevelNull;
                break;
            case 1:
                logLevel = C8oLogLevelNone;
                break;
            case 2:
                logLevel = C8oLogLevelTrace;
                break;
            case 3:
                logLevel = C8oLogLevelDebug;
                break;
            case 4:
                logLevel = C8oLogLevelInfo;
                break;
            case 5:
                logLevel = C8oLogLevelWarn;
                break;
            case 6:
                logLevel = C8oLogLevelError;
                break;
            case 7:
                logLevel = C8oLogLevelFatal;
                break;
        }
        _C8oSettings = [_C8oSettings setLogLevelLocal:logLevel];
    }
    
    if(dict[@"_fullsyncUsername"] != nil){
        _C8oSettings = [_C8oSettings setFullSyncUsername:dict[@"_fullsyncUsername"]];
    }
    if(dict[@"_fullsyncServerUrl"] != nil){
        _C8oSettings = [_C8oSettings setFullSyncServerUrl:dict[@"_fullsyncServerUrl"]];
    }
    if(dict[@"_fullsyncPassword"] != nil){
        _C8oSettings = [_C8oSettings setFullSyncPassword:dict[@"_fullsyncPassword"]];
    }
    if(![dict[@"_fullSyncLocalSuffix"] isEqual:[NSNull null]]){
        _C8oSettings = [_C8oSettings setFullSyncLocalSuffix:dict[@"_fullSyncLocalSuffix"]];
    }
    if(dict[@"_useEncryption"] != nil){
        _C8oSettings = [_C8oSettings setUseEncryption:[NSNumber numberWithBool:dict[@"_useEncryption"]]];
    }
    if(dict[@"_defaultDatabaseName"] != [NSNull null]){
        _C8oSettings = [_C8oSettings setDefaultDatabaseName:dict[@"_defaultDatabaseName"]];
    }
    if(dict[@"_logC8o"] != nil){
        _C8oSettings = [_C8oSettings setLogC8o:[NSNumber numberWithBool:dict[@"_logC8o"]]];
    }
    if(![dict[@"_authenticationCookieValue"] isEqual:[NSNull null]]){
        _C8oSettings = [_C8oSettings setAuthenticationCookieValue:dict[@"_authenticationCookieValue"]];
    }
    /*
     if(dict[@"_fullSyncStorageEngine"] != nil){
     _C8oSettings = [_C8oSettings setFullSyncStorageEngine:dict[@"_fullSyncStorageEngine"]];
     }
     if(dict[@"_fullSyncEncryptionKey"] != nil){
     _C8oSettings = [_C8oSettings setFullSyncEncryptionKey:dict[@"_fullSyncEncryptionKey"]];
     }
     */
    
    // Aloc and init C8o
    _C8o = [C8o alloc];
    [_C8o initWithEndpoint:endpoint c8oSettings:_C8oSettings error:nil];
}

// Method CallJson
RCT_REMAP_METHOD(callJson,
                 requestable:(NSString *)requestable
                 parameters:(NSDictionary *)parameters
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    // Alloc
    _Resp = [C8oResponseJsonListener alloc];
    _Exep = [C8oExceptionListener alloc];
    
    //C8oResponseJsonListener.initOnJsonResponse
    [_Resp initOnJsonResponse:^(id _Nullable response, NSDictionary<NSString *,id> * _Nullable requestParameters) {
        if (response == nil || response == NULL || [response isEqual: [NSNull null]]) {
            if ([[requestParameters allKeys] containsObject:@"__progress"]) {
                [self sendEvent:((C8oProgress *)((NSDictionary<NSString *, id> *) requestParameters)[@"__progress"])];
            }
        }
        else {
            resolve(response);
        }
    }];
    
    // C8oExceptionListener.initOnException
    [_Exep initOnException:^(C8oException * _Nonnull exep, NSDictionary<NSString *,id> * _Nullable requestParameters) {
        reject(exep.message, [NSString stringWithFormat:@"%li",(long)exep.code], exep);
    }];
    
    // C8o.call
    [_C8o call:requestable parameters:parameters c8oResponseListener:_Resp c8oExceptionListener:_Exep];
    
    
}

// Method log
RCT_REMAP_METHOD(log,
                message:(NSString *)message
                type:(nonnull NSNumber *)type
                resolver:(RCTPromiseResolveBlock)resolve
                rejecter:(RCTPromiseRejectBlock)reject)
{
    NSInteger intv = [type integerValue];
    switch(intv){
        case 0:
            //fatal
            [[_C8o log]fatal:message exceptions:nil];
            break;
        case 1:
            //error
            [[_C8o log]error:message exceptions:nil];
            break;
        case 2:
            //warn
            [[_C8o log]warn:message exceptions:nil];
            break;
        case 3:
            //info
            [[_C8o log]info:message exceptions:nil];
            break;
        case 4:
            //debug
            [[_C8o log]debug:message exceptions:nil];
            break;
        case 5:
            //trace
            [[_C8o log]trace:message exceptions:nil];
            break;
    }
}

- (void)sendEvent:(C8oProgress *)notification
{
    if (hasListeners) { // Only send events if anyone is listening
        [self sendEventWithName:@"progress" body:@{@"name": @"c8o_progress", @"progress":notification.dictionary}];
    }
}
@end

