[react-native-c8osdk](../README.md) > ["c8oSettings"](../modules/_c8osettings_.md) > [C8oSettings](../classes/_c8osettings_.c8osettings.md)

# Class: C8oSettings

Contains optional parameters of a C8o class instantiation.  
Note that setters return the setting instance thereby C8oSettings can be instantiate like that:  
new C8oSettings().setTimeout(5000).setTrustAllCertificates(true).setUseEncryption(true);

## Hierarchy

 [C8oBase](_c8obase_.c8obase.md)

**↳ C8oSettings**

## Index

### Constructors

* [constructor](_c8osettings_.c8osettings.md#constructor)

### Properties

* [_authenticationCookieValue](_c8osettings_.c8osettings.md#_authenticationcookievalue)
* [_clientCertificateBinaries](_c8osettings_.c8osettings.md#_clientcertificatebinaries)
* [_clientCertificateFiles](_c8osettings_.c8osettings.md#_clientcertificatefiles)
* [_cookies](_c8osettings_.c8osettings.md#_cookies)
* [_defaultDatabaseName](_c8osettings_.c8osettings.md#_defaultdatabasename)
* [_disableSSL](_c8osettings_.c8osettings.md#_disablessl)
* [_endpointSettings](_c8osettings_.c8osettings.md#_endpointsettings)
* [_fullSyncLocalSuffix](_c8osettings_.c8osettings.md#_fullsynclocalsuffix)
* [_fullSyncPassword](_c8osettings_.c8osettings.md#_fullsyncpassword)
* [_fullSyncServerUrl](_c8osettings_.c8osettings.md#_fullsyncserverurl)
* [_fullSyncUsername](_c8osettings_.c8osettings.md#_fullsyncusername)
* [_headers](_c8osettings_.c8osettings.md#_headers)
* [_initialLogRemote](_c8osettings_.c8osettings.md#_initiallogremote)
* [_keyStorePassword](_c8osettings_.c8osettings.md#_keystorepassword)
* [_logC8o](_c8osettings_.c8osettings.md#_logc8o)
* [_logLevelLocal](_c8osettings_.c8osettings.md#_loglevellocal)
* [_logOnFail](_c8osettings_.c8osettings.md#_logonfail)
* [_logRemote](_c8osettings_.c8osettings.md#_logremote)
* [_timeout](_c8osettings_.c8osettings.md#_timeout)
* [_trustAllCertificates](_c8osettings_.c8osettings.md#_trustallcertificates)
* [_trustStorePassword](_c8osettings_.c8osettings.md#_truststorepassword)
* [_useEncryption](_c8osettings_.c8osettings.md#_useencryption)

### Accessors

* [authenticationCookieValue](_c8osettings_.c8osettings.md#authenticationcookievalue)
* [cookies](_c8osettings_.c8osettings.md#cookies)
* [defaultDatabaseName](_c8osettings_.c8osettings.md#defaultdatabasename)
* [endpoint](_c8osettings_.c8osettings.md#endpoint)
* [fullSyncLocalSuffix](_c8osettings_.c8osettings.md#fullsynclocalsuffix)
* [fullSyncPassword](_c8osettings_.c8osettings.md#fullsyncpassword)
* [fullSyncServerUrl](_c8osettings_.c8osettings.md#fullsyncserverurl)
* [fullSyncUsername](_c8osettings_.c8osettings.md#fullsyncusername)
* [headers](_c8osettings_.c8osettings.md#headers)
* [logC8o](_c8osettings_.c8osettings.md#logc8o)
* [logLevelLocal](_c8osettings_.c8osettings.md#loglevellocal)
* [logOnFail](_c8osettings_.c8osettings.md#logonfail)
* [logRemote](_c8osettings_.c8osettings.md#logremote)
* [timeout](_c8osettings_.c8osettings.md#timeout)
* [trustAllCertificates](_c8osettings_.c8osettings.md#trustallcertificates)

### Methods

* [addCookie](_c8osettings_.c8osettings.md#addcookie)
* [addHeader](_c8osettings_.c8osettings.md#addheader)
* [clone](_c8osettings_.c8osettings.md#clone)
* [copy](_c8osettings_.c8osettings.md#copy)
* [setAuthenticationCookieValue](_c8osettings_.c8osettings.md#setauthenticationcookievalue)
* [setDefaultDatabaseName](_c8osettings_.c8osettings.md#setdefaultdatabasename)
* [setEndPoint](_c8osettings_.c8osettings.md#setendpoint)
* [setFullSyncLocalSuffix](_c8osettings_.c8osettings.md#setfullsynclocalsuffix)
* [setFullSyncPassword](_c8osettings_.c8osettings.md#setfullsyncpassword)
* [setFullSyncServerUrl](_c8osettings_.c8osettings.md#setfullsyncserverurl)
* [setFullSyncUsername](_c8osettings_.c8osettings.md#setfullsyncusername)
* [setLogC8o](_c8osettings_.c8osettings.md#setlogc8o)
* [setLogLevelLocal](_c8osettings_.c8osettings.md#setloglevellocal)
* [setLogOnFail](_c8osettings_.c8osettings.md#setlogonfail)
* [setLogRemote](_c8osettings_.c8osettings.md#setlogremote)
* [setTimeout](_c8osettings_.c8osettings.md#settimeout)
* [setTrustAllCertificates](_c8osettings_.c8osettings.md#settrustallcertificates)
* [setUseEncryption](_c8osettings_.c8osettings.md#setuseencryption)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new C8oSettings**(c8oSettings?: *[C8oSettings](_c8osettings_.c8osettings.md)*): [C8oSettings](_c8osettings_.c8osettings.md)

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` c8oSettings | [C8oSettings](_c8osettings_.c8osettings.md) |  null |

**Returns:** [C8oSettings](_c8osettings_.c8osettings.md)

___

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

<a id="addcookie"></a>

###  addCookie

▸ **addCookie**(name: *`string`*, value: *`string`*): [C8oSettings](_c8osettings_.c8osettings.md)

Add a new cookie to the initial cookies send to the Convertigo server.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  The name of the new cookie. |
| value | `string` |  The value of the new cookie. |

**Returns:** [C8oSettings](_c8osettings_.c8osettings.md)
The current <b>C8oSettings</b>, for chaining.

___
<a id="addheader"></a>

###  addHeader

▸ **addHeader**(name: *`string`*, value: *`string`*): `this`

Add a header

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  The name of header. |
| value | `string` |  The value of header. |

**Returns:** `this`
The current <b>C8oSettings</b>, for chaining.

___
<a id="clone"></a>

###  clone

▸ **clone**(): [C8oSettings](_c8osettings_.c8osettings.md)

Clone C8osettings object

**Returns:** [C8oSettings](_c8osettings_.c8osettings.md)

___
<a id="copy"></a>

###  copy

▸ **copy**(c8oBase: *[C8oBase](_c8obase_.c8obase.md)*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| c8oBase | [C8oBase](_c8obase_.c8obase.md) |

**Returns:** `void`

___
<a id="setauthenticationcookievalue"></a>

###  setAuthenticationCookieValue

▸ **setAuthenticationCookieValue**(authenticationCookieValue: *`string`*): [C8oSettings](_c8osettings_.c8osettings.md)

setAuthenticationCookieValue

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| authenticationCookieValue | `string` |  - |

**Returns:** [C8oSettings](_c8osettings_.c8osettings.md)

___
<a id="setdefaultdatabasename"></a>

###  setDefaultDatabaseName

▸ **setDefaultDatabaseName**(defaultDatabaseName: *`string`*): [C8oSettings](_c8osettings_.c8osettings.md)

Specify the default FullSync database name. Must match a Convertigo Server FullSync connector name

**Parameters:**

| Param | Type |
| ------ | ------ |
| defaultDatabaseName | `string` |

**Returns:** [C8oSettings](_c8osettings_.c8osettings.md)
The current <b>C8oSettings</b>, for chaining.

___
<a id="setendpoint"></a>

###  setEndPoint

▸ **setEndPoint**(endpoint: *`string`*): [C8oSettings](_c8osettings_.c8osettings.md)

Sets the endpoint (override env.json).

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| endpoint | `string` |  The endpoint. |

**Returns:** [C8oSettings](_c8osettings_.c8osettings.md)
The current <b>C8oSettings</b>, for chaining.

___
<a id="setfullsynclocalsuffix"></a>

###  setFullSyncLocalSuffix

▸ **setFullSyncLocalSuffix**(fullSyncLocalSuffix: *`string`*): [C8oSettings](_c8osettings_.c8osettings.md)

setFullSyncLocalSuffix

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| fullSyncLocalSuffix | `string` |  - |

**Returns:** [C8oSettings](_c8osettings_.c8osettings.md)

___
<a id="setfullsyncpassword"></a>

###  setFullSyncPassword

▸ **setFullSyncPassword**(fullSyncPassword: *`string`*): [C8oSettings](_c8osettings_.c8osettings.md)

setFullSyncPassword

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| fullSyncPassword | `string` |  - |

**Returns:** [C8oSettings](_c8osettings_.c8osettings.md)

___
<a id="setfullsyncserverurl"></a>

###  setFullSyncServerUrl

▸ **setFullSyncServerUrl**(fullSyncServerUrl: *`string`*): [C8oSettings](_c8osettings_.c8osettings.md)

setFullSyncServerUrl

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| fullSyncServerUrl | `string` |  - |

**Returns:** [C8oSettings](_c8osettings_.c8osettings.md)

___
<a id="setfullsyncusername"></a>

###  setFullSyncUsername

▸ **setFullSyncUsername**(fullSyncUsername: *`string`*): [C8oSettings](_c8osettings_.c8osettings.md)

setFullSyncUsername

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| fullSyncUsername | `string` |  - |

**Returns:** [C8oSettings](_c8osettings_.c8osettings.md)

___
<a id="setlogc8o"></a>

###  setLogC8o

▸ **setLogC8o**(logC8o: *`boolean`*): [C8oSettings](_c8osettings_.c8osettings.md)

setLogC8o

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| logC8o | `boolean` |  - |

**Returns:** [C8oSettings](_c8osettings_.c8osettings.md)

___
<a id="setloglevellocal"></a>

###  setLogLevelLocal

▸ **setLogLevelLocal**(logLevelLocal: *[C8oLogLevel](_c8ologlevel_.c8ologlevel.md)*): [C8oSettings](_c8osettings_.c8osettings.md)

Sets a value indicating the log level you want in the device console 0: ALL, 1: NONE, 2: TRACE, 3: DEBUG, 4: INFO, 5: WARN, 6: ERROR, 7: FATAL or use the android.util.Log constants Default is **0**.

**Parameters:**

| Param | Type |
| ------ | ------ |
| logLevelLocal | [C8oLogLevel](_c8ologlevel_.c8ologlevel.md) |

**Returns:** [C8oSettings](_c8osettings_.c8osettings.md)
The current <b>C8oSettings</b>, for chaining.

___
<a id="setlogonfail"></a>

###  setLogOnFail

▸ **setLogOnFail**(logOnFail: *`function`*): [C8oSettings](_c8osettings_.c8osettings.md)

setLogOnFail

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| logOnFail | `function` |  - |

**Returns:** [C8oSettings](_c8osettings_.c8osettings.md)

___
<a id="setlogremote"></a>

###  setLogRemote

▸ **setLogRemote**(logRemote: *`boolean`*): [C8oSettings](_c8osettings_.c8osettings.md)

Sets a value indicating if logs are sent to the Convertigo server.  
Default is **true**.

**Parameters:**

| Param | Type |
| ------ | ------ |
| logRemote | `boolean` |

**Returns:** [C8oSettings](_c8osettings_.c8osettings.md)
The current <b>C8oSettings</b>, for chaining.

___
<a id="settimeout"></a>

###  setTimeout

▸ **setTimeout**(timeout: *`number`*): [C8oSettings](_c8osettings_.c8osettings.md)

Sets the connection timeout to Convertigo in milliseconds. A value of zero means the timeout is not used.  
Default is **0**.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| timeout | `number` |  The timeout. |

**Returns:** [C8oSettings](_c8osettings_.c8osettings.md)
The current <b>C8oSettings</b>, for chaining.

___
<a id="settrustallcertificates"></a>

###  setTrustAllCertificates

▸ **setTrustAllCertificates**(trustAllCertificates: *`boolean`*): [C8oSettings](_c8osettings_.c8osettings.md)

Set if c8o calls trust all certificates or not

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trustAllCertificates | `boolean` |  - |

**Returns:** [C8oSettings](_c8osettings_.c8osettings.md)
The current <b>C8oSettings</b>, for chaining.

___
<a id="setuseencryption"></a>

###  setUseEncryption

▸ **setUseEncryption**(useEncryption: *`boolean`*): [C8oSettings](_c8osettings_.c8osettings.md)

Set if c8o calls variables are encrypted or not

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| useEncryption | `boolean` |  - |

**Returns:** [C8oSettings](_c8osettings_.c8osettings.md)
The current <b>C8oSettings</b>, for chaining.

___

