<p align="center">
  <img src="https://www.convertigo.com/wp-content/themes/EightDegree/images/logo_convertigo.png">
  <h2 align="center"> React Native C8oSDK</h2>
</p>
<p align="center">
  <a href="/LICENSE"><img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg" alt="License"></a>
  <a href="https://www.npmjs.com/package/react-native-c8osdk"><img src="https://badge.fury.io/js/react-native-c8osdk.svg?style=flat-square" alt="NPM version"></a>
</p> 


## TOC ##

- [TOC](#toc)
- [Introduction](#introduction)
  - [About SDKs](#about-sdks)
  - [About Convertigo Platform](#about-convertigo-platform)
- [Requirements](#requirements)
- [Installation](#installation)
- [Linking](#linking)
- [Documentation](#documentation)
  - [Import libraries](#import-libraries)
  - [Initializing and creating a C8o instance for an Endpoint](#initializing-and-creating-a-c8o-instance-for-an-endpoint)
  - [Advanced instance settings](#advanced-instance-settings)
  - [Calling a Convertigo requestable](#calling-a-convertigo-requestable)
  - [Call parameters](#call-parameters)
  - [Chaining calls](#chaining-calls)
  - [Handling failures](#handling-failures)
  - [Writing the device logs to the Convertigo server](#writing-the-device-logs-to-the-convertigo-server)
    - [Basic](#basic)
    - [Advanced](#advanced)
  - [Using the Local Cache](#using-the-local-cache)
  - [Using the Full Sync](#using-the-full-sync)
  - [Replicating Full Sync databases](#replicating-full-sync-databases)
  - [Replicating Full Sync databases with continuous flag](#replicating-full-sync-databases-with-continuous-flag)
  - [Full Sync FS_LIVE requests](#full-sync-fs_live-requests)
  - [Full Sync Change Listener](#full-sync-change-listener)
  - [React specific constraints](#react-specific-constraints)
    - [Basic usage](#basic-usage)
    - [Advanced usage](#advanced-usage)
- [Api documentation](#api-documentation)

## Introduction ##

### About SDKs ###

This is the Convertigo provider for React Native

Convertigo Client SDK is a set of libraries used by mobile or Windows desktop applications to access Convertigo Server services. An application using the SDK can easily access Convertigo services such as Sequences and Transactions.

The Client SDK will abstract the programmer from handling the communication protocols, local cache, FullSync off line data management, UI thread management and remote logging. So the developer can focus on building the application.

Client SDK is available for:
* [Android Native](https://github.com/convertigo/c8osdk-android) apps as a standard Gradle dependency
* [iOS native](https://github.com/convertigo/c8osdk-ios) apps as a standard Cocoapod
* [React Native](https://github.com/convertigo/react-native-c8osdk) as a NPM package
* [Google Angular framework](https://github.com/convertigo/c8osdk-angular) as typescript an NPM package
* [Vue.js](https://github.com/convertigo/c8osdk-vuejs), [ReactJS](https://github.com/convertigo/c8osdk-vuejs), [AngularJS](https://github.com/convertigo/c8osdk-vuejs) Framework as a standard Javascript NPM package
* [Windows desktop](https://github.com/convertigo/c8osdk-dotnet) or [Xamarin apps](https://github.com/convertigo/c8osdk-dotnet) as Nugets or Xamarin Components

This current package is the React Native SDK. For others SDKs see official [Convertigo Documentation.](https://www.convertigo.com/document/all/cmp-7/7-5-1/reference-manual/convertigo-mbaas-server/convertigo-client-sdk/programming-guide/)

### About Convertigo Platform ###

Convertigo Mobility Platform supports React Native developers. Services brought by the platform are available for React Native clients applications thanks to the Convertigo MBaaS SDK. SDK provides an React Native framework you can use to access Convertigo Server’s services such as:

- Connectors to back-end data (SQL, NoSQL, REST/SOAP, SAP, - WEB HTML, AS/400, Mainframes)
- Server Side Business Logic (Protocol transform, Business logic augmentation, ...)
- Automatic offline replicated databases with FullSync technology
- Security and access control (Identity managers, LDAP , SAML, oAuth)
- Server side Cache
- Push notifications (APND, GCM)
- Auditing Analytics and logs (SQL, and Google Analytics)

[Convertigo Technology Overview](http://download.convertigo.com/webrepository/Marketing/ConvertigoTechnologyOverview.pdf)

[Access Convertigo mBaaS technical documentation](http://www.convertigo.com/document/latest/)

[Access Convertigo SDK Documentations](https://www.convertigo.com/document/all/cmp-7/7-5-1/reference-manual/convertigo-mbaas-server/convertigo-client-sdk/)

## Requirements ##

* npm 6.1.x | yarn 1.7.x
* react-native cli 2.0.x
* iOS
  * Xcode 9.4
  * Cocoapods 1.5.3
* Android
  * Android Studio 3.1.x

## Installation ##

Using npm:

```shell
npm install --save react-native-c8osdk
```

or using yarn:

```shell
yarn add react-native-c8osdk
```


## Linking ##


```shell
react-native link react-native-c8osdk
```

Then for each platform:

<details>
    <summary>iOS (via Cocoa Pods)</summary>

Add the following dependencies to your the target of your `Podfile`

`use_frameworks!`

`pod 'SwiftyJSON', '4.0.0'`

`pod 'Alamofire', '4.7.2'`

`pod 'AEXML', '4.3.0'`


Also append the following posinstall script to your `Podfile`
```shell
post_install do |installer|
  # List of Pods to use as Swift 4.1
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

## Documentation ##

### Import libraries ###
```javascript
import {C8oSettings, C8o, C8oLogLevel} from "react-native-c8osdk";
```

### Initializing and creating a C8o instance for an Endpoint ###
C8o Object must first be instanciated and then can be initialized, with a endpoint string parameter
```javascript
// Instanciate C8o
let c8o: C8o = new C8o();

// Init C8o instance with a given endpoint, for example:
c8o.init("http://c8o-dev.convertigo.net:80/cems/projects/ClientSDKtestig");
```

### Advanced instance settings ###
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

### Calling a Convertigo requestable ###
With a C8o instance you can call Convertigo Sequence and Transaction or make query to your local FullSync database.

The call method expects the requester string of the following syntax:
* For a transaction: [project].connector.transaction
* For a sequence: [project].sequence

The project name is optional, i.e. if not specified, the project specified in the endpoint will be used.
```javascript
// Assuming c8o is a C8o instance properly instanciated and initiated as describe above, and '.login' is the name of a sequence of your project

// Here using Javascript's Promises with awaiter syntax 
let result = await this.c8o.callJson('.login')
                       .async();

// Here using Javascript's Promises with then/catch syntax
this.c8o.callJson(".login")
    .async()
    .then((response)=>{
      //handle result
    });

// Using C8oPromise that allow for example progress and Live. C8oPromise is described in Api doc in section Api documentation of this README
this.c8o.callJson(".login")
    .then((response)=>{
      //handle result
    });
```

### Call parameters ###
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
### Chaining calls ###

The .then() returns a C8oPromise that can be use to chain other promise methods, such as .then() or failure handlers. The last .then() must return a null value. .then() can be mixed but the returning type must be the same: Xml or Json.

```javascript
c8o.callJson(".getSimpleData", "callNumber", 1)
.then((response) => {
	// you can do stuff here and return the next C8oPromise instead of deep nested blocks
	return c8o.callJson(".getSimpleData", "callNumber", 2);
})
.then((response)=>{
  // you can do stuff here and even modify previous parameters
  parameters["callNumber"] = 3;
  parameters["extraParameter"] = "ok";
  return c8o.callJsonObject(".getSimpleData", parameters);
})
.then((response)=>{
  // you can do stuff here and return null because this is the end of the chain
  return null;
})
```

### Handling failures ###
A call can throw an error for many reasons: technical failure, network error and so on.

The standard try/catch should be used to handle this.

```javascript
// Assuming c8o is a C8o instance properly instantiated and initiated as describe above, and '.login' is the name of a sequence of your project

// Here using Javascript's Promises with awaiter
try{
  let result = await this.c8o.callJson('.login', {
                login: "barnett.christine",
                password: "mySuperPassword123"
            }).async();
}
catch(error){
  // Do something with the error
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
              // Do something with the error
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
              // Do something with the error
            })
```

### Writing the device logs to the Convertigo server ###

#### Basic ####

An application developer usually adds log information in his code. This is useful for the code execution tracking, statistics or debugging.

The Convertigo Client SDK offers an API to easily log on the standard device logger, generally in a dedicated console. To see this console, a device must be physically connected on a computer.

Fortunately, the same API also send log to the Convertigo server and they are merged with the server log. You can easily debug your device and server code on the same screen, on the same timeline. Logs from a device contain metadata, such as the device UUID and can help to filter logs on the server.

A log level must be specified:

* Fatal: used for critical error message
* Error: used for common error message
* Warn: used for not expected case
* Info: used for high level messages
* Debug: used for help the developer to understand the execution
* Trace: used for help the developer to trace the code
* To write a log string, use the C8oLogger instance of a C8o instance:

```javascript
// Assuming c8o is a C8o instance properly instanciated and initiated as describe above

c8o.log.fatal("hello logs ! (level fatal)");
c8o.log.error("hello logs ! (level error)");
c8o.log.warn("hello logs ! (level warn)");
c8o.log.info("hello logs ! (level info)");
c8o.log.debug("hello logs ! (level debug)");
c8o.log.trace("hello logs ! (level trace)");
```

#### Advanced ####

A C8oLogger have 2 log levels, one for local logging and the other for the remote logging. With the Android SDK, the local logging is set by the logcat options. With the .Net SDK, the local logging depends of the LogLevelLocal setting of C8oSettings.

The remote logging level is enslaved by Convertigo server Log levels property: devices output logger. In case of failure, the remote logging is disabled and cannot be re-enabled for the current C8o instance. It can also be disabled using the LogRemote setting of C8oSettings, enabled with true (default) and disabled with false.

```javascript
C8oSettings()
    .setLogC8o(false)   // disable log from the Convertigo Client SDK itself
    .setLogRemote(false) // disable remote logging
    .setLogLevelLocal(C8oLogLevel.TRACE);
```

### Using the Local Cache
Sometimes we would like to use local cache on C8o calls and responses, in order to:

* save network traffic between the device and the server,
* be able to display data when the device is not connected to the network.

The Local Cache feature allows to store locally on the device the responses to a C8o call, using the variables and their values as cache key.

To use the Local Cache, add to a call a pair parameter of "__localCache" and a C8oLocalCache instance. The constructor of C8oLocalCache needs some parameters:

* C8oLocalCache.Priority (SERVER / LOCAL): defines whether the response should be retrieved from local cache or from Convertigo server when the device can access the network. When the device has no network access, the local cache response is used.
* ttl: defines the time to live of the cached response, in milliseconds. If no value is passed, the time to live is infinite.
* enabled: allows to enable or disable the local cache on a Convertigo requestable, default value is true.

```javascript
// Assuming c8o is a C8o instance properly instanciated and initiated as describe above.

// Return the response if is already know and less than 180 seconds else call the server
this.c8o.callJson(".getSimpleData",
            {
              "__localCache": new C8oLocalCache(Priority.LOCAL, 180 * 1000)
            })
            .then((response)=>{
              // Do stuff 
            });

// same sample but with parameters, also acting as cache keys
this.c8o.callJson(".getSimpleData",
            {
              "firstname": "John",
		          "lastname": "Doe",
              "__localCache": new C8oLocalCache(Priority.LOCAL, 180 * 1000)
            })
            .then((response)=>{
              // Do stuff 
            });
// make a standard network call with the server
// but in case of offline move or network failure
// return the response if is already know and less than 1 hour
this.c8o.callJson(".getSimpleData",
            {
              "__localCache": new C8oLocalCache(Priority.SERVER, 3600 * 1000)
            })
            .then((response)=>{
              // Do stuff 
            });
```


### Using the Full Sync ###
Full Sync enables mobile apps to handle fully disconnected scenarios, still having data handled and controlled by back end business logic. See the presentation of the Full Sync architecture for more details.

Convertigo Client SDK provides a high level access to local data following the standard Convertigo Sequence paradigm. They differ from standard sequences by a fs:// prefix. Calling these local Full Sync requestable will enable the app to read, write, query and delete data from the local database:

* fs://<database>.create creates the local database if not already exist
* fs://<database>.view queries a view from the local database
* fs://<database>.get reads an object from the local database
* fs://<database>.post writes/update an object to the local database
* fs://<database>.delete deletes an object from the local database
* fs://<database>.all gets all objects from the local database
* fs://<database>.sync synchronizes with server database
* fs://<database>.replicate_push pushes local modifications on the database server
* fs://<database>.replicate_pull gets all database server modifications
* fs://<database>.reset resets a database by removing all the data in it
* fs://<database>.put_attachment Puts (add) an attachment to a document in the database
* fs://<database>.get_attachment Gets an attachment from a document

Where fs://<database> is the name of a specific FullSync Connector in the project specified in the endpoint. The fs://<database> name is optional only if the default database name is specified with the method setDefaultDatabaseName on the C8oSetting.

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

// Add an attachment to this new document, here content is a base64 string
let put_attachment = await this.c8o.callJson('fs://base.put_attachment', {
              docid: resultPost['id'],
              name: "myText.txt",
              content_type: "text/plain",
              content: "U2FsdXQgIQo="
          });
```


### Replicating Full Sync databases
FullSync has the ability to replicate mobile and Convertigo server databases over unreliable connections still preserving integrity. Data can be replicated in upload or download or both directions. The replication can also be continuous: a new document is instantaneously replicated to the other side.

The client SDK offers the progress event to monitor the replication progression thanks to a C8oProgress instance.

A device cannot pull private documents or push any document without authentication. A session must be established before and the Convertigo server must authenticate the session (using the Set authenticated user step for example).

```javascript
// Assuming c8o is a C8o instance properly instanciated and initiated as describe above.

this.c8o.callJson('.login')
.then((response)=>{
    if(response == "ok"){
      // The progress can be handled only with C8oPromise,
      // replication_pull can also be sync or replication_push
      this.c8o.callJson('fs://base.replication_pull')
        .then((response)=>{
          // Do stuff with response
        })
        .progress((progress)=>{
          // Do stuff with progress
        });
    }
});

```

### Replicating Full Sync databases with continuous flag ###
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

A FS_LIVE parameter must have a string value, its liveid. The liveid allow to cancel a FS_LIVE request.

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
### Full Sync Change Listener ###
Full Sync has also the ability to notify your if there is any change on the database. The progress following a FS_LIVE parameter is triggered  after each database update. The changes contains the origin of the change, and other attributes :
* isExternal
* isCurrentRevision
* isConflict
* id
* revisionId
 
```javascript
 this.c8o.addFullSyncChangeListener("databaseName", "anyID")
         .progress((change)=>{
           // triggered at each change on the given databaseName
           this.c8o.log.debug("progress addFullSyncChangeListener");
         })
         .then((resp)=>{
            //resp returns "ok" if the change listener has been correctly added
         })
         .fail((err)=>{
           // Throw any error
         })

```
 
### React specific constraints
To Manage Progress, in react-native we are constraits to pass by Native Event Emitters. In iOS, we use [RCTEventEmitter](https://facebook.github.io/react-native/docs/native-modules-ios.html#sending-events-to-javascript), and in Android [RCTDeviceEventEmitter](https://facebook.github.io/react-native/docs/native-modules-android#sending-events-to-javascript).

As we can declare dynamically events name in Android, each event are forwared directly to the adapted progress handler, whereas in iOS as we can't dynamically nammed an event, we are obliged to forward every event to a unique one: "iOS" and then dispatch from je javascript layers to the adapted progres handler.

We have to manage event emitter and remove them when we can.

#### Basic usage ####
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

* Simple calls eventEmitter's are automatically removed at the end of the progress process

* Live calls eventEmitter's are removed when calling cancelLive method

* Continuous calls eventEmitter's can be removed, as shown below
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

## Api documentation
* ["c8o"](apidoc/modules/_c8o_.md)
* ["c8oBase"](apidoc/modules/_c8obase_.md)
* ["c8oLogLevel"](apidoc/modules/_c8ologlevel_.md)
* ["c8oLogger"](apidoc/modules/_c8ologger_.md)
* ["c8oPromise"](apidoc/modules/_c8opromise_.md)
* ["c8oSettings"](apidoc/modules/_c8osettings_.md)
