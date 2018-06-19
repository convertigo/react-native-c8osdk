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
* [c8oProgress](_c8opromise_.c8opromise.md#c8oprogress)
* [nextPromise](_c8opromise_.c8opromise.md#nextpromise)

### Methods

* [notifications](_c8opromise_.c8opromise.md#notifications)
* [onProgress](_c8opromise_.c8opromise.md#onprogress)

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
<a id="nextpromise"></a>

### `<Private>` nextPromise

**● nextPromise**: *[C8oPromise](_c8opromise_.c8opromise.md)<`T`>*

___

## Methods

<a id="notifications"></a>

###  notifications

▸ **notifications**(c8oOnProgress: *`function`*): `any`

**Parameters:**

| Param | Type |
| ------ | ------ |
| c8oOnProgress | `function` |

**Returns:** `any`

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

