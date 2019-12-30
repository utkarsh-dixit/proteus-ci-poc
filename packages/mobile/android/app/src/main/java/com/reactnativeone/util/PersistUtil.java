package com.reactnativeone.util;

import android.content.Context;
import android.util.Log;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import static com.reactnativeone.util.Constants.SAVE_CONTACTS;

public class PersistUtil {
    public static void updateReduxState(Context context, String type, JSONObject store, JSONObject action) throws JSONException {
        switch(type){
            case SAVE_CONTACTS:
                JSONObject contacts = new JSONObject(store.getString("contacts"));
                contacts.put("list", action.getJSONArray("list"));
                store.put("contacts", contacts.toString());
                break;
            default:
                throw new IllegalStateException("Unexpected value: " + type);
        }
        BridgeUtil.updateReduxStore(context, "persist:root", store.toString());
    }
}
