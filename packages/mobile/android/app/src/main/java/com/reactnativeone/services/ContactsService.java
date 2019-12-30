package com.reactnativeone.services;

import android.app.Service;
import android.content.ContentResolver;
import android.content.Context;
import android.content.Intent;
import android.database.Cursor;
import android.os.Bundle;
import android.os.Handler;
import android.os.IBinder;
import android.os.Message;
import android.os.Messenger;
import android.os.RemoteException;
import android.provider.ContactsContract;
import android.util.Log;

import com.reactnativeone.util.BridgeUtil;
import com.reactnativeone.util.Constants;
import com.reactnativeone.util.PersistUtil;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class ContactsService extends Service {

    public Context context = this;
    public Handler handler = new Handler();
    public Thread thread = null;
    public Runnable runnable = null;
    public static final int FETCH_CONTACTS = 1;
    public static final int  UPDATE_CONTACTS = 2;

    private Messenger mMessenger;

    @Override
    public IBinder onBind(Intent intent) {
        mMessenger = new Messenger(new IncomingHandler(this));
        return mMessenger.getBinder();
    }


    private JSONArray getContactList(Context context) throws JSONException {
        JSONArray contacts = new JSONArray();

        ContentResolver cr = context.getContentResolver();
        Cursor cur = cr.query(ContactsContract.Contacts.CONTENT_URI,
                null, null, null, null);

        if ((cur != null ? cur.getCount() : 0) > 0) {
            while (cur != null && cur.moveToNext()) {
                String id = cur.getString(
                        cur.getColumnIndex(ContactsContract.Contacts._ID));
                String name = cur.getString(cur.getColumnIndex(
                        ContactsContract.Contacts.DISPLAY_NAME));

                if (cur.getInt(cur.getColumnIndex(
                        ContactsContract.Contacts.HAS_PHONE_NUMBER)) > 0) {
                    Cursor pCur = cr.query(
                            ContactsContract.CommonDataKinds.Phone.CONTENT_URI,
                            null,
                            ContactsContract.CommonDataKinds.Phone.CONTACT_ID + " = ?",
                            new String[]{id}, null);
                    while (pCur.moveToNext()) {
                        String phoneNo = pCur.getString(pCur.getColumnIndex(
                                ContactsContract.CommonDataKinds.Phone.NUMBER));
                        JSONObject mMap = new JSONObject();
                        mMap.put("id", ContactsContract.Contacts._ID);
                        mMap.put("name", name);
                        mMap.put("phone", phoneNo);
                        mMap.put("profilePic", "someprofilepic");
                        contacts.put(mMap);

                    }
                    pCur.close();
                }
            }
        }

        if(cur!=null){
            cur.close();
        }
        return contacts;
    }


    public JSONArray fetchContactsList(Context context) throws InterruptedException {
        // Stop all threads
        if(thread != null && thread.isAlive()){
            thread.interrupt();
        }

        Contacts act = new Contacts(context);
        thread = new Thread(act);
        thread.start();
        thread.join();
        return act.contacts;
    }

    @Override
    public void onCreate() {
    }

    @Override
    public void onDestroy() {
    }


    class IncomingHandler extends Handler {
        private Context applicationContext;

        IncomingHandler(Context context) {
            applicationContext = context.getApplicationContext();
        }

        @Override
        public void handleMessage(Message msg) {
            switch (msg.what) {
                case FETCH_CONTACTS:
                    try {
                        JSONArray contacts = ContactsService.this.fetchContactsList(applicationContext);
                        Messenger replyTo = msg.replyTo;
                        Bundle payload = new Bundle();
                        payload.putString("contacts",contacts.toString());
                        Message reply = Message.obtain(null, UPDATE_CONTACTS, 0, 0);

                        reply.obj = payload;

                        replyTo.send(reply);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    } catch (RemoteException e) {
                        e.printStackTrace();
                    }
                    break;
                default:
                    super.handleMessage(msg);
            }
        }
    }

    class Contacts implements Runnable {
        private volatile JSONArray contacts;
        private Context context;

        public Contacts(Context ctx){
            super();
            this.context = ctx;
        }

        @Override
        public void run() {
            Log.e("ReactNativeOne", BridgeUtil.getReduxStore(context).toString());
            try{
                JSONObject store = BridgeUtil.getReduxStore(context);

                JSONObject params = new JSONObject();

                contacts = getContactList(context);

                params.put("list", contacts);
                PersistUtil.updateReduxState(context, Constants.SAVE_CONTACTS, store, params);

            } catch(Exception ex){
                Log.e("ReactNative", ex.toString());
            }
        }
    }
}
