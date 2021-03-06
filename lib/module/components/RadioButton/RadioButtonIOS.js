function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import color from 'color';
import { RadioButtonContext } from './RadioButtonGroup';
import { handlePress, isChecked } from './utils';
import MaterialCommunityIcon from '../MaterialCommunityIcon';
import TouchableRipple from '../TouchableRipple/TouchableRipple';
import { withTheme } from '../../core/theming';

/**
 * Radio buttons allow the selection a single option from a set.
 * This component follows platform guidelines for iOS, but can be used
 * on any platform.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img src="screenshots/radio-enabled.ios.png" />
 *     <figcaption>Enabled</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/radio-disabled.ios.png" />
 *     <figcaption>Disabled</figcaption>
 *   </figure>
 * </div>
 */
const RadioButtonIOS = (_ref) => {
  let {
    disabled,
    onPress,
    theme,
    status,
    value,
    testID
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["disabled", "onPress", "theme", "status", "value", "testID"]);

  const checkedColor = disabled ? theme.colors.disabled : rest.color || theme.colors.accent;
  let rippleColor;

  if (disabled) {
    rippleColor = color(theme.colors.text).alpha(0.16).rgb().string();
  } else {
    rippleColor = color(checkedColor).fade(0.32).rgb().string();
  }

  return /*#__PURE__*/React.createElement(RadioButtonContext.Consumer, null, context => {
    const checked = isChecked({
      contextValue: context === null || context === void 0 ? void 0 : context.value,
      status,
      value
    }) === 'checked';
    return /*#__PURE__*/React.createElement(TouchableRipple, _extends({}, rest, {
      borderless: true,
      rippleColor: rippleColor,
      onPress: disabled ? undefined : event => {
        handlePress({
          onPress,
          value,
          onValueChange: context === null || context === void 0 ? void 0 : context.onValueChange,
          event
        });
      },
      accessibilityRole: "radio",
      accessibilityState: {
        disabled,
        checked
      },
      accessibilityLiveRegion: "polite",
      style: styles.container,
      testID: testID
    }), /*#__PURE__*/React.createElement(View, {
      style: {
        opacity: checked ? 1 : 0
      }
    }, /*#__PURE__*/React.createElement(MaterialCommunityIcon, {
      allowFontScaling: false,
      name: "check",
      size: 24,
      color: checkedColor,
      direction: "ltr"
    })));
  });
};

RadioButtonIOS.displayName = 'RadioButton.IOS';
const styles = StyleSheet.create({
  container: {
    borderRadius: 18,
    padding: 6
  }
});
export default /*#__PURE__*/React.memo(withTheme(RadioButtonIOS)); // @component-docs ignore-next-line

const RadioButtonIOSWithTheme = withTheme(RadioButtonIOS); // @component-docs ignore-next-line

export { RadioButtonIOSWithTheme as RadioButtonIOS };
//# sourceMappingURL=RadioButtonIOS.js.map