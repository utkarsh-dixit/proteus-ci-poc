package com.reactnativeone;

import android.os.Bundle;
import android.os.Messenger;

import com.facebook.react.ReactActivity;
import com.reactnativeone.core.IPCHandler;

public class MainActivity extends ReactActivity {

  private static boolean active;

  final static Messenger mMessenger = new Messenger(new IPCHandler());

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

  }

  @Override
  public void onStart() {
    super.onStart();
    active = true;
  }

  @Override
  public void onDestroy() {
    super.onDestroy();

    active = false;
  }

  public static boolean checkIfActive(){
    return active;
  }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "ReactNativeOne";
  }

}
