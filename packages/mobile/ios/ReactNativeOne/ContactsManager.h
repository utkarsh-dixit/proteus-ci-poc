//
//  ContactsManager.h
//  ReactNativeOne
//
//  Created by Utkarsh on 30/12/19.
//  Copyright © 2019 Facebook. All rights reserved.
//


#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface ContactsManager : RCTEventEmitter <RCTBridgeModule>
@property (nonatomic) UIBackgroundTaskIdentifier backgroundTask;

@end
