function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Checkbox, CheckboxAndroid, CheckboxIOS } from './CheckboxElements';
import Text from '../Typography/Text';
import TouchableRipple from '../TouchableRipple/TouchableRipple';
import { withTheme } from '../../core/theming';

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
    checkbox = /*#__PURE__*/React.createElement(CheckboxAndroid, checkboxProps);
  } else if (mode === 'ios') {
    checkbox = /*#__PURE__*/React.createElement(CheckboxIOS, checkboxProps);
  } else {
    checkbox = /*#__PURE__*/React.createElement(Checkbox, checkboxProps);
  }

  return /*#__PURE__*/React.createElement(TouchableRipple, {
    onPress: onPress,
    testID: testID
  }, /*#__PURE__*/React.createElement(View, {
    style: [styles.container, style],
    pointerEvents: "none"
  }, /*#__PURE__*/React.createElement(Text, {
    selectable: false,
    style: [styles.label, {
      color: theme.colors.text
    }, labelStyle]
  }, label), checkbox));
};

CheckboxItem.displayName = 'Checkbox.Item';
export default withTheme(CheckboxItem); // @component-docs ignore-next-line

const CheckboxItemWithTheme = withTheme(CheckboxItem); // @component-docs ignore-next-line

export { CheckboxItemWithTheme as CheckboxItem };
const styles = StyleSheet.create({
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