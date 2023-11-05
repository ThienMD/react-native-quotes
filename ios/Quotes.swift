import SimpleQuotes
@objc(Quotes)
class Quotes: NSObject {
    let simpleQuotes = SimpleQuotes()
  @objc(multiply:withB:withResolver:withRejecter:)
  func multiply(a: Float, b: Float, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
    resolve(a*b)
  }
    
  @objc(generateVietnamQuote:withRejecter:)
  func generateVietnamQuote(resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
    // Your implementation here
      let quote = simpleQuotes.generateVietnamQuotes()
      resolve(quote)
  }
  
  @objc(generateEnglishQuote:withRejecter:)
  func generateEnglishQuote(resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
      resolve(simpleQuotes.generateEnglishQuotes())
  }
}
