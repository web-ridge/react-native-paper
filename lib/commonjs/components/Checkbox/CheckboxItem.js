"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxItem = exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _CheckboxElements = require("./CheckboxElements");

var _Text = _interopRequireDefault(require("../Typography/Text"));

var _TouchableRipple = _interopRequireDefault(require("../TouchableRipple/TouchableRipple"));

var _theming = require("../../core/theming");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Checkbox.Item allows you to press the whole row (item) instead of only the Checkbox.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import { Checkbox } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <View>
 *     <Checkbox.Item label="Item" status="checked" />
 *   </View>
 * );
 *
 * export default MyComponent;
 *```
 */
const CheckboxItem = (_ref) => {
  let {
    style,
    status,
    label,
    onPress,
    labelStyle,
    theme,
    testID,
    mode
  } = _ref,
      props = _objectWithoutProperties(_ref, ["style", "status", "label", "onPress", "labelStyle", "theme", "testID", "mode"]);

  const checkboxProps = _objectSpread(_objectSpread({}, props), {}, {
    status,
    theme
  });

  let checkbox;

  if (mode === 'android') {
    checkbox = /*#__PURE__*/React.createElement(_CheckboxElements.CheckboxAndroid, checkboxProps);
  } else if (mode === 'ios') {
    checkbox = /*#__PURE__*/React.createElement(_CheckboxElements.CheckboxIOS, checkboxProps);
  } else {
    checkbox = /*#__PURE__*/React.createElement(_CheckboxElements.Checkbox, checkboxProps);
  }

  return /*#__PURE__*/React.createElement(_TouchableRipple.default, {
    onPress: onPress,
    testID: testID
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.container, style],
    pointerEvents: "none"
  }, /*#__PURE__*/React.createElement(_Text.default, {
    selectable: false,
    style: [styles.label, {
      color: theme.colors.text
    }, labelStyle]
  }, label), checkbox));
};

CheckboxItem.displayName = 'Checkbox.Item';

var _default = (0, _theming.withTheme)(CheckboxItem); // @component-docs ignore-next-line


exports.default = _default;
const CheckboxItemWithTheme = (0, _theming.withTheme)(CheckboxItem); // @component-docs ignore-next-line

exports.CheckboxItem = CheckboxItemWithTheme;

const styles = _reactNative.StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  label: {
    fontSize: 16
  }
});
//# sourceMappingURL=CheckboxItem.js.map