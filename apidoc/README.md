
![](https://www.convertigo.com/wp-content/themes/EightDegree/images/logo_convertigo.png)

React Native C8oSDK
-------------------

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](/LICENSE) [![NPM version](https://badge.fury.io/js/react-native-c8osdk.svg?style=flat-square)](https://www.npmjs.com/package/react-native-c8osdk)

TOC
---

*   [TOC](#toc)
*   [Introduction](#introduction)
*   [Requirements](#requirements)
*   [Installation](#installation)
*   [Linking](#linking)
*   [Documentation](#documentation)
    *   [Import libraries](#import-libraries)
    *   [Initializing and creating a C8o instance for an Endpoint](#initializing-and-creating-a-c8o-instance-for-an-endpoint)
    *   [Advanced instance settings](#advanced-instance-settings)
    *   [Calling a Convertigo requestable](#calling-a-convertigo-requestable)
    *   [Call parameters](#call-parameters)
    *   [Handling failures](#handling-failures)
    *   [Writing the device logs to the Convertigo server](#writing-the-device-logs-to-the-convertigo-server)
    *   [Using the Local Cache](#using-the-local-cache)
    *   [Using the Full Sync](#using-the-full-sync)
    *   [Replicating Full Sync databases](#replicating-full-sync-databases)
    *   [Replicating Full Sync databases with continuous flag](#replicating-full-sync-databases-with-continuous-flag)
    *   [Full Sync FS_LIVE requests](#full-sync-fs_live-requests)
    *   [React specific constraints](#react-specific-constraints)
        *   [Basic usage](#basic-usage)
        *   [Advanced usage](#advanced-usage)
*   [Api documentation](#api-documentation)

Introduction
------------

This is the Convertigo provider for React Native

Convertigo Client SDK is a set of libraries used by mobile or Windows desktop applications to access Convertigo Server services. An application using the SDK can easily access Convertigo services such as Sequences and Transactions.

The Client SDK will abstract the programmer from handling the communication protocols, local cache, FullSync off line data managment, UI thread management and remote logging. So the developer can focus on building the application.

Client SDK is available for:

*   [Android Native](https://github.com/convertigo/c8osdk-android) apps as a standard Gradle dependency
*   [iOS native](https://github.com/convertigo/c8osdk-ios) apps as a standard Cocoapod
*   [React Native](https://github.com/convertigo/react-native-c8osdk) as a NPM package
*   [Google Angular framework](https://github.com/convertigo/c8osdk-angular) as typescript an NPM package
*   [Vue.js](https://github.com/convertigo/c8osdk-vuejs), [ReactJS](https://github.com/convertigo/c8osdk-vuejs), [AngularJS](https://github.com/convertigo/c8osdk-vuejs) Framework as a standard Javascript NPM package
*   Windows desktop or Xamarin apps as Nugets or Xamarin Components

Requirements
------------

*   npm 6.1.x | yarn 1.7.x
*   react-native cli 2.0.x
*   iOS
    *   Xcode 9.4
    *   Cocoapods 1.5.3
*   Android
    *   Android Studio 3.1.x

Installation
------------

Using npm:

```shell
npm install --save react-native-c8osdk
```

or using yarn:

```shell
yarn add react-native-c8osdk
```

Linking
-------

```shell
react-native link react-native-c8osdk
```

Then for each platform:

iOS (via Cocoa Pods) Add the following dependencies to your the target of your `Podfile` `use_frameworks!` `pod 'SwiftyJSON', '4.0.0'` `pod 'Alamofire', '4.7.2'` `pod 'AEXML', '4.3.0'` Also append the following posinstall script to your `Podfile` `shell post_install do |installer| # List of Pods to use as Swift 4.1 myTargets = ['SwiftyJSON', 'Alamofire', 'AEXML'] installer.pods_project.targets.each do |target| if myTargets.include? target.name target.build_configurations.each do |config| config.build_settings['SWIFT_VERSION'] = '4.1' end end end end` This will configure your pods in the correct swift version. Then run `Pod install` Please be sure to use the workspace and not the project, so be sure to open Project.xcworkspace Finnaly go to main's Project target => Build Phases => Link Binary with Libraries and add C8o.framework Android There is nothing more than the react-native cli link, mentioned above, to do for android

Documentation
-------------

### Import libraries

```javascript
import {C8oSettings, C8o, C8oLogLevel} from "react-native-c8osdk";
```

### Initializing and creating a C8o instance for an Endpoint

C8o Object must first be instanciated and then can be initialized, with a endpoint string parameter

```javascript
// Instanciate C8o
let c8o: C8o = new C8o();

// Init C8o instance with a given endpoint, for example:
c8o.init("http://c8o-dev.convertigo.net:80/cems/projects/ClientSDKtestig");
```

### Advanced instance settings

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

*   For a transaction: \[project\].connector.transaction
*   For a sequence: \[project\].sequence

The project name is optional, i.e. if not specified, the project specified in the endpoint will be used.

```javascript
// Assuming c8o is a C8o instance properly instanciated and initiated as describe above, and '.login' is the name of a sequence of your project

// Here using Javascript's Promises with awaiter syntax 
let result = await this.c8o.callJson('.login')
                       .async();

// Here using Javascript's Promises with then/catch syntax
this.c8o.callJson(".login")
    .then((response)=>{
      //handle result
    });

// Using C8oPromise that allow for example progress and Live. C8oPromise is described in Api doc in section Api documentation of this README
this.c8o.callJson(".login")
    .then((response)=>{
      //handle result
    });
```

### Call parameters

Convertigo requestables generally needs key/value parameters encapsuled in a simple javascript object.

The key is always a string and the value can be any object but a string is the standard case.

```javascript
// Assuming c8o is a C8o instance properly instanciated and initiated as describe above, and '.login' is the name of a sequence of your project

// Here using Javascript's Promises with awaiter syntax
let result = await this.c8o.callJson('.login', {
                          login: "barnett.christine",
                          password: "mySuperPassword123"
                        })
                        .async();

// Here using Javascript's Promises with then/catch syntax
this.c8o.callJson('.login', {
    login: "barnett.christine",
    password: "mySuperPassword123"
  })
  .async()
  .then((response)=>{
    // handle result
  });

// Using C8oPromise that allow for example progress and Live. C8oPromise is described in Api doc in section Api documentation of this README.
this.c8o.callJson(".login",{
      login: "barnett.christine",
      password: "mySuperPassword123"
    })
    .then((response)=>{
      //handle result
    });
```

### Handling failures

A call can throw an error for many reasons: technical failure, network error and so on.

The standard try/catch should be used to handle this.

```javascript
// Assuming c8o is a C8o instance properly instanciated and initiated as describe above, and '.login' is the name of a sequence of your project

// Here using Javascript's Promises with awaiter
try{
  let result = await this.c8o.callJson('.login', {
                login: "barnett.christine",
                password: "mySuperPassword123"
            }).async();
}
catch(error){
  // Do somthing with the error
}

// Here using Javascript's Promises
this.c8o.callJson('.login', {
                login: "barnett.christine",
                password: "mySuperPassword123"
            }).
            .async()
            .then((response)=>{
              //handle result
            })
            .catch((error)=>{
              // Do somthing with the error
            })

// Using C8oPromise that allow for example progress and Live. C8oPromise is described in Api doc in section Api documentation of this README.
this.c8o.callJson('.login', {
                login: "barnett.christine",
                password: "mySuperPassword123"
            }).
            .then((response)=>{
              //handle result
            })
            .fail((error)=>{
              // Do somthing with the error
            })
```

### Writing the device logs to the Convertigo server

An application developer usually adds log information in his code. This is useful for the code execution tracking, statistics or debugging.

The Convertigo Client SDK offers an API to easily log on the standard device logger, generally in a dedicated console. To see this console, a device must be physically connected on a computer.

Fortunately, the same API also send log to the Convertigo server and they are merged with the server log. You can easily debug your device and server code on the same screen, on the same timeline. Logs from a device contain metadata, such as the device UUID and can help to filter logs on the server.

A log level must be specified:

*   Fatal: used for critical error message
*   Error: used for common error message
*   Warn: used for not expected case
*   Info: used for high level messages
*   Debug: used for help the developer to understand the execution
*   Trace: used for help the developer to trace the code
*   To write a log string, use the C8oLogger instance of a C8o instance:

```javascript
// Assuming c8o is a C8o instance properly instanciated and initiated as describe above

this.c8o.log.fatal("hello logs ! (level fatal)");
this.c8o.log.error("hello logs ! (level error)");
this.c8o.log.warn("hello logs ! (level warn)");
this.c8o.log.info("hello logs ! (level info)");
this.c8o.log.debug("hello logs ! (level debug)");
this.c8o.log.trace("hello logs ! (level trace)");
```

### Using the Local Cache

*   Not implemented yet

### Using the Full Sync

Full Sync enables mobile apps to handle fully disconnected scenarios, still having data handled and controlled by back end business logic. See the presentation of the Full Sync architecture for more details.

Convertigo Client SDK provides a high level access to local data following the standard Convertigo Sequence paradigm. They differ from standard sequences by a fs:// prefix. Calling these local Full Sync requestable will enable the app to read, write, query and delete data from the local database:

*   fs://.create creates the local database if not already exist
*   fs://.view queries a view from the local database
*   fs://.get reads an object from the local database
*   fs://.post writes/update an object to the local database
*   fs://.delete deletes an object from the local database
*   fs://.all gets all objects from the local database
*   fs://.sync synchronizes with server database
*   fs://.replicate_push pushes local modifications on the database server
*   fs://.replicate_pull gets all database server modifications
*   fs://.reset resets a database by removing all the data in it
*   fs://.put_attachment Puts (add) an attachment to a document in the database
*   fs://.get_attachment Gets an attachment from a document

Where fs:// is the name of a specific FullSync Connector in the project specified in the endpoint. The fs:// name is optional only if the default database name is specified with the method setDefaultDatabaseName on the C8oSetting.

An application can have many databases. On mobile (Android, iOS and Xamarin based) they are stored in the secure storage of the application. On Windows desktop application, they are stored in the user AppData/Local folder, without application isolation.

All platforms can specify a local database prefix that allows many local database copies of the same remote database. Use the method setFullSyncLocalSuffix on the C8oSetting.

```javascript
// Assuming c8o is a C8o instance properly instanciated and initiated as describe above.

// clear or create the "base" database
// resultReset mustbe equal to { "ok" : true }
let resultReset = await this.c8o.callJson('fs://base.reset');

// creates a new document on "base", with 2 key/value pairs
// resultPost mustbe equal to { "ok": true, "id": "6f1b52df","rev":  "1-b0620371" }
let resultPost = await this.c8o.callJson('fs://base.post', {
              firstname: "Jhonn",
              lastname: "Doe"
          });

// retrieves the complet document from its "docid"
// resultGet mustbe equal to { "lastname": "Doe", "rev": "1-b0620371", "firstname": "John", "_id": "6f1b52df" }
let resultGet = await this.c8o.callJson('fs://base.get', {
              docid: resultPost['id']
          });
```

### Replicating Full Sync databases

FullSync has the ability to replicate mobile and Convertigo server databases over unreliable connections still preserving integrity. Data can be replicated in upload or download or both directions. The replication can also be continuous: a new document is instantaneously replicated to the other side.

The client SDK offers the progress event to monitor the replication progression thanks to a C8oProgress instance.

```javascript
// Assuming c8o is a C8o instance properly instanciated and initiated as describe above.

// The progress can be handled only with C8oPromise
this.c8o.callJson('fs://base.replication_pull')
    .then((response)=>{
      // Do stuff with response
    })
    .progress((progress)=>{
      // Do stuff with progress
    })
```

### Replicating Full Sync databases with continuous flag

As mentioned above, a replication can also be continuous: a new document is instantaneously replicated to the other side.

Progress will be called at each entering replication during the all life of the application until that you explicitely cancel that one

```javascript
// Assuming c8o is a C8o instance properly instanciated and initiated as describe above.

// The progress can be handled only with C8oPromise
this.c8o.callJson('fs://base.replication_pull', {"continuous": true})
    .then((response)=>{
      // Do stuff with response
    })
    .progress((progress)=>{
      // Do stuff with progress
    })

// this will cancel the previous replication
this.c8o.callJson('fs://base.replication_pull', {"cancel": true})
    .then((response)=>{
      // Do stuff with response
    })
```

### Full Sync FS_LIVE requests

Full Sync has the ability to re-execute your fs:// calls if the database is modified. The then or thenUI following a FS_LIVE parameter is re-executed after each database update. Database update can be local modification or remote modification replicated.

This allow you keep your UI synchronized with database documents.

A FS\_LIVE parameter must have a string value, its liveid. The liveid allow to cancel a FS\_LIVE request.

```javascript
// Assuming c8o is a C8o instance properly instanciated and initiated as describe above.

// The then of the live requests can be handled only with C8oPromise
this.c8o.callJson("fs://base.view",{
    "ddoc": "design",
    "view": "customers",
    C8o["FS_LIVE"]: "customers"
    })
    .then((response)=>{
      // will be call now and after each database update
    })

    // cancel the previous FS_LIVE request, can be on application page change for example
    this.c8o.cancelLive("customers")
    .then(()=>{
      // do stuff
    }
    .catch((err)=>{
      // catch errors
    });
```

### React specific constraints

To Manage Progress, in react-native we are constraits to pass by Native Event Emitters. In iOS, we use [RCTEventEmitter](https://facebook.github.io/react-native/docs/native-modules-ios.html#sending-events-to-javascript), and in Android [RCTDeviceEventEmitter](https://facebook.github.io/react-native/docs/native-modules-android#sending-events-to-javascript).

As we can declare dynamically events name in Android, each event are forwared directly to the adapted progress handler, whereas in iOS as we can't dynamically nammed an event, we are obliged to forward every event to a unique one: "iOS" and then dispatch from je javascript layers to the adapted progres handler.

We have to manage event emitter and remove them when we can.

#### Basic usage

Basically you can let c8o do the job by simple applying the rule bellow

We stronglly recomeded to call removeAllSubscriptions method of class c8o on componentWillUnmount page life cycle to properly remove all listeners.

```javascript
// Assuming c8o is a C8o instance properly instanciated and initiated as describe above.
componentWillUnmount() {
  this.c8o.removeAllSubscriptions()
}
```

#### Advanced usage

However if you need to manage by yourself event emitter life cycle

*   Simple calls eventEmitter's are automatically removed at the end of the progress process
    
*   Live calls eventEmitter's are removed when calling cancelLive method
    
*   Continuous calls eventEmitter's can be removed, as shown below
    
    ```javascript
    // Assuming c8o is a C8o instance properly instanciated and initiated as describe above.
    let idCall1 = null;
    this.c8o.callJson("fs://base.sync",{
        "ddoc": "design",
        "view": "customers",
        "continuous": true
      })
      .progress((progress)=>{
        // do stuff with progress continuous
      })
      .then((response, id)=>{
        // initial response and id
        idCall1 = id;
      });
    
      // This will remove subscription
      this.c8o.removeSpecificSubscriptions(idCall1);
    ```
    

Api documentation
-----------------

*   ["c8o"](apidoc/modules/_c8o_.md)
*   ["c8oBase"](apidoc/modules/_c8obase_.md)
*   ["c8oLogLevel"](apidoc/modules/_c8ologlevel_.md)
*   ["c8oLogger"](apidoc/modules/_c8ologger_.md)
*   ["c8oPromise"](apidoc/modules/_c8opromise_.md)
*   ["c8oSettings"](apidoc/modules/_c8osettings_.md)

## Index

### External modules

* ["all"](modules/_all_.md)
* ["c8o"](modules/_c8o_.md)
* ["c8oBase"](modules/_c8obase_.md)
* ["c8oLocalCache"](modules/_c8olocalcache_.md)
* ["c8oLogLevel"](modules/_c8ologlevel_.md)
* ["c8oLogger"](modules/_c8ologger_.md)
* ["c8oPromise"](modules/_c8opromise_.md)
* ["c8oSettings"](modules/_c8osettings_.md)
* ["priority"](modules/_priority_.md)

---

