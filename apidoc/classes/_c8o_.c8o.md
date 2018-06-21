[react-native-c8osdk](../README.md) > ["c8o"](../modules/_c8o_.md) > [C8o](../classes/_c8o_.c8o.md)

# Class: C8o

Allows to send requests to a Convertigo Server (or Studio), these requests are called c8o calls.  
C8o calls are done thanks to a HTTP request or a CouchbaseLite usage.  
An instance of C8o is connected to only one Convertigo and can't change it.  
To use it, you have to first initialize the C8o instance with the Convertigo endpoint, then use call methods with Convertigo variables as parameter.

## Hierarchy

**C8o**

## Index

### Constructors

* [constructor](_c8o_.c8o.md#constructor)

### Properties

* [_c8oManagerEmitter](_c8o_.c8o.md#_c8omanageremitter)
* [log](_c8o_.c8o.md#log)
* [suscription](_c8o_.c8o.md#suscription)
* [suscriptionLive](_c8o_.c8o.md#suscriptionlive)
* [FS_LIVE](_c8o_.c8o.md#fs_live)

### Methods

* [callJson](_c8o_.c8o.md#calljson)
* [init](_c8o_.c8o.md#init)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new C8o**(): [C8o](_c8o_.c8o.md)

**Returns:** [C8o](_c8o_.c8o.md)

___

## Properties

<a id="_c8omanageremitter"></a>

### `<Private>` _c8oManagerEmitter

**● _c8oManagerEmitter**: *`any`* =  new NativeEventEmitter(C8oReact)

___
<a id="log"></a>

###  log

**● log**: *[C8oLogger](_c8ologger_.c8ologger.md)*

___
<a id="suscription"></a>

###  suscription

**● suscription**: *`Object`*

___
<a id="suscriptionlive"></a>

###  suscriptionLive

**● suscriptionLive**: *`Object`*

___
<a id="fs_live"></a>

### `<Static>` FS_LIVE

**● FS_LIVE**: *`string`* = "__live"

Use it with "fs://" request as parameter to enable the live request feature.  
Must be followed by a string parameter, the 'liveid' that can be use to cancel the live request using c8o.cancelLive(liveid) method.  
A live request automatically recall the then or thenUI handler when the database changed.

___

## Methods

<a id="calljson"></a>

###  callJson

▸ **callJson**(requestable: *`string`*, parameters: *`any`*): [C8oPromise](_c8opromise_.c8opromise.md)<`any`>

Makes a c8o call with c8o requestable out of parameters, expecting a JSON response through a promise.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| requestable | `string` |  Contains the Convertigo Sequence or Transaction targeted (Syntax: "<project>.<sequence>" or "<project>.<connector>.<transaction>") |
| parameters | `any` |

**Returns:** [C8oPromise](_c8opromise_.c8opromise.md)<`any`>
Promise<any>

___
<a id="init"></a>

###  init

▸ **init**(endpoint: *`string`*, c8oSettings?: *[C8oSettings](_c8osettings_.c8osettings.md)*): `Promise`<`any`>

This method allow you to init your C8o Object, passing it an endpoint and a C8oSettings object

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| endpoint | `string` |  string The endpoint |
| `Optional` c8oSettings | [C8oSettings](_c8osettings_.c8osettings.md) |  C8oSettings, the settings for this c8o Object |

**Returns:** `Promise`<`any`>
Promise<any>

___

