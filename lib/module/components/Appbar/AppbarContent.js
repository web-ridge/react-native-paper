function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { Platform, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import color from 'color';
import Text from '../Typography/Text';
import { withTheme } from '../../core/theming';
import { white } from '../../styles/colors';

/**
 * A component used to display a title and optional subtitle in an appbar.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/appbar-content.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Appbar } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *     <Appbar.Header>
 *        <Appbar.Content title="Title" subtitle={'Subtitle'} />
 *     </Appbar.Header>
 * );
 *
 * export default MyComponent;
 * ```
 */
const AppbarContent = (_ref) => {
  let {
    color: titleColor = white,
    subtitle,
    subtitleStyle,
    onPress,
    style,
    titleRef,
    titleStyle,
    theme,
    title
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["color", "subtitle", "subtitleStyle", "onPress", "style", "titleRef", "titleStyle", "theme", "title"]);

  const {
    fonts
  } = theme;
  const subtitleColor = color(titleColor).alpha(0.7).rgb().string();
  return /*#__PURE__*/React.createElement(TouchableWithoutFeedback, {
    onPress: onPress,
    disabled: !onPress
  }, /*#__PURE__*/React.createElement(View, _extends({
    style: [styles.container, style]
  }, rest), /*#__PURE__*/React.createElement(Text, {
    ref: titleRef,
    style: [_objectSpread({
      color: titleColor
    }, Platform.OS === 'ios' ? fonts.regular : fonts.medium), styles.title, titleStyle],
    numberOfLines: 1,
    accessible: true // @ts-ignore Type '"heading"' is not assignable to type ...
    ,
    accessibilityRole: Platform.OS === 'web' ? 'heading' : 'header'
  }, title), subtitle ? /*#__PURE__*/React.createElement(Text, {
    style: [styles.subtitle, {
      color: subtitleColor
    }, subtitleStyle],
    numberOfLines: 1
  }, subtitle) : null));
};

AppbarContent.displayName = 'Appbar.Content';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12
  },
  title: {
    fontSize: Platform.OS === 'ios' ? 17 : 20
  },
  subtitle: {
    fontSize: Platform.OS === 'ios' ? 11 : 14
  }
});
export default /*#__PURE__*/React.memo(withTheme(AppbarContent)); // @component-docs ignore-next-line

const AppbarContentWithTheme = /*#__PURE__*/React.memo(withTheme(AppbarContent)); // @component-docs ignore-next-line

export { AppbarContentWithTheme as AppbarContent };
//# sourceMappingURL=AppbarContent.js.map