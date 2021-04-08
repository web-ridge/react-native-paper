import * as React from 'react';
import { Platform, GestureResponderEvent, ColorValue } from 'react-native';
import { CheckboxIOS, CheckboxItem, CheckboxAndroid } from './CheckboxElements';
import { withTheme } from '../../core/theming';

type Props = {
  /**
   * Status of checkbox.
   */
  status: 'checked' | 'unchecked' | 'indeterminate';
  /**
   * Whether checkbox is disabled.
   */
  disabled?: boolean;
  /**
   * Function to execute on press.
   */
  onPress?: (event: GestureResponderEvent) => void;
  /**
   * Custom color for unchecked checkbox.
   */
  uncheckedColor?: ColorValue;
  /**
   * Custom color for checkbox.
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
 * Checkboxes allow the selection of multiple options from a set.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img src="screenshots/checkbox-enabled.android.png" />
 *     <figcaption>Android (enabled)</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/checkbox-disabled.android.png" />
 *     <figcaption>Android (disabled)</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/checkbox-enabled.ios.png" />
 *     <figcaption>iOS (enabled)</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/checkbox-disabled.ios.png" />
 *     <figcaption>iOS (disabled)</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Checkbox } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [checked, setChecked] = React.useState(false);
 *
 *   return (
 *     <Checkbox
 *       status={checked ? 'checked' : 'unchecked'}
 *       onPress={() => {
 *         setChecked(!checked);
 *       }}
 *     />
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
const Checkbox = (props: Props) =>
  Platform.OS === 'ios' ? (
    <CheckboxIOS {...props} />
  ) : (
    <CheckboxAndroid {...props} />
  );

// @component ./CheckboxItem.tsx
Checkbox.Item = CheckboxItem;

// @component ./CheckboxAndroid.tsx
Checkbox.Android = CheckboxAndroid;

// @component ./CheckboxIOS.tsx
Checkbox.IOS = CheckboxIOS;

export default withTheme(Checkbox);

// @component-docs ignore-next-line
const CheckboxWithTheme = withTheme(Checkbox);
// @component-docs ignore-next-line
export { CheckboxWithTheme as Checkbox };
