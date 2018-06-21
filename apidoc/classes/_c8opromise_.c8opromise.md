[react-native-c8osdk](../README.md) > ["c8oPromise"](../modules/_c8opromise_.md) > [C8oPromise](../classes/_c8opromise_.c8opromise.md)

# Class: C8oPromise

## Type parameters
#### T 
## Hierarchy

**C8oPromise**

## Index

### Constructors

* [constructor](_c8opromise_.c8opromise.md#constructor)

### Properties

* [c8o](_c8opromise_.c8opromise.md#c8o)
* [c8oFail](_c8opromise_.c8opromise.md#c8ofail)
* [c8oProgress](_c8opromise_.c8opromise.md#c8oprogress)
* [c8oResponse](_c8opromise_.c8opromise.md#c8oresponse)
* [lastFailure](_c8opromise_.c8opromise.md#lastfailure)
* [lastParameters](_c8opromise_.c8opromise.md#lastparameters)
* [lastResponse](_c8opromise_.c8opromise.md#lastresponse)
* [nextPromise](_c8opromise_.c8opromise.md#nextpromise)

### Methods

* [_onResponse](_c8opromise_.c8opromise.md#_onresponse)
* [async](_c8opromise_.c8opromise.md#async)
* [fail](_c8opromise_.c8opromise.md#fail)
* [onFailure](_c8opromise_.c8opromise.md#onfailure)
* [onProgress](_c8opromise_.c8opromise.md#onprogress)
* [onResponse](_c8opromise_.c8opromise.md#onresponse)
* [progress](_c8opromise_.c8opromise.md#progress)
* [then](_c8opromise_.c8opromise.md#then)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new C8oPromise**(c8o: *[C8o](_c8o_.c8o.md)*): [C8oPromise](_c8opromise_.c8opromise.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| c8o | [C8o](_c8o_.c8o.md) |

**Returns:** [C8oPromise](_c8opromise_.c8opromise.md)

___

## Properties

<a id="c8o"></a>

### `<Private>` c8o

**● c8o**: *[C8o](_c8o_.c8o.md)*

___
<a id="c8ofail"></a>

### `<Private>` c8oFail

**● c8oFail**: *`function`*

#### Type declaration
▸(error: *`Error`*, parameters: *`Object`*): [C8oPromise](_c8opromise_.c8opromise.md)<`T`>

**Parameters:**

| Param | Type |
| ------ | ------ |
| error | `Error` |
| parameters | `Object` |

**Returns:** [C8oPromise](_c8opromise_.c8opromise.md)<`T`>

___
<a id="c8oprogress"></a>

### `<Private>` c8oProgress

**● c8oProgress**: *`function`*

#### Type declaration
▸(C8oProgress: *`any`*): [C8oPromise](_c8opromise_.c8opromise.md)<`T`>

**Parameters:**

| Param | Type |
| ------ | ------ |
| C8oProgress | `any` |

**Returns:** [C8oPromise](_c8opromise_.c8opromise.md)<`T`>

___
<a id="c8oresponse"></a>

### `<Private>` c8oResponse

**● c8oResponse**: *`function`*

#### Type declaration
▸(response: *`T`*, parameters: *`Object`*): [C8oPromise](_c8opromise_.c8opromise.md)<`T`>

**Parameters:**

| Param | Type |
| ------ | ------ |
| response | `T` |
| parameters | `Object` |

**Returns:** [C8oPromise](_c8opromise_.c8opromise.md)<`T`>

___
<a id="lastfailure"></a>

### `<Private>` lastFailure

**● lastFailure**: *`Error`*

___
<a id="lastparameters"></a>

### `<Private>` lastParameters

**● lastParameters**: *`Object`*

___
<a id="lastresponse"></a>

### `<Private>` lastResponse

**● lastResponse**: *`T`*

___
<a id="nextpromise"></a>

### `<Private>` nextPromise

**● nextPromise**: *[C8oPromise](_c8opromise_.c8opromise.md)<`T`>*

___

## Methods

<a id="_onresponse"></a>

### `<Private>` _onResponse

▸ **_onResponse**(): `void`

**Returns:** `void`

___
<a id="async"></a>

###  async

▸ **async**(): `Promise`<`any`>

**Returns:** `Promise`<`any`>

___
<a id="fail"></a>

###  fail

▸ **fail**(c8oOnFail: *`function`*): `any`

**Parameters:**

| Param | Type |
| ------ | ------ |
| c8oOnFail | `function` |

**Returns:** `any`

___
<a id="onfailure"></a>

###  onFailure

▸ **onFailure**(error: *`Error`*, parameters: *`Object`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| error | `Error` |
| parameters | `Object` |

**Returns:** `void`

___
<a id="onprogress"></a>

###  onProgress

▸ **onProgress**(progress: *`any`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| progress | `any` |

**Returns:** `void`

___
<a id="onresponse"></a>

###  onResponse

▸ **onResponse**(response: *`T`*, parameters: *`Object`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| response | `T` |
| parameters | `Object` |

**Returns:** `void`

___
<a id="progress"></a>

###  progress

▸ **progress**(c8oOnProgress: *`function`*): `any`

**Parameters:**

| Param | Type |
| ------ | ------ |
| c8oOnProgress | `function` |

**Returns:** `any`

___
<a id="then"></a>

###  then

▸ **then**(c8oOnResponse: *`function`*): `any`

**Parameters:**

| Param | Type |
| ------ | ------ |
| c8oOnResponse | `function` |

**Returns:** `any`

___

