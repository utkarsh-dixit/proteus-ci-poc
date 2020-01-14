//
//  ContactsManager.m
//  ReactNativeOne
//
//  Created by Utkarsh on 30/12/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "ContactsManager.h"
#import "contact.h"

#define DISPATCH_QUEUE_CONTACTS "DISPATCH_QUEUE_CONTACTS"

@implementation ContactsManager


// To export a module named ContactsManager
RCT_EXPORT_MODULE(ContactsBackground);

- (dispatch_queue_t)methodQueue
{
  return dispatch_queue_create("com.facebook.React.ContactsQueue", DISPATCH_QUEUE_SERIAL);
}

- (NSArray<NSString *> *)supportedEvents
{
  return @[@"onContactsSyncComplete"];
}

RCT_EXPORT_METHOD(getAllContacts)
{
  __block UIBackgroundTaskIdentifier backgroundTaskIdentifier = [[UIApplication sharedApplication] beginBackgroundTaskWithExpirationHandler:^{

      NSLog(@"Background Time:%f",[[UIApplication sharedApplication] backgroundTimeRemaining]);

      [[UIApplication sharedApplication]  endBackgroundTask:backgroundTaskIdentifier];

      backgroundTaskIdentifier = UIBackgroundTaskInvalid;
  }];
  
//  NSLog(@"Hey there! I'm speaking from native ios");
  ContactsScan *scanManager = [[ContactsScan alloc] init];
//  ContactsManager* __weak weakSelf = self;

  NSArray<NSDictionary *> *arr = [scanManager contactScan];
  
  dispatch_async(dispatch_get_main_queue(), ^{
//    ContactsManager* strongSelf = weakSelf;

    [self sendEventWithName:@"onContactsSyncComplete" body:@{@"list": arr}];
  });
}

// This would name the module AwesomeCalendarManager instead
// RCT_EXPORT_MODULE(AwesomeCalendarManager);

@end
