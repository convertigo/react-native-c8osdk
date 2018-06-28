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
* [internEmitter](_c8o_.c8o.md#internemitter)
* [ios](_c8o_.c8o.md#ios)
* [log](_c8o_.c8o.md#log)
* [subscription](_c8o_.c8o.md#subscription)
* [subscriptionLive](_c8o_.c8o.md#subscriptionlive)
* [FS_LIVE](_c8o_.c8o.md#fs_live)

### Methods

* [callJson](_c8o_.c8o.md#calljson)
* [cancelLive](_c8o_.c8o.md#cancellive)
* [init](_c8o_.c8o.md#init)
* [removeAllSubscriptions](_c8o_.c8o.md#removeallsubscriptions)
* [removeSpecificSubscriptions](_c8o_.c8o.md#removespecificsubscriptions)

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
<a id="internemitter"></a>

### `<Private>` internEmitter

**● internEmitter**: *`any`*

___
<a id="ios"></a>

### `<Private>` ios

**● ios**: *`Boolean`*

___
<a id="log"></a>

###  log

**● log**: *[C8oLogger](_c8ologger_.c8ologger.md)*

___
<a id="subscription"></a>

###  subscription

**● subscription**: *`Object`*

___
<a id="subscriptionlive"></a>

###  subscriptionLive

**● subscriptionLive**: *`Object`*

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
<a id="cancellive"></a>

###  cancelLive

▸ **cancelLive**(id: *`string`*): `Promise`<`any`>

Allows you to cancel a live request and remove the subscription

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  the id of the live request to cancel |

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
<a id="removeallsubscriptions"></a>

###  removeAllSubscriptions

▸ **removeAllSubscriptions**(): `void`

Allow you to remove all subscription in this instance. Must be call from componentWillUnmount method

**Returns:** `void`

___
<a id="removespecificsubscriptions"></a>

###  removeSpecificSubscriptions

▸ **removeSpecificSubscriptions**(id: *`string`*): `void`

Allow tou to remove a specific subscription in this instance.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string` |  The id associated to the subscription |

**Returns:** `void`

___

