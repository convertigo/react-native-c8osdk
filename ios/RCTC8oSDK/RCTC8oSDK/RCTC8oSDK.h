//
//  RCTC8oSDK.h
//  RCTC8oSDK
//
//  Created by Charles Grimont on 12/06/2018.
//  Copyright © 2018 Convertigo. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <sys/utsname.h>
//#import <React/RCTEventEmitter.h>
#import <React/RCTConvert.h>

#if __has_include(<React/RCTAssert.h>)
#import <React/RCTBridgeModule.h>
#else
#import "RCTBridgeModule.h"
#endif

@interface RCTC8oSDK : RCTEventEmitter <RCTBridgeModule>

@end
