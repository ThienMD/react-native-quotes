package com.quotes;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;
import com.thienpv.famousquote.Quotes;

@ReactModule(name = QuotesModule.NAME)
public class QuotesModule extends ReactContextBaseJavaModule {
  public static final String NAME = "Quotes";
  private Quotes quotes;
  public QuotesModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.quotes = new Quotes();
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }


  // Example method
  // See https://reactnative.dev/docs/native-modules-android
  @ReactMethod
  public void multiply(double a, double b, Promise promise) {
    promise.resolve(a * b);
  }

  @ReactMethod
  public void generateVietnamQuote(Promise promise) {
    promise.resolve(this.quotes.generateVietnamQuote());
  }

    @ReactMethod
  public void generateEnglishQuote(Promise promise) {
    promise.resolve(this.quotes.generateEnglishQuote());
  }
}
