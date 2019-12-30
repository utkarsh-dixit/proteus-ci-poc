package com.reactnativeone.core;

import android.os.Bundle;
import android.os.Handler;
import android.os.Message;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.reactnativeone.ContactModule;
import com.reactnativeone.util.BridgeUtil;

import static com.reactnativeone.services.ContactsService.UPDATE_CONTACTS;


public class IPCHandler extends Handler {
    @Override
    public void handleMessage(Message msg) {
        switch (msg.what) {
            case UPDATE_CONTACTS:
                Bundle b = (Bundle)msg.obj;
                String contacts = b.getString("contacts");
                WritableMap rParams = Arguments.createMap();
                rParams.putString("list", contacts);
                BridgeUtil.sendEvent(ContactModule.getReactContext(), "onContactsSyncComplete", rParams);
                break;
            default:
                super.handleMessage(msg);
        }
    }
}