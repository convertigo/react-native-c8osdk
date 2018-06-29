[react-native-c8osdk](../README.md) > ["priority"](../modules/_priority_.md) > [Priority](../classes/_priority_.priority.md)

# Class: Priority

Defines whether the response should be retrieved from local cache or from Convertigo server when the device can access the network.  
When the device has no network access, the local cache response is used, if existing.

## Hierarchy

**Priority**

## Index

### Constructors

* [constructor](_priority_.priority.md#constructor)

### Properties

* [isAvailable](_priority_.priority.md#isavailable)
* [LOCAL](_priority_.priority.md#local)
* [SERVER](_priority_.priority.md#server)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Priority**(isAvailable: *`boolean`*): [Priority](_priority_.priority.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| isAvailable | `boolean` |

**Returns:** [Priority](_priority_.priority.md)

___

## Properties

<a id="isavailable"></a>

###  isAvailable

**● isAvailable**: *`boolean`*

___
<a id="local"></a>

### `<Static>` LOCAL

**● LOCAL**: *[Priority](_priority_.priority.md)* =  new Priority(true)

___
<a id="server"></a>

### `<Static>` SERVER

**● SERVER**: *[Priority](_priority_.priority.md)* =  new Priority(false)

___

