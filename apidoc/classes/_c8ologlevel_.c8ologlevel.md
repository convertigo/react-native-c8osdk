[react-native-c8osdk](../README.md) > ["c8oLogLevel"](../modules/_c8ologlevel_.md) > [C8oLogLevel](../classes/_c8ologlevel_.c8ologlevel.md)

# Class: C8oLogLevel

## Hierarchy

**C8oLogLevel**

## Index

### Constructors

* [constructor](_c8ologlevel_.c8ologlevel.md#constructor)

### Properties

* [name](_c8ologlevel_.c8ologlevel.md#name)
* [priority](_c8ologlevel_.c8ologlevel.md#priority)
* [C8O_LOG_LEVELS](_c8ologlevel_.c8ologlevel.md#c8o_log_levels)
* [DEBUG](_c8ologlevel_.c8ologlevel.md#debug)
* [ERROR](_c8ologlevel_.c8ologlevel.md#error)
* [FATAL](_c8ologlevel_.c8ologlevel.md#fatal)
* [INFO](_c8ologlevel_.c8ologlevel.md#info)
* [NONE](_c8ologlevel_.c8ologlevel.md#none)
* [NULL](_c8ologlevel_.c8ologlevel.md#null)
* [TRACE](_c8ologlevel_.c8ologlevel.md#trace)
* [WARN](_c8ologlevel_.c8ologlevel.md#warn)

### Methods

* [getC8oLogLevel](_c8ologlevel_.c8ologlevel.md#getc8ologlevel)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new C8oLogLevel**(name: *`string`*, priority: *`number`*): [C8oLogLevel](_c8ologlevel_.c8ologlevel.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| name | `string` |
| priority | `number` |

**Returns:** [C8oLogLevel](_c8ologlevel_.c8ologlevel.md)

___

## Properties

<a id="name"></a>

###  name

**● name**: *`string`*

___
<a id="priority"></a>

###  priority

**● priority**: *`number`*

___
<a id="c8o_log_levels"></a>

### `<Static>` C8O_LOG_LEVELS

**● C8O_LOG_LEVELS**: *[C8oLogLevel](_c8ologlevel_.c8ologlevel.md)[]* =  [C8oLogLevel.NULL, C8oLogLevel.NONE, C8oLogLevel.TRACE, C8oLogLevel.DEBUG, C8oLogLevel.INFO, C8oLogLevel.WARN, C8oLogLevel.ERROR, C8oLogLevel.FATAL]

___
<a id="debug"></a>

### `<Static>` DEBUG

**● DEBUG**: *[C8oLogLevel](_c8ologlevel_.c8ologlevel.md)* =  new C8oLogLevel("debug", 3)

___
<a id="error"></a>

### `<Static>` ERROR

**● ERROR**: *[C8oLogLevel](_c8ologlevel_.c8ologlevel.md)* =  new C8oLogLevel("error", 6)

___
<a id="fatal"></a>

### `<Static>` FATAL

**● FATAL**: *[C8oLogLevel](_c8ologlevel_.c8ologlevel.md)* =  new C8oLogLevel("fatal", 7)

___
<a id="info"></a>

### `<Static>` INFO

**● INFO**: *[C8oLogLevel](_c8ologlevel_.c8ologlevel.md)* =  new C8oLogLevel("info", 4)

___
<a id="none"></a>

### `<Static>` NONE

**● NONE**: *[C8oLogLevel](_c8ologlevel_.c8ologlevel.md)* =  new C8oLogLevel("none", 1)

___
<a id="null"></a>

### `<Static>` NULL

**● NULL**: *[C8oLogLevel](_c8ologlevel_.c8ologlevel.md)* =  new C8oLogLevel("", 0)

___
<a id="trace"></a>

### `<Static>` TRACE

**● TRACE**: *[C8oLogLevel](_c8ologlevel_.c8ologlevel.md)* =  new C8oLogLevel("trace", 2)

___
<a id="warn"></a>

### `<Static>` WARN

**● WARN**: *[C8oLogLevel](_c8ologlevel_.c8ologlevel.md)* =  new C8oLogLevel("warn", 5)

___

## Methods

<a id="getc8ologlevel"></a>

### `<Static>` getC8oLogLevel

▸ **getC8oLogLevel**(name: *`string`*): [C8oLogLevel](_c8ologlevel_.c8ologlevel.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| name | `string` |

**Returns:** [C8oLogLevel](_c8ologlevel_.c8ologlevel.md)

___

