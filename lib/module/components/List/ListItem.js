function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import color from 'color';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import TouchableRipple from '../TouchableRipple/TouchableRipple';
import Text from '../Typography/Text';
import { withTheme } from '../../core/theming';

/**
 * A component to show tiles inside a List.
 *
 * <div class="screenshots">
 *   <img class="medium" src="screenshots/list-item-1.png" />
 *   <img class="medium" src="screenshots/list-item-2.png" />
 *   <img class="medium" src="screenshots/list-item-3.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { List } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <List.Item
 *     title="First Item"
 *     description="Item description"
 *     left={props => <List.Icon {...props} icon="folder" />}
 *   />
 * );
 *
 * export default MyComponent;
 * ```
 *
 * @extends TouchableRipple props https://callstack.github.io/react-native-paper/touchable-ripple.html
 */
const ListItem = (_ref) => {
  let {
    left,
    right,
    title,
    description,
    onPress,
    theme,
    style,
    titleStyle,
    titleNumberOfLines = 1,
    descriptionNumberOfLines = 2,
    titleEllipsizeMode,
    descriptionEllipsizeMode,
    descriptionStyle
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["left", "right", "title", "description", "onPress", "theme", "style", "titleStyle", "titleNumberOfLines", "descriptionNumberOfLines", "titleEllipsizeMode", "descriptionEllipsizeMode", "descriptionStyle"]);

  const renderDescription = (descriptionColor, description) => {
    return typeof description === 'function' ? description({
      selectable: false,
      ellipsizeMode: descriptionEllipsizeMode,
      color: descriptionColor,
      fontSize: styles.description.fontSize
    }) : /*#__PURE__*/React.createElement(Text, {
      selectable: false,
      numberOfLines: descriptionNumberOfLines,
      ellipsizeMode: descriptionEllipsizeMode,
      style: [styles.description, {
        color: descriptionColor
      }, descriptionStyle]
    }, description);
  };

  const titleColor = color(theme.colors.text).alpha(0.87).rgb().string();
  const descriptionColor = color(theme.colors.text).alpha(0.54).rgb().string();
  return /*#__PURE__*/React.createElement(TouchableRipple, _extends({}, rest, {
    style: [styles.container, style],
    onPress: onPress
  }), /*#__PURE__*/React.createElement(View, {
    style: styles.row
  }, left ? left({
    color: descriptionColor,
    style: description ? styles.iconMarginLeft : _objectSpread(_objectSpread({}, styles.iconMarginLeft), styles.marginVerticalNone)
  }) : null, /*#__PURE__*/React.createElement(View, {
    style: [styles.item, styles.content]
  }, /*#__PURE__*/React.createElement(Text, {
    selectable: false,
    ellipsizeMode: titleEllipsizeMode,
    numberOfLines: titleNumberOfLines,
    style: [styles.title, {
      color: titleColor
    }, titleStyle]
  }, title), description ? renderDescription(descriptionColor, description) : null), right ? right({
    color: descriptionColor,
    style: description ? styles.iconMarginRight : _objectSpread(_objectSpread({}, styles.iconMarginRight), styles.marginVerticalNone)
  }) : null));
};

ListItem.displayName = 'List.Item';
const styles = StyleSheet.create({
  container: {
    padding: 8
  },
  row: {
    flexDirection: 'row'
  },
  title: {
    fontSize: 16
  },
  description: {
    fontSize: 14
  },
  marginVerticalNone: {
    marginVertical: 0
  },
  iconMarginLeft: {
    marginLeft: 0,
    marginRight: 16
  },
  iconMarginRight: {
    marginRight: 0
  },
  item: {
    marginVertical: 6,
    paddingLeft: 8
  },
  content: {
    flex: 1,
    justifyContent: 'center'
  }
});
export default /*#__PURE__*/React.memo(withTheme(ListItem));
//# sourceMappingURL=ListItem.js.map