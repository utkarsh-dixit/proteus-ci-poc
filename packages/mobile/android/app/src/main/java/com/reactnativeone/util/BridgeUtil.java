package com.reactnativeone.util;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;

import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.reactnativecommunity.asyncstorage.ReactDatabaseSupplier;

import org.json.JSONException;
import org.json.JSONObject;

public class BridgeUtil {
    public static void sendEvent(ReactContext reactContext,
                                 String eventName,
                                 @Nullable WritableMap params) {
        reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, params);
    }


    public static JSONObject getReduxStore(Context context){
        Cursor catalystLocalStorage = null;
        SQLiteDatabase readableDatabase = null;

        try {
            readableDatabase = ReactDatabaseSupplier.getInstance(context).getReadableDatabase();
            catalystLocalStorage = readableDatabase.query("catalystLocalStorage", new String[]{"key", "value"}, "key =?", new String[]{"persist:root"}, null, null, null);
            if(catalystLocalStorage.moveToFirst()) {
                final String value = catalystLocalStorage.getString(catalystLocalStorage.getColumnIndex("value"));
                catalystLocalStorage.close();
                readableDatabase.close();
                return new JSONObject(value);
            }

        } catch (JSONException e) {
            e.printStackTrace();
        }
        return null;
    }

    public static void updateReduxStore(Context context, String key, String value){
        Cursor catalystLocalStorage = null;
        SQLiteDatabase readableDatabase = null;

        readableDatabase = ReactDatabaseSupplier.getInstance(context).getWritableDatabase();
        ContentValues updateValues = new ContentValues();
        updateValues.put("value", value);
        readableDatabase.update("catalystLocalStorage", updateValues, "key=?", new String[]{key});
        readableDatabase.close();
    }

}