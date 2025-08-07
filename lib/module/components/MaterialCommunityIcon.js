function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from 'react';
import { StyleSheet, Text, Platform } from 'react-native';
import { black } from '../styles/themes/v2/colors';
const MaterialCommunityIcons = ({
  color,
  size,
  ...rest
}) => {
  return /*#__PURE__*/React.createElement(Text, _extends({}, rest, {
    style: [styles.icon, {
      color,
      fontSize: size
    }],
    pointerEvents: "none",
    selectable: false
  }), "\u25A1");
};
export const accessibilityProps = Platform.OS === 'web' ? {
  role: 'img',
  focusable: false
} : {
  accessibilityElementsHidden: true,
  importantForAccessibility: 'no-hide-descendants'
};
const defaultIcon = ({
  name,
  color = black,
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
const styles = StyleSheet.create({
  // eslint-disable-next-line react-native/no-color-literals
  icon: {
    backgroundColor: 'transparent'
  }
});
export default defaultIcon;
//# sourceMappingURL=MaterialCommunityIcon.js.map