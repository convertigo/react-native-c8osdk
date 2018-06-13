<p align="center">
  <img src="https://www.convertigo.com/wp-content/themes/EightDegree/images/logo_convertigo.png">
  <h2 align="center"> React Native C8oSDK</h2>
</p>
<p align="center">
  <a href="/LICENSE"><img src="https://img.shields.io/npm/l/react-native-c8osdk.svg?style=flat-square" alt="License"></a>
  <a href="https://www.npmjs.com/package/react-native-c8osdk"><img src="https://img.shields.io/npm/v/react-native-c8osdk.svg?style=flat-square" alt="NPM version"></a>
</p>


## TOC

* [Introduction](#introduction)
* [Installation](#installation)
* [Linking](#linking)
* [Usage](#usage)
* [API](#api)
* [Troubleshooting](#troubleshooting)
* [Release Notes](#release-notes)
* [react-native-web](#react-native-web)

## Introduction
This is the Convertigo provider for React Native

Convertigo Client SDK is a set of libraries used by mobile or Windows desktop applications to access Convertigo Server services. An application using the SDK can easily access Convertigo services such as Sequences and Transactions.

The Client SDK will abstract the programmer from handling the communication protocols, local cache, FullSync off line data managment, UI thread management and remote logging. So the developer can focus on building the application.

Client SDK is available for:
* [Android Native](https://github.com/convertigo/c8osdk-android) apps as a standard Gradle dependency
* [iOS native](https://github.com/convertigo/c8osdk-ios) apps as a standard Cocoapod
* [React Native](https://github.com/convertigo/react-native-c8osdk) as a NPM package
* [Google Angular framework](https://github.com/convertigo/c8osdk-angular) as typescript an NPM package
* [Vue.js](https://github.com/convertigo/c8osdk-vuejs), [ReactJS](https://github.com/convertigo/c8osdk-vuejs), [AngularJS](https://github.com/convertigo/c8osdk-vuejs) Framework as a standard Javascript NPM package
* Windows desktop or Xamarin apps as Nugets or Xamarin Components



## Installation

Using npm:

```shell
npm install --save react-native-c8osdk
```

or using yarn:

```shell
yarn add react-native-c8osdk
```


## Linking


```shell
react-native link react-native-c8osdk
```

<details>
    <summary>iOS (via Cocoa Pods)</summary>

Add the following dependencies to your the target of your `Podfile`

`pod 'SwiftyJSON', '4.0.0'`

`pod 'Alamofire', '4.7.2'`

`pod 'AEXML', '4.3.0'`


Also append the following posinstall script to your `Podfile`
```shell
post_install do |installer|
  # List of Pods to use as Swift 3.2
  myTargets = ['SwiftyJSON', 'Alamofire', 'AEXML']

  installer.pods_project.targets.each do |target|
    if myTargets.include? target.name
      target.build_configurations.each do |config|
        config.build_settings['SWIFT_VERSION'] = '4.1'
      end
    end
  end
end
```
This will configure your pods in the correct swift version.

Then run `Pod install`

Please be sure to use the workspace and not the project, so be sure to open Project.xcworkspace

Finnaly go to main's Project target => Build Phases => Link Binary with Libraries and add C8o.framework
</details>

<details>
    <summary>Android</summary>

There is nothing more than the react-native cli link, mentioned above, to do for android
</details>

## Usage

See [Convertigo SDK](https://www.convertigo.com/document/all/cmp-7/7-5-1/reference-manual/convertigo-mbaas-server/convertigo-client-sdk/)

