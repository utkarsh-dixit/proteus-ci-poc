package com.reactnativeone.util;

import android.util.Log;

public class Common {
    public static void print(String className, String methodName) {
        int id = android.os.Process.myPid();

        Log.v("ReactNativeOne", className + " : " + methodName + " : " + id);
    }
}
