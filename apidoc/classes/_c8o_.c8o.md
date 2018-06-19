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
* [progress](_c8o_.c8o.md#progress)

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
<a id="progress"></a>

###  progress

**● progress**: *[C8oPromise](_c8opromise_.c8opromise.md)<`any`>*

___

## Methods

<a id="calljson"></a>

###  callJson

▸ **callJson**(requestable: *`string`*, parameters: *`any`*): `Promise`<`any`>

Makes a c8o call with c8o requestable out of parameters, expecting a JSON response through a promise.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| requestable | `string` |  Contains the Convertigo Sequence or Transaction targeted (Syntax: "<project>.<sequence>" or "<project>.<connector>.<transaction>") |
| parameters | `any` |

**Returns:** `Promise`<`any`>
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

