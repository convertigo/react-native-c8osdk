[react-native-c8osdk](../README.md) > ["c8oBase"](../modules/_c8obase_.md) > [C8oBase](../classes/_c8obase_.c8obase.md)

# Class: C8oBase

## Hierarchy

**C8oBase**

↳  [C8oSettings](_c8osettings_.c8osettings.md)

## Index

### Properties

* [_authenticationCookieValue](_c8obase_.c8obase.md#_authenticationcookievalue)
* [_clientCertificateBinaries](_c8obase_.c8obase.md#_clientcertificatebinaries)
* [_clientCertificateFiles](_c8obase_.c8obase.md#_clientcertificatefiles)
* [_cookies](_c8obase_.c8obase.md#_cookies)
* [_defaultDatabaseName](_c8obase_.c8obase.md#_defaultdatabasename)
* [_disableSSL](_c8obase_.c8obase.md#_disablessl)
* [_endpointSettings](_c8obase_.c8obase.md#_endpointsettings)
* [_fullSyncLocalSuffix](_c8obase_.c8obase.md#_fullsynclocalsuffix)
* [_fullSyncPassword](_c8obase_.c8obase.md#_fullsyncpassword)
* [_fullSyncServerUrl](_c8obase_.c8obase.md#_fullsyncserverurl)
* [_fullSyncUsername](_c8obase_.c8obase.md#_fullsyncusername)
* [_headers](_c8obase_.c8obase.md#_headers)
* [_initialLogRemote](_c8obase_.c8obase.md#_initiallogremote)
* [_keyStorePassword](_c8obase_.c8obase.md#_keystorepassword)
* [_logC8o](_c8obase_.c8obase.md#_logc8o)
* [_logLevelLocal](_c8obase_.c8obase.md#_loglevellocal)
* [_logOnFail](_c8obase_.c8obase.md#_logonfail)
* [_logRemote](_c8obase_.c8obase.md#_logremote)
* [_timeout](_c8obase_.c8obase.md#_timeout)
* [_trustAllCertificates](_c8obase_.c8obase.md#_trustallcertificates)
* [_trustStorePassword](_c8obase_.c8obase.md#_truststorepassword)
* [_useEncryption](_c8obase_.c8obase.md#_useencryption)

### Accessors

* [authenticationCookieValue](_c8obase_.c8obase.md#authenticationcookievalue)
* [cookies](_c8obase_.c8obase.md#cookies)
* [defaultDatabaseName](_c8obase_.c8obase.md#defaultdatabasename)
* [endpoint](_c8obase_.c8obase.md#endpoint)
* [fullSyncLocalSuffix](_c8obase_.c8obase.md#fullsynclocalsuffix)
* [fullSyncPassword](_c8obase_.c8obase.md#fullsyncpassword)
* [fullSyncServerUrl](_c8obase_.c8obase.md#fullsyncserverurl)
* [fullSyncUsername](_c8obase_.c8obase.md#fullsyncusername)
* [headers](_c8obase_.c8obase.md#headers)
* [logC8o](_c8obase_.c8obase.md#logc8o)
* [logLevelLocal](_c8obase_.c8obase.md#loglevellocal)
* [logOnFail](_c8obase_.c8obase.md#logonfail)
* [logRemote](_c8obase_.c8obase.md#logremote)
* [timeout](_c8obase_.c8obase.md#timeout)
* [trustAllCertificates](_c8obase_.c8obase.md#trustallcertificates)

### Methods

* [copy](_c8obase_.c8obase.md#copy)

---

## Properties

<a id="_authenticationcookievalue"></a>

### `<Protected>` _authenticationCookieValue

**● _authenticationCookieValue**: *`string`* =  null

___
<a id="_clientcertificatebinaries"></a>

### `<Protected>` _clientCertificateBinaries

**● _clientCertificateBinaries**: *`Object`*

___
<a id="_clientcertificatefiles"></a>

### `<Protected>` _clientCertificateFiles

**● _clientCertificateFiles**: *`Object`*

___
<a id="_cookies"></a>

### `<Protected>` _cookies

**● _cookies**: *`Object`*

___
<a id="_defaultdatabasename"></a>

### `<Protected>` _defaultDatabaseName

**● _defaultDatabaseName**: *`string`* =  null

___
<a id="_disablessl"></a>

### `<Protected>` _disableSSL

**● _disableSSL**: *`boolean`* = false

___
<a id="_endpointsettings"></a>

### `<Protected>` _endpointSettings

**● _endpointSettings**: *`string`*

___
<a id="_fullsynclocalsuffix"></a>

### `<Protected>` _fullSyncLocalSuffix

**● _fullSyncLocalSuffix**: *`string`* =  null

___
<a id="_fullsyncpassword"></a>

### `<Protected>` _fullSyncPassword

**● _fullSyncPassword**: *`string`*

___
<a id="_fullsyncserverurl"></a>

### `<Protected>` _fullSyncServerUrl

**● _fullSyncServerUrl**: *`string`* = "http://localhost:5984"

___
<a id="_fullsyncusername"></a>

### `<Protected>` _fullSyncUsername

**● _fullSyncUsername**: *`string`*

___
<a id="_headers"></a>

### `<Protected>` _headers

**● _headers**: *`Object`*

___
<a id="_initiallogremote"></a>

### `<Protected>` _initialLogRemote

**● _initialLogRemote**: *`boolean`* = true

___
<a id="_keystorepassword"></a>

### `<Protected>` _keyStorePassword

**● _keyStorePassword**: *`string`*

___
<a id="_logc8o"></a>

### `<Protected>` _logC8o

**● _logC8o**: *`boolean`* = false

___
<a id="_loglevellocal"></a>

### `<Protected>` _logLevelLocal

**● _logLevelLocal**: *[C8oLogLevel](_c8ologlevel_.c8ologlevel.md)* =  C8oLogLevel.NONE

___
<a id="_logonfail"></a>

### `<Protected>` _logOnFail

**● _logOnFail**: *`function`*

#### Type declaration
▸(exception: *`Error`*, parameters: *`Object`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| exception | `Error` |
| parameters | `Object` |

**Returns:** `void`

___
<a id="_logremote"></a>

### `<Protected>` _logRemote

**● _logRemote**: *`boolean`* = true

___
<a id="_timeout"></a>

### `<Protected>` _timeout

**● _timeout**: *`number`* =  -1

___
<a id="_trustallcertificates"></a>

### `<Protected>` _trustAllCertificates

**● _trustAllCertificates**: *`boolean`* = false

___
<a id="_truststorepassword"></a>

### `<Protected>` _trustStorePassword

**● _trustStorePassword**: *`string`*

___
<a id="_useencryption"></a>

### `<Protected>` _useEncryption

**● _useEncryption**: *`boolean`* = false

___

## Accessors

<a id="authenticationcookievalue"></a>

###  authenticationCookieValue

getauthenticationCookieValue(): `string`

**Returns:** `string`

___
<a id="cookies"></a>

###  cookies

getcookies(): `Object`

Gets initial cookies to send to the Convertigo server.  
Default is **null**.

**Returns:** `Object`
List of cookies.

___
<a id="defaultdatabasename"></a>

###  defaultDatabaseName

getdefaultDatabaseName(): `string`

**Returns:** `string`

___
<a id="endpoint"></a>

###  endpoint

getendpoint(): `string`

Gets the endpoint define in C8oSettings

**Returns:** `string`
The current <b>endpoint</b>, if defined by c8oSettings.

___
<a id="fullsynclocalsuffix"></a>

###  fullSyncLocalSuffix

getfullSyncLocalSuffix(): `string`

**Returns:** `string`

___
<a id="fullsyncpassword"></a>

###  fullSyncPassword

getfullSyncPassword(): `string`

**Returns:** `string`

___
<a id="fullsyncserverurl"></a>

###  fullSyncServerUrl

getfullSyncServerUrl(): `string`

**Returns:** `string`

___
<a id="fullsyncusername"></a>

###  fullSyncUsername

getfullSyncUsername(): `string`

**Returns:** `string`

___
<a id="headers"></a>

###  headers

getheaders(): `Object`

**Returns:** `Object`

___
<a id="logc8o"></a>

###  logC8o

getlogC8o(): `boolean`

**Returns:** `boolean`

___
<a id="loglevellocal"></a>

###  logLevelLocal

getlogLevelLocal(): [C8oLogLevel](_c8ologlevel_.c8ologlevel.md)

Gets a value indicating logs level local

**Returns:** [C8oLogLevel](_c8ologlevel_.c8ologlevel.md)
C8oLogLevel object

___
<a id="logonfail"></a>

###  logOnFail

getlogOnFail(): `function`

**Returns:** `function`

___
<a id="logremote"></a>

###  logRemote

getlogRemote(): `boolean`

Gets a value indicating if logs are sent to the Convertigo server.  
Default is **true**.

**Returns:** `boolean`
<b>true</b> if logs are sent to the Convertigo server; otherwise, <b>false</b>.

___
<a id="timeout"></a>

###  timeout

gettimeout(): `number`

Gets the connection timeout to Convertigo in milliseconds. A value of zero means the timeout is not used.  
Default is **0**.

**Returns:** `number`
The timeout.

___
<a id="trustallcertificates"></a>

###  trustAllCertificates

gettrustAllCertificates(): `boolean`

Gets a value indicating whether https calls trust all certificates or not.  
Default is **false**.

**Returns:** `boolean`
<b>true</b> if https calls trust all certificates; otherwise, <b>false</b>.

___

## Methods

<a id="copy"></a>

###  copy

▸ **copy**(c8oBase: *[C8oBase](_c8obase_.c8obase.md)*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| c8oBase | [C8oBase](_c8obase_.c8obase.md) |

**Returns:** `void`

___

