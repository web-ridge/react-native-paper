import * as React from 'react';
import type { $Omit } from './../../types';
import { AppbarAction } from './AppbarElements';
import type { ColorValue, GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';
declare type Props = $Omit<React.ComponentPropsWithoutRef<typeof AppbarAction>, 'icon'> & {
    /**
     *  Custom color for back icon.
     */
    color?: ColorValue;
    /**
     * Optional icon size.
     */
    size?: number;
    /**
     * Whether the button is disabled. A disabled button is greyed out and `onPress` is not called on touch.
     */
    disabled?: boolean;
    /**
     * Accessibility label for the button. This is read by the screen reader when the user taps the button.
     */
    accessibilityLabel?: string;
    /**
     * Function to execute on press.
     */
    onPress?: (event: GestureResponderEvent) => void;
    style?: StyleProp<ViewStyle>;
};
/**
 * A component used to display a back button in the appbar.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/appbar-backaction-android.png" />
 *     <figcaption>Android</figcaption>
 *   </figure>
 * </div>
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/appbar-backaction-ios.png" />
 *     <figcaption>iOS</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Appbar } from 'react-native-paper';
 *
 *
 * const MyComponent = () => (
 *     <Appbar.Header>
 *       <Appbar.BackAction onPress={() => {}} />
 *     </Appbar.Header>
 * );
 *
 * export default MyComponent;
 * ```
 */
declare const AppbarBackAction: {
    ({ accessibilityLabel, ...rest }: Props): JSX.Element;
    displayName: string;
};
declare const _default: React.MemoExoticComponent<{
    ({ accessibilityLabel, ...rest }: Props): JSX.Element;
    displayName: string;
}>;
export default _default;
export { AppbarBackAction };
