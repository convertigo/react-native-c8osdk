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

* [addClientCertificate](_c8osettings_.c8osettings.md#addclientcertificate)
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

*Defined in c8oSettings.ts:10*

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

*Inherited from [C8oBase](_c8obase_.c8obase.md).[_authenticationCookieValue](_c8obase_.c8obase.md#_authenticationcookievalue)*

*Defined in [c8oBase.ts:21](https://github.com/convertigo/react-native-c8osdk/blob/520c115/src/c8oBase.ts#L21)*

___
<a id="_clientcertificatebinaries"></a>

### `<Protected>` _clientCertificateBinaries

**● _clientCertificateBinaries**: *`Object`*

*Inherited from [C8oBase](_c8obase_.c8obase.md).[_clientCertificateBinaries](_c8obase_.c8obase.md#_clientcertificatebinaries)*

*Defined in [c8oBase.ts:10](https://github.com/convertigo/react-native-c8osdk/blob/520c115/src/c8oBase.ts#L10)*

___
<a id="_clientcertificatefiles"></a>

### `<Protected>` _clientCertificateFiles

**● _clientCertificateFiles**: *`Object`*

*Inherited from [C8oBase](_c8obase_.c8obase.md).[_clientCertificateFiles](_c8obase_.c8obase.md#_clientcertificatefiles)*

*Defined in [c8oBase.ts:9](https://github.com/convertigo/react-native-c8osdk/blob/520c115/src/c8oBase.ts#L9)*

___
<a id="_cookies"></a>

### `<Protected>` _cookies

**● _cookies**: *`Object`*

*Inherited from [C8oBase](_c8obase_.c8obase.md).[_cookies](_c8obase_.c8obase.md#_cookies)*

*Defined in [c8oBase.ts:8](https://github.com/convertigo/react-native-c8osdk/blob/520c115/src/c8oBase.ts#L8)*

___
<a id="_defaultdatabasename"></a>

### `<Protected>` _defaultDatabaseName

**● _defaultDatabaseName**: *`string`* =  null

*Inherited from [C8oBase](_c8obase_.c8obase.md).[_defaultDatabaseName](_c8obase_.c8obase.md#_defaultdatabasename)*

*Defined in [c8oBase.ts:20](https://github.com/convertigo/react-native-c8osdk/blob/520c115/src/c8oBase.ts#L20)*

___
<a id="_disablessl"></a>

### `<Protected>` _disableSSL

**● _disableSSL**: *`boolean`* = false

*Inherited from [C8oBase](_c8obase_.c8obase.md).[_disableSSL](_c8obase_.c8obase.md#_disablessl)*

*Defined in [c8oBase.ts:29](https://github.com/convertigo/react-native-c8osdk/blob/520c115/src/c8oBase.ts#L29)*

___
<a id="_endpointsettings"></a>

### `<Protected>` _endpointSettings

**● _endpointSettings**: *`string`*

*Inherited from [C8oBase](_c8obase_.c8obase.md).[_endpointSettings](_c8obase_.c8obase.md#_endpointsettings)*

*Defined in [c8oBase.ts:5](https://github.com/convertigo/react-native-c8osdk/blob/520c115/src/c8oBase.ts#L5)*

___
<a id="_fullsynclocalsuffix"></a>

### `<Protected>` _fullSyncLocalSuffix

**● _fullSyncLocalSuffix**: *`string`* =  null

*Inherited from [C8oBase](_c8obase_.c8obase.md).[_fullSyncLocalSuffix](_c8obase_.c8obase.md#_fullsynclocalsuffix)*

*Defined in [c8oBase.ts:22](https://github.com/convertigo/react-native-c8osdk/blob/520c115/src/c8oBase.ts#L22)*

___
<a id="_fullsyncpassword"></a>

### `<Protected>` _fullSyncPassword

**● _fullSyncPassword**: *`string`*

*Inherited from [C8oBase](_c8obase_.c8obase.md).[_fullSyncPassword](_c8obase_.c8obase.md#_fullsyncpassword)*

*Defined in [c8oBase.ts:25](https://github.com/convertigo/react-native-c8osdk/blob/520c115/src/c8oBase.ts#L25)*

___
<a id="_fullsyncserverurl"></a>

### `<Protected>` _fullSyncServerUrl

**● _fullSyncServerUrl**: *`string`* = "http://localhost:5984"

*Inherited from [C8oBase](_c8obase_.c8obase.md).[_fullSyncServerUrl](_c8obase_.c8obase.md#_fullsyncserverurl)*

*Defined in [c8oBase.ts:23](https://github.com/convertigo/react-native-c8osdk/blob/520c115/src/c8oBase.ts#L23)*

___
<a id="_fullsyncusername"></a>

### `<Protected>` _fullSyncUsername

**● _fullSyncUsername**: *`string`*

*Inherited from [C8oBase](_c8obase_.c8obase.md).[_fullSyncUsername](_c8obase_.c8obase.md#_fullsyncusername)*

*Defined in [c8oBase.ts:24](https://github.com/convertigo/react-native-c8osdk/blob/520c115/src/c8oBase.ts#L24)*

___
<a id="_headers"></a>

### `<Protected>` _headers

**● _headers**: *`Object`*

*Inherited from [C8oBase](_c8obase_.c8obase.md).[_headers](_c8obase_.c8obase.md#_headers)*

*Defined in [c8oBase.ts:35](https://github.com/convertigo/react-native-c8osdk/blob/520c115/src/c8oBase.ts#L35)*

___
<a id="_initiallogremote"></a>

### `<Protected>` _initialLogRemote

**● _initialLogRemote**: *`boolean`* = true

*Inherited from [C8oBase](_c8obase_.c8obase.md).[_initialLogRemote](_c8obase_.c8obase.md#_initiallogremote)*

*Defined in [c8oBase.ts:14](https://github.com/convertigo/react-native-c8osdk/blob/520c115/src/c8oBase.ts#L14)*

___
<a id="_keystorepassword"></a>

### `<Protected>` _keyStorePassword

**● _keyStorePassword**: *`string`*

*Inherited from [C8oBase](_c8obase_.c8obase.md).[_keyStorePassword](_c8obase_.c8obase.md#_keystorepassword)*

*Defined in [c8oBase.ts:31](https://github.com/convertigo/react-native-c8osdk/blob/520c115/src/c8oBase.ts#L31)*

___
<a id="_logc8o"></a>

### `<Protected>` _logC8o

**● _logC8o**: *`boolean`* = false

*Inherited from [C8oBase](_c8obase_.c8obase.md).[_logC8o](_c8obase_.c8obase.md#_logc8o)*

*Defined in [c8oBase.ts:16](https://github.com/convertigo/react-native-c8osdk/blob/520c115/src/c8oBase.ts#L16)*

___
<a id="_loglevellocal"></a>

### `<Protected>` _logLevelLocal

**● _logLevelLocal**: *[C8oLogLevel](_c8ologlevel_.c8ologlevel.md)* =  C8oLogLevel.NONE

*Inherited from [C8oBase](_c8obase_.c8obase.md).[_logLevelLocal](_c8obase_.c8obase.md#_loglevellocal)*

*Defined in [c8oBase.ts:15](https://github.com/convertigo/react-native-c8osdk/blob/520c115/src/c8oBase.ts#L15)*

___
<a id="_logonfail"></a>

### `<Protected>` _logOnFail

**● _logOnFail**: *`function`*

*Inherited from [C8oBase](_c8obase_.c8obase.md).[_logOnFail](_c8obase_.c8obase.md#_logonfail)*

*Defined in [c8oBase.ts:17](https://github.com/convertigo/react-native-c8osdk/blob/520c115/src/c8oBase.ts#L17)*

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

*Inherited from [C8oBase](_c8obase_.c8obase.md).[_logRemote](_c8obase_.c8obase.md#_logremote)*

*Defined in [c8oBase.ts:13](https://github.com/convertigo/react-native-c8osdk/blob/520c115/src/c8oBase.ts#L13)*

___
<a id="_timeout"></a>

### `<Protected>` _timeout

**● _timeout**: *`number`* =  -1

*Inherited from [C8oBase](_c8obase_.c8obase.md).[_timeout](_c8obase_.c8obase.md#_timeout)*

*Defined in [c8oBase.ts:6](https://github.com/convertigo/react-native-c8osdk/blob/520c115/src/c8oBase.ts#L6)*

___
<a id="_trustallcertificates"></a>

### `<Protected>` _trustAllCertificates

**● _trustAllCertificates**: *`boolean`* = false

*Inherited from [C8oBase](_c8obase_.c8obase.md).[_trustAllCertificates](_c8obase_.c8obase.md#_trustallcertificates)*

*Defined in [c8oBase.ts:7](https://github.com/convertigo/react-native-c8osdk/blob/520c115/src/c8oBase.ts#L7)*

___
<a id="_truststorepassword"></a>

### `<Protected>` _trustStorePassword

**● _trustStorePassword**: *`string`*

*Inherited from [C8oBase](_c8obase_.c8obase.md).[_trustStorePassword](_c8obase_.c8obase.md#_truststorepassword)*

*Defined in [c8oBase.ts:33](https://github.com/convertigo/react-native-c8osdk/blob/520c115/src/c8oBase.ts#L33)*

___
<a id="_useencryption"></a>

### `<Protected>` _useEncryption

**● _useEncryption**: *`boolean`* = false

*Inherited from [C8oBase](_c8obase_.c8obase.md).[_useEncryption](_c8obase_.c8obase.md#_useencryption)*

*Defined in [c8oBase.ts:28](https://github.com/convertigo/react-native-c8osdk/blob/520c115/src/c8oBase.ts#L28)*

___

## Accessors

<a id="authenticationcookievalue"></a>

###  authenticationCookieValue

getauthenticationCookieValue(): `string`

*Inherited from [C8oBase](_c8obase_.c8obase.md).[authenticationCookieValue](_c8obase_.c8obase.md#authenticationcookievalue)*

*Defined in [c8oBase.ts:91](https://github.com/convertigo/react-native-c8osdk/blob/520c115/src/c8oBase.ts#L91)*

**Returns:** `string`

___
<a id="cookies"></a>

###  cookies

getcookies(): `Object`

*Inherited from [C8oBase](_c8obase_.c8obase.md).[cookies](_c8obase_.c8obase.md#cookies)*

*Defined in [c8oBase.ts:61](https://github.com/convertigo/react-native-c8osdk/blob/520c115/src/c8oBase.ts#L61)*

Gets initial cookies to send to the Convertigo server.  
Default is **null**.

**Returns:** `Object`
List of cookies.

___
<a id="defaultdatabasename"></a>

###  defaultDatabaseName

getdefaultDatabaseName(): `string`

*Inherited from [C8oBase](_c8obase_.c8obase.md).[defaultDatabaseName](_c8obase_.c8obase.md#defaultdatabasename)*

*Defined in [c8oBase.ts:87](https://github.com/convertigo/react-native-c8osdk/blob/520c115/src/c8oBase.ts#L87)*

**Returns:** `string`

___
<a id="endpoint"></a>

###  endpoint

getendpoint(): `string`

*Inherited from [C8oBase](_c8obase_.c8obase.md).[endpoint](_c8obase_.c8obase.md#endpoint)*

*Defined in [c8oBase.ts:122](https://github.com/convertigo/react-native-c8osdk/blob/520c115/src/c8oBase.ts#L122)*

Gets the endpoint define in C8oSettings

**Returns:** `string`
The current <b>endpoint</b>, if defined by c8oSettings.

___
<a id="fullsynclocalsuffix"></a>

###  fullSyncLocalSuffix

getfullSyncLocalSuffix(): `string`

*Inherited from [C8oBase](_c8obase_.c8obase.md).[fullSyncLocalSuffix](_c8obase_.c8obase.md#fullsynclocalsuffix)*

*Defined in [c8oBase.ts:95](https://github.com/convertigo/react-native-c8osdk/blob/520c115/src/c8oBase.ts#L95)*

**Returns:** `string`

___
<a id="fullsyncpassword"></a>

###  fullSyncPassword

getfullSyncPassword(): `string`

*Inherited from [C8oBase](_c8obase_.c8obase.md).[fullSyncPassword](_c8obase_.c8obase.md#fullsyncpassword)*

*Defined in [c8oBase.ts:110](https://github.com/convertigo/react-native-c8osdk/blob/520c115/src/c8oBase.ts#L110)*

**Returns:** `string`

___
<a id="fullsyncserverurl"></a>

###  fullSyncServerUrl

getfullSyncServerUrl(): `string`

*Inherited from [C8oBase](_c8obase_.c8obase.md).[fullSyncServerUrl](_c8obase_.c8obase.md#fullsyncserverurl)*

*Defined in [c8oBase.ts:100](https://github.com/convertigo/react-native-c8osdk/blob/520c115/src/c8oBase.ts#L100)*

**Returns:** `string`

___
<a id="fullsyncusername"></a>

###  fullSyncUsername

getfullSyncUsername(): `string`

*Inherited from [C8oBase](_c8obase_.c8obase.md).[fullSyncUsername](_c8obase_.c8obase.md#fullsyncusername)*

*Defined in [c8oBase.ts:105](https://github.com/convertigo/react-native-c8osdk/blob/520c115/src/c8oBase.ts#L105)*

**Returns:** `string`

___
<a id="headers"></a>

###  headers

getheaders(): `Object`

*Inherited from [C8oBase](_c8obase_.c8obase.md).[headers](_c8obase_.c8obase.md#headers)*

*Defined in [c8oBase.ts:126](https://github.com/convertigo/react-native-c8osdk/blob/520c115/src/c8oBase.ts#L126)*

**Returns:** `Object`

___
<a id="logc8o"></a>

###  logC8o

getlogC8o(): `boolean`

*Inherited from [C8oBase](_c8obase_.c8obase.md).[logC8o](_c8obase_.c8obase.md#logc8o)*

*Defined in [c8oBase.ts:83](https://github.com/convertigo/react-native-c8osdk/blob/520c115/src/c8oBase.ts#L83)*

**Returns:** `boolean`

___
<a id="loglevellocal"></a>

###  logLevelLocal

getlogLevelLocal(): [C8oLogLevel](_c8ologlevel_.c8ologlevel.md)

*Inherited from [C8oBase](_c8obase_.c8obase.md).[logLevelLocal](_c8obase_.c8obase.md#loglevellocal)*

*Defined in [c8oBase.ts:79](https://github.com/convertigo/react-native-c8osdk/blob/520c115/src/c8oBase.ts#L79)*

Gets a value indicating logs level local

**Returns:** [C8oLogLevel](_c8ologlevel_.c8ologlevel.md)
C8oLogLevel object

___
<a id="logonfail"></a>

###  logOnFail

getlogOnFail(): `function`

*Inherited from [C8oBase](_c8obase_.c8obase.md).[logOnFail](_c8obase_.c8obase.md#logonfail)*

*Defined in [c8oBase.ts:114](https://github.com/convertigo/react-native-c8osdk/blob/520c115/src/c8oBase.ts#L114)*

**Returns:** `function`

___
<a id="logremote"></a>

###  logRemote

getlogRemote(): `boolean`

*Inherited from [C8oBase](_c8obase_.c8obase.md).[logRemote](_c8obase_.c8obase.md#logremote)*

*Defined in [c8oBase.ts:70](https://github.com/convertigo/react-native-c8osdk/blob/520c115/src/c8oBase.ts#L70)*

Gets a value indicating if logs are sent to the Convertigo server.  
Default is **true**.

**Returns:** `boolean`
<b>true</b> if logs are sent to the Convertigo server; otherwise, <b>false</b>.

___
<a id="timeout"></a>

###  timeout

gettimeout(): `number`

*Inherited from [C8oBase](_c8obase_.c8obase.md).[timeout](_c8obase_.c8obase.md#timeout)*

*Defined in [c8oBase.ts:43](https://github.com/convertigo/react-native-c8osdk/blob/520c115/src/c8oBase.ts#L43)*

Gets the connection timeout to Convertigo in milliseconds. A value of zero means the timeout is not used.  
Default is **0**.

**Returns:** `number`
The timeout.

___
<a id="trustallcertificates"></a>

###  trustAllCertificates

gettrustAllCertificates(): `boolean`

*Inherited from [C8oBase](_c8obase_.c8obase.md).[trustAllCertificates](_c8obase_.c8obase.md#trustallcertificates)*

*Defined in [c8oBase.ts:52](https://github.com/convertigo/react-native-c8osdk/blob/520c115/src/c8oBase.ts#L52)*

Gets a value indicating whether https calls trust all certificates or not.  
Default is **false**.

**Returns:** `boolean`
<b>true</b> if https calls trust all certificates; otherwise, <b>false</b>.

___

## Methods

<a id="addclientcertificate"></a>

###  addClientCertificate

▸ **addClientCertificate**(anyCertificate: *`string`*, password: *`string`*): [C8oSettings](_c8osettings_.c8osettings.md)

▸ **addClientCertificate**(anyCertificate: *`number`*, password: *`string`*): [C8oSettings](_c8osettings_.c8osettings.md)

*Defined in c8oSettings.ts:69*

addClientCertificate

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| anyCertificate | `string` |  - |
| password | `string` |  - |

**Returns:** [C8oSettings](_c8osettings_.c8osettings.md)

*Defined in c8oSettings.ts:77*

addClientCertificate

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| anyCertificate | `number` |  - |
| password | `string` |  - |

**Returns:** [C8oSettings](_c8osettings_.c8osettings.md)

___
<a id="addcookie"></a>

###  addCookie

▸ **addCookie**(name: *`string`*, value: *`string`*): [C8oSettings](_c8osettings_.c8osettings.md)

*Defined in c8oSettings.ts:106*

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

*Defined in c8oSettings.ts:58*

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

*Defined in c8oSettings.ts:25*

Clone C8osettings object

**Returns:** [C8oSettings](_c8osettings_.c8osettings.md)

___
<a id="copy"></a>

###  copy

▸ **copy**(c8oBase: *[C8oBase](_c8obase_.c8obase.md)*): `void`

*Inherited from [C8oBase](_c8obase_.c8obase.md).[copy](_c8obase_.c8obase.md#copy)*

*Defined in [c8oBase.ts:130](https://github.com/convertigo/react-native-c8osdk/blob/520c115/src/c8oBase.ts#L130)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| c8oBase | [C8oBase](_c8obase_.c8obase.md) |

**Returns:** `void`

___
<a id="setauthenticationcookievalue"></a>

###  setAuthenticationCookieValue

▸ **setAuthenticationCookieValue**(authenticationCookieValue: *`string`*): [C8oSettings](_c8osettings_.c8osettings.md)

*Defined in c8oSettings.ts:173*

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

*Defined in c8oSettings.ts:163*

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

*Defined in c8oSettings.ts:34*

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

*Defined in c8oSettings.ts:213*

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

*Defined in c8oSettings.ts:203*

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

*Defined in c8oSettings.ts:183*

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

*Defined in c8oSettings.ts:193*

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

*Defined in c8oSettings.ts:141*

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

*Defined in c8oSettings.ts:131*

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

*Defined in c8oSettings.ts:151*

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

*Defined in c8oSettings.ts:119*

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

*Defined in c8oSettings.ts:45*

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

*Defined in c8oSettings.ts:235*

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

*Defined in c8oSettings.ts:224*

Set if c8o calls variables are encrypted or not

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| useEncryption | `boolean` |  - |

**Returns:** [C8oSettings](_c8osettings_.c8osettings.md)
The current <b>C8oSettings</b>, for chaining.

___

