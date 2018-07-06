require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
s.name           = 'RCTC8oSDK'
s.version        = package['version']
s.summary        = "summary"
s.description    = package['description']
s.license        = package['license']
s.author         = package['author']
s.homepage       = "http://www.google.fr"
s.source         = { git: 'https://github.com/convertigo/react-native-c8osdk.git', tag: s.version }

s.requires_arc   = true
s.platform       = :ios, '8.0'

s.preserve_paths = 'LICENSE', 'README.md', 'package.json', 'index.js'
s.source_files   = 'ios/**/**/*.{h,m}'
s.static_framework = true

s.dependency 'React'
s.dependency 'C8oSDK', '2.3.2'
s.dependency 'SwiftyJSON', '4.0.0'
s.dependency 'Alamofire', '4.7.2'
s.dependency 'AEXML', '4.2.2'
s.dependency 'couchbase-lite-ios', '1.4.1'
s.dependency 'couchbase-lite-ios/ForestDB', '1.4.1'
end
