"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.accessibilityProps = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _colors = require("../styles/themes/v2/colors");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const MaterialCommunityIcons = ({
  color,
  size,
  ...rest
}) => {
  return /*#__PURE__*/React.createElement(_reactNative.Text, _extends({}, rest, {
    style: [styles.icon, {
      color,
      fontSize: size
    }],
    pointerEvents: "none",
    selectable: false
  }), "\u25A1");
};
const accessibilityProps = exports.accessibilityProps = _reactNative.Platform.OS === 'web' ? {
  role: 'img',
  focusable: false
} : {
  accessibilityElementsHidden: true,
  importantForAccessibility: 'no-hide-descendants'
};
const defaultIcon = ({
  name,
  color = _colors.black,
  size,
  direction,
  allowFontScaling,
  testID
}) => /*#__PURE__*/React.createElement(MaterialCommunityIcons, _extends({
  allowFontScaling: allowFontScaling,
  name: name,
  color: color,
  size: size,
  style: [{
    transform: [{
      scaleX: direction === 'rtl' ? -1 : 1
    }],
    lineHeight: size
  }, styles.icon],
  pointerEvents: "none",
  selectable: false,
  testID: testID
}, accessibilityProps));
const styles = _reactNative.StyleSheet.create({
  // eslint-disable-next-line react-native/no-color-literals
  icon: {
    backgroundColor: 'transparent'
  }
});
var _default = exports.default = defaultIcon;
//# sourceMappingURL=MaterialCommunityIcon.js.map