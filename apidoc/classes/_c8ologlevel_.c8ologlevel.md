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

*Defined in [c8oLogLevel.ts:16](https://github.com/convertigo/react-native-c8osdk/blob/520c115/src/c8oLogLevel.ts#L16)*

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

*Defined in [c8oLogLevel.ts:15](https://github.com/convertigo/react-native-c8osdk/blob/520c115/src/c8oLogLevel.ts#L15)*

___
<a id="priority"></a>

###  priority

**● priority**: *`number`*

*Defined in [c8oLogLevel.ts:16](https://github.com/convertigo/react-native-c8osdk/blob/520c115/src/c8oLogLevel.ts#L16)*

___
<a id="c8o_log_levels"></a>

### `<Static>` C8O_LOG_LEVELS

**● C8O_LOG_LEVELS**: *[C8oLogLevel](_c8ologlevel_.c8ologlevel.md)[]* =  [C8oLogLevel.NULL, C8oLogLevel.NONE, C8oLogLevel.TRACE, C8oLogLevel.DEBUG, C8oLogLevel.INFO, C8oLogLevel.WARN, C8oLogLevel.ERROR, C8oLogLevel.FATAL]

*Defined in [c8oLogLevel.ts:13](https://github.com/convertigo/react-native-c8osdk/blob/520c115/src/c8oLogLevel.ts#L13)*

___
<a id="debug"></a>

### `<Static>` DEBUG

**● DEBUG**: *[C8oLogLevel](_c8ologlevel_.c8ologlevel.md)* =  new C8oLogLevel("debug", 3)

*Defined in [c8oLogLevel.ts:7](https://github.com/convertigo/react-native-c8osdk/blob/520c115/src/c8oLogLevel.ts#L7)*

___
<a id="error"></a>

### `<Static>` ERROR

**● ERROR**: *[C8oLogLevel](_c8ologlevel_.c8ologlevel.md)* =  new C8oLogLevel("error", 6)

*Defined in [c8oLogLevel.ts:10](https://github.com/convertigo/react-native-c8osdk/blob/520c115/src/c8oLogLevel.ts#L10)*

___
<a id="fatal"></a>

### `<Static>` FATAL

**● FATAL**: *[C8oLogLevel](_c8ologlevel_.c8ologlevel.md)* =  new C8oLogLevel("fatal", 7)

*Defined in [c8oLogLevel.ts:11](https://github.com/convertigo/react-native-c8osdk/blob/520c115/src/c8oLogLevel.ts#L11)*

___
<a id="info"></a>

### `<Static>` INFO

**● INFO**: *[C8oLogLevel](_c8ologlevel_.c8ologlevel.md)* =  new C8oLogLevel("info", 4)

*Defined in [c8oLogLevel.ts:8](https://github.com/convertigo/react-native-c8osdk/blob/520c115/src/c8oLogLevel.ts#L8)*

___
<a id="none"></a>

### `<Static>` NONE

**● NONE**: *[C8oLogLevel](_c8ologlevel_.c8ologlevel.md)* =  new C8oLogLevel("none", 1)

*Defined in [c8oLogLevel.ts:5](https://github.com/convertigo/react-native-c8osdk/blob/520c115/src/c8oLogLevel.ts#L5)*

___
<a id="null"></a>

### `<Static>` NULL

**● NULL**: *[C8oLogLevel](_c8ologlevel_.c8ologlevel.md)* =  new C8oLogLevel("", 0)

*Defined in [c8oLogLevel.ts:4](https://github.com/convertigo/react-native-c8osdk/blob/520c115/src/c8oLogLevel.ts#L4)*

___
<a id="trace"></a>

### `<Static>` TRACE

**● TRACE**: *[C8oLogLevel](_c8ologlevel_.c8ologlevel.md)* =  new C8oLogLevel("trace", 2)

*Defined in [c8oLogLevel.ts:6](https://github.com/convertigo/react-native-c8osdk/blob/520c115/src/c8oLogLevel.ts#L6)*

___
<a id="warn"></a>

### `<Static>` WARN

**● WARN**: *[C8oLogLevel](_c8ologlevel_.c8ologlevel.md)* =  new C8oLogLevel("warn", 5)

*Defined in [c8oLogLevel.ts:9](https://github.com/convertigo/react-native-c8osdk/blob/520c115/src/c8oLogLevel.ts#L9)*

___

## Methods

<a id="getc8ologlevel"></a>

### `<Static>` getC8oLogLevel

▸ **getC8oLogLevel**(name: *`string`*): [C8oLogLevel](_c8ologlevel_.c8ologlevel.md)

*Defined in [c8oLogLevel.ts:23](https://github.com/convertigo/react-native-c8osdk/blob/520c115/src/c8oLogLevel.ts#L23)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| name | `string` |

**Returns:** [C8oLogLevel](_c8ologlevel_.c8ologlevel.md)

___

