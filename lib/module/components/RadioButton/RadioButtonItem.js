import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { withTheme } from '../../core/theming';
import { RadioButtonContext } from './RadioButtonGroup';
import { handlePress } from './utils';
import TouchableRipple from '../TouchableRipple/TouchableRipple';
import { RadioButton } from './RadioButtonElements';
import Text from '../Typography/Text';
import RadioButtonAndroid from './RadioButtonAndroid';
import RadioButtonIOS from './RadioButtonIOS';

/**
 * RadioButton.Item allows you to press the whole row (item) instead of only the RadioButton.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/radio-item.ios.png" />
 *     <figcaption>Pressed</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { RadioButton } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [value, setValue] = React.useState('first');
 *
 *   return (
 *     <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
 *       <RadioButton.Item label="First item" value="first" />
 *       <RadioButton.Item label="Second item" value="second" />
 *     </RadioButton.Group>
 *   );
 * };
 *
 * export default MyComponent;
 *```
 */
const RadioButtonItem = ({
  value,
  label,
  style,
  labelStyle,
  onPress,
  disabled,
  color,
  uncheckedColor,
  status,
  theme: {
    colors
  },
  accessibilityLabel,
  testID,
  mode
}) => {
  const radioButtonProps = {
    value,
    disabled,
    status,
    color,
    uncheckedColor
  };
  let radioButton;

  if (mode === 'android') {
    //@ts-ignore
    radioButton = /*#__PURE__*/React.createElement(RadioButtonAndroid, radioButtonProps);
  } else if (mode === 'ios') {
    //@ts-ignore
    radioButton = /*#__PURE__*/React.createElement(RadioButtonIOS, radioButtonProps);
  } else {
    //@ts-ignore
    radioButton = /*#__PURE__*/React.createElement(RadioButton, radioButtonProps);
  }

  return /*#__PURE__*/React.createElement(RadioButtonContext.Consumer, null, context => {
    return /*#__PURE__*/React.createElement(TouchableRipple, {
      onPress: disabled ? undefined : event => handlePress({
        onPress,
        onValueChange: context === null || context === void 0 ? void 0 : context.onValueChange,
        value,
        event
      }),
      accessibilityLabel: accessibilityLabel,
      testID: testID
    }, /*#__PURE__*/React.createElement(View, {
      style: [styles.container, style],
      pointerEvents: "none"
    }, /*#__PURE__*/React.createElement(Text, {
      selectable: false,
      style: [styles.label, {
        color: colors.text
      }, labelStyle]
    }, label), radioButton));
  });
};

RadioButtonItem.displayName = 'RadioButton.Item';
export default /*#__PURE__*/React.memo(withTheme(RadioButtonItem)); // @component-docs ignore-next-line

const RadioButtonItemWithTheme = /*#__PURE__*/React.memo(withTheme(RadioButtonItem)); // @component-docs ignore-next-line

export { RadioButtonItemWithTheme as RadioButtonItem };
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
//# sourceMappingURL=RadioButtonItem.js.map