import Foundation

@objc public class OpenVidu: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
