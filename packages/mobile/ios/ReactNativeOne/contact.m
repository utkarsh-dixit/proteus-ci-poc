//
//  contact.m
//  ReactNativeOne
//
//  Created by Utkarsh on 30/12/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Contacts/Contacts.h>
#import "contact.h"
@implementation ContactsScan

- (NSArray<NSDictionary *>*) contactScan
{
  __block NSArray<NSDictionary *>* out = nil;
    if ([CNContactStore class]) {
        //ios9 or later
        CNEntityType entityType = CNEntityTypeContacts;
        if( [CNContactStore authorizationStatusForEntityType:entityType] == CNAuthorizationStatusNotDetermined)
         {
             CNContactStore * contactStore = [[CNContactStore alloc] init];
             [contactStore requestAccessForEntityType:entityType completionHandler:^(BOOL granted, NSError * _Nullable error) {
                 if(granted){
                    out =  [self getAllContact];
                 }
             }];
         }
        else if( [CNContactStore authorizationStatusForEntityType:entityType]== CNAuthorizationStatusAuthorized)
        {
            out = [self getAllContact];
        }
    }
  [NSThread sleepForTimeInterval:5.000];
  return out;
}

-(NSMutableArray<NSDictionary *>*)getAllContact
{
    if([CNContactStore class])
    {
        //iOS 9 or later
        NSError* contactError;
        CNContactStore* addressBook = [[CNContactStore alloc]init];
        [addressBook containersMatchingPredicate:[CNContainer predicateForContainersWithIdentifiers: @[addressBook.defaultContainerIdentifier]] error:&contactError];
        NSArray * keysToFetch =@[CNContactEmailAddressesKey, CNContactPhoneNumbersKey, CNContactFamilyNameKey, CNContactGivenNameKey, CNContactPostalAddressesKey];
        CNContactFetchRequest * request = [[CNContactFetchRequest alloc]initWithKeysToFetch:keysToFetch];
        NSMutableArray<NSMutableDictionary *> *contactList = [[NSMutableArray alloc] init];
      
        BOOL success = [addressBook enumerateContactsWithFetchRequest:request error:&contactError usingBlock:^(CNContact * __nonnull contact, BOOL * __nonnull stop){
            NSMutableDictionary *ct = [self parseContactWithContact:contact];
          
            [contactList addObject:ct];
        }];
        return contactList;
    }
    return nil;
}

- (NSMutableDictionary*)parseContactWithContact :(CNContact* )contact
{
    NSString * name =  [NSString stringWithFormat:@"%@ %@", contact.givenName, contact.familyName];
    NSString * phone = [[contact.phoneNumbers valueForKey:@"value"] valueForKey:@"digits"];
    NSString * email = [contact.emailAddresses valueForKey:@"value"];

    NSMutableDictionary *out = [[NSMutableDictionary alloc] init];

    [out setObject:(name) forKey:@"name"];

    [out setObject:(phone) forKey:@"phone"];
    [out setObject:(@"profilepic") forKey: @"profilePic"];
    return out;
}

- (NSMutableArray *)parseAddressWithContac: (CNContact *)contact
{
    NSMutableArray * addrArr = [[NSMutableArray alloc]init];
    CNPostalAddressFormatter * formatter = [[CNPostalAddressFormatter alloc]init];
    NSArray * addresses = (NSArray*)[contact.postalAddresses valueForKey:@"value"];
    if (addresses.count > 0) {
        for (CNPostalAddress* address in addresses) {
            [addrArr addObject:[formatter stringFromPostalAddress:address]];
        }
    }
    return addrArr;
}

@end
