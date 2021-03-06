function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { Text as NativeText } from 'react-native';
import { withTheme } from '../../core/theming';

// @component-group Typography

/**
 * Text component which follows styles from the theme.
 *
<<<<<<< HEAD
 * @extends Text props https://reactnative.dev/docs/text.html#props
=======
 * @extends Text props https://reactnative.dev/docs/text#props
>>>>>>> 6b72d3e921217f600be45210bf15ee57674f95ac
 */
const Text = (_ref, ref) => {
  let {
    style,
    theme
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["style", "theme"]);

  const root = React.useRef(null);
  React.useImperativeHandle(ref, () => ({
    setNativeProps: args => {
      var _root$current;

      return (_root$current = root.current) === null || _root$current === void 0 ? void 0 : _root$current.setNativeProps(args);
    }
  }));
  return /*#__PURE__*/React.createElement(NativeText, _extends({}, rest, {
    ref: root,
    style: [_objectSpread(_objectSpread({}, theme.fonts.regular), {}, {
      color: theme.colors.text,
      textAlign: 'left'
    }), style]
  }));
};

export default /*#__PURE__*/React.memo(withTheme( /*#__PURE__*/React.forwardRef(Text)));
//# sourceMappingURL=Text.js.map