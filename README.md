<p align="center">
  <img src="https://www.convertigo.com/wp-content/themes/EightDegree/images/logo_convertigo.png">
  <h2 align="center"> React Native C8oSDK</h2>
</p>
<p align="center">
  <a href="/LICENSE"><img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg" alt="License"></a>
  <a href="https://www.npmjs.com/package/react-native-c8osdk"><img src="https://badge.fury.io/js/react-native-c8osdk.svg?style=flat-square" alt="NPM version"></a>
</p>


## TOC

- [TOC](#toc)
- [Introduction](#introduction)
- [Requirements](#requirements)
- [Installation](#installation)
- [Linking](#linking)
- [Documentation](#documentation)
  - [Import libraries](#import-libraries)
  - [Initializing and creating a C8o instance for an Endpoint](#initializing-and-creating-a-c8o-instance-for-an-endpoint)
    - [Advanced instance settings](#advanced-instance-settings)
  - [Calling a Convertigo requestable](#calling-a-convertigo-requestable)
  - [Call parameters](#call-parameters)
  - [Handling failures](#handling-failures)
- [Api documentation](#api-documentation)

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

## Requirements

* npm 6.1.x | yarn 1.7.x
* react-native cli 2.0.x
* iOS
  * Xcode 9.4
  * Cocoapods 1.5.3
* Android
  * Android Studio 3.1

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

Then for each platform:

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

## Documentation

### Import libraries
```javascript
import {C8oSettings, C8o, C8oLogLevel} from "react-native-c8o-sdk";
```

### Initializing and creating a C8o instance for an Endpoint
C8o Obejct must first be instanciated and then can be initialized, with a endpoint string parameter
```javascript
// Instanciate C8o
let c8o: C8o = new C8o();

// Init C8o instance with a given endpoint
c8o.init("http://c8o-dev.convertigo.net:80/cems/projects/ClientSDKtestig");
```

#### Advanced instance settings
The endpoint is the mandatory setting to get a C8o instance, but there is additional settings through the C8oSettings class.

A C8oSettings instance should be passed after the endpoint. Settings are copied inside the C8o instance.

Setters of C8oSettings always return its own instance and can be chained.

A C8oSettings can be instantiated from an existing C8oSettings or C8o instance.
```javascript
// Instanciate C8oSettings
let settings = new C8oSettings();

// Add Settings properties
settings
.setTimeout(3000)
.setDefaultDatabaseName("myfullsyncDbName")
.setTrustAllCertificates(true)
.setLogLevelLocal(C8oLogLevel.TRACE);

// Instanciate C8o
let c8o: C8o = new C8o();

// Init C8o instance with a given endpoint and settings
c8o.init("http://c8o-dev.convertigo.net:80/cems/projects/ClientSDKtestig", settings);
```

### Calling a Convertigo requestable
With a C8o instance you can call Convertigo Sequence and Transaction or make query to your local FullSync database.

The call method expects the requester string of the following syntax:
* For a transaction: [project].connector.transaction
* For a sequence: [project].sequence

The project name is optional, i.e. if not specified, the project specified in the endpoint will be used.
```javascript
// Assuming c8o is a C8o instance properly instanciated and initiated as describe above, and '.login' is the name of a sequence of your project
let result = await this.c8o.callJson('.login');
```

### Call parameters
Convertigo requestables generally needs key/value parameters encapsuled in a simple javascript object. 

The key is always a string and the value can be any object but a string is the standard case.
```javascript
// Assuming c8o is a C8o instance properly instanciated and initiated as describe above, and '.login' is the name of a sequence of your project
let result = await this.c8o.callJson('.login', {
                login: "barnett.christine",
                password: "mySuperPassword123"
            });
```

### Handling failures
A call can throw an error for many reasons: technical failure, network error and so on.

The standard try/catch should be used to handle this.

```javascript
// Assuming c8o is a C8o instance properly instanciated and initiated as describe above, and '.login' is the name of a sequence of your project
try{
  let result = await this.c8o.callJson('.login', {
                login: "barnett.christine",
                password: "mySuperPassword123"
            });
}
catch(error){
  // Do somthing with the error
}
```

## Api documentation
* [C8o](apidoc/modules/_c8o_.md)
* [C8oBase](apidoc/modules/_c8obase_.md)
* [C8oLogLevel](apidoc/modules/_c8ologlevel_.md)
* [C8oSettings](apidoc/modules/_c8osettings_.md)
