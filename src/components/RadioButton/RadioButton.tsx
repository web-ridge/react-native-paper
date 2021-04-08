import * as React from 'react';
import { ColorValue, GestureResponderEvent, Platform } from 'react-native';
import {
  RadioButtonAndroid,
  RadioButtonGroup,
  RadioButtonIOS,
  RadioButtonItem,
} from './RadioButtonElements';
import { withTheme } from '../../core/theming';

export type Props = {
  /**
   * Value of the radio button
   */
  value: string;
  /**
   * Status of radio button.
   */
  status?: 'checked' | 'unchecked';
  /**
   * Whether radio is disabled.
   */
  disabled?: boolean;
  /**
   * Function to execute on press.
   */
  onPress?: (event: GestureResponderEvent) => void;
  /**
   * Custom color for unchecked radio.
   */
  uncheckedColor?: ColorValue;
  /**
   * Custom color for radio.
   */
  color?: ColorValue;
  /**
   * @optional
   */
  theme: ReactNativePaper.Theme;
  /**
   * testID to be used on tests.
   */
  testID?: string;
};

/**
 * Radio buttons allow the selection a single option from a set.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img src="screenshots/radio-enabled.android.png" />
 *     <figcaption>Android (enabled)</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/radio-disabled.android.png" />
 *     <figcaption>Android (disabled)</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/radio-enabled.ios.png" />
 *     <figcaption>iOS (enabled)</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/radio-disabled.ios.png" />
 *     <figcaption>iOS (disabled)</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import { RadioButton } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [checked, setChecked] = React.useState('first');
 *
 *   return (
 *     <View>
 *       <RadioButton
 *         value="first"
 *         status={ checked === 'first' ? 'checked' : 'unchecked' }
 *         onPress={() => setChecked('first')}
 *       />
 *       <RadioButton
 *         value="second"
 *         status={ checked === 'second' ? 'checked' : 'unchecked' }
 *         onPress={() => setChecked('second')}
 *       />
 *     </View>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
const RadioButton = (props: Props) => {
  const Button = Platform.select({
    default: RadioButtonAndroid,
    ios: RadioButtonIOS,
  });

  return <Button {...props} />;
};

// @component ./RadioButtonGroup.tsx
RadioButton.Group = RadioButtonGroup;

// @component ./RadioButtonAndroid.tsx
RadioButton.Android = RadioButtonAndroid;

// @component ./RadioButtonIOS.tsx
RadioButton.IOS = RadioButtonIOS;

// @component ./RadioButtonItem.tsx
RadioButton.Item = RadioButtonItem;

export default withTheme(RadioButton);

// @component-docs ignore-next-line
const RadioButtonWithTheme = withTheme(RadioButton);
// @component-docs ignore-next-line
export { RadioButtonWithTheme as RadioButton };
