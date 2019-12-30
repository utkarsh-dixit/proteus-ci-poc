package com.reactnativeone;

import android.content.ComponentName;
import android.content.Intent;
import android.content.ServiceConnection;
import android.os.IBinder;
import android.os.Message;
import android.os.Messenger;
import android.os.RemoteException;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.reactnativeone.services.ContactsService;

import static android.content.Context.BIND_AUTO_CREATE;
import static com.reactnativeone.MainActivity.mMessenger;


public class ContactModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    boolean mBounded;
    Messenger mServer;


    ContactModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
        if(!mBounded) {
            Intent serviceIntent = new Intent(reactContext, ContactsService.class);
            getReactContext().bindService(serviceIntent, mConnection, BIND_AUTO_CREATE);
            getReactContext().startService(serviceIntent);
        }
    }

    public static ReactApplicationContext getReactContext(){
        return reactContext;
    }

    @Override
    public String getName() {
        return "ContactsBackground";
    }

    @ReactMethod
    public void getAllContacts() throws InterruptedException {
        if(mBounded) {
            Message msg = Message.obtain(null, ContactsService.FETCH_CONTACTS, 0, 0);
            msg.replyTo = mMessenger;
            try {
                mServer.send(msg);
            } catch (RemoteException e) {
                e.printStackTrace();
            }
        }
    }

    ServiceConnection mConnection =new ServiceConnection() {
        public void onServiceConnected(ComponentName className, IBinder service) {
            mServer = new Messenger(service);
            mBounded = true;
        }

        public void onServiceDisconnected(ComponentName className) {
            mServer = null;
            mBounded = false;
        }
    };
}
