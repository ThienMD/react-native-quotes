import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-quotes' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const Quotes = NativeModules.Quotes
  ? NativeModules.Quotes
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return Quotes.multiply(a, b);
}

export function generateVietnamQuote(): Promise<string> {
  return Quotes.generateVietnamQuote();
}

// english quote
export function generateEnglishQuote(): Promise<string> {
  return Quotes.generateEnglishQuote();
}
