function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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