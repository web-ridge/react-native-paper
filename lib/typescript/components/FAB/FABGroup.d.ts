import * as React from 'react';
import { StyleProp, ViewStyle, ColorValue, GestureResponderEvent } from 'react-native';
import type { IconSource } from '../Icon';
declare type Props = {
    /**
     * Action items to display in the form of a speed dial.
     * An action item should contain the following properties:
     * - `icon`: icon to display (required)
     * - `label`: optional label text
     * - `accessibilityLabel`: accessibility label for the action, uses label by default if specified
     * - `color`: custom icon color of the action item
     * - `style`: pass additional styles for the fab item, for example, `backgroundColor`
     * - `onPress`: callback that is called when `FAB` is pressed (required)
     */
    actions: Array<{
        icon: IconSource;
        label?: string;
        color?: ColorValue;
        accessibilityLabel?: string;
        style?: StyleProp<ViewStyle>;
        onPress: (event: GestureResponderEvent) => void;
        testID?: string;
    }>;
    /**
     * Icon to display for the `FAB`.
     * You can toggle it based on whether the speed dial is open to display a different icon.
     */
    icon: IconSource;
    /**
     * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
     */
    accessibilityLabel?: string;
    /**
     * Custom color for the `FAB`.
     */
    color?: ColorValue;
    /**
     * Function to execute on pressing the `FAB`.
     */
    onPress?: (event: GestureResponderEvent) => void;
    /**
     * Whether the speed dial is open.
     */
    open: boolean;
    /**
     * Callback which is called on opening and closing the speed dial.
     * The open state needs to be updated when it's called, otherwise the change is dropped.
     */
    onStateChange: (state: {
        open: boolean;
    }) => void;
    /**
     * Whether `FAB` is currently visible.
     */
    visible: boolean;
    /**
     * Style for the group. You can use it to pass additional styles if you need.
     * For example, you can set an additional padding if you have a tab bar at the bottom.
     */
    style?: StyleProp<ViewStyle>;
    /**
     * Style for the FAB. It allows to pass the FAB button styles, such as backgroundColor.
     */
    fabStyle?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * Pass down testID from Group props to FAB.
     */
    testID?: string;
};
declare const _default: React.MemoExoticComponent<(React.ComponentClass<Pick<Props, "style" | "color" | "icon" | "onPress" | "testID" | "accessibilityLabel" | "visible" | "actions" | "open" | "fabStyle" | "onStateChange"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & {
    ({ actions, icon, open, onPress, accessibilityLabel, theme, style, fabStyle, visible, testID, onStateChange, color: colorProp, }: Props): JSX.Element;
    displayName: string;
}) | (React.FunctionComponent<Props> & {
    ({ actions, icon, open, onPress, accessibilityLabel, theme, style, fabStyle, visible, testID, onStateChange, color: colorProp, }: Props): JSX.Element;
    displayName: string;
}), {}>) | (React.FunctionComponent<Pick<Props, "style" | "color" | "icon" | "onPress" | "testID" | "accessibilityLabel" | "visible" | "actions" | "open" | "fabStyle" | "onStateChange"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & {
    ({ actions, icon, open, onPress, accessibilityLabel, theme, style, fabStyle, visible, testID, onStateChange, color: colorProp, }: Props): JSX.Element;
    displayName: string;
}) | (React.FunctionComponent<Props> & {
    ({ actions, icon, open, onPress, accessibilityLabel, theme, style, fabStyle, visible, testID, onStateChange, color: colorProp, }: Props): JSX.Element;
    displayName: string;
}), {}>)>;
export default _default;
declare const FABGroupWithTheme: React.MemoExoticComponent<(React.ComponentClass<Pick<Props, "style" | "color" | "icon" | "onPress" | "testID" | "accessibilityLabel" | "visible" | "actions" | "open" | "fabStyle" | "onStateChange"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & {
    ({ actions, icon, open, onPress, accessibilityLabel, theme, style, fabStyle, visible, testID, onStateChange, color: colorProp, }: Props): JSX.Element;
    displayName: string;
}) | (React.FunctionComponent<Props> & {
    ({ actions, icon, open, onPress, accessibilityLabel, theme, style, fabStyle, visible, testID, onStateChange, color: colorProp, }: Props): JSX.Element;
    displayName: string;
}), {}>) | (React.FunctionComponent<Pick<Props, "style" | "color" | "icon" | "onPress" | "testID" | "accessibilityLabel" | "visible" | "actions" | "open" | "fabStyle" | "onStateChange"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & {
    ({ actions, icon, open, onPress, accessibilityLabel, theme, style, fabStyle, visible, testID, onStateChange, color: colorProp, }: Props): JSX.Element;
    displayName: string;
}) | (React.FunctionComponent<Props> & {
    ({ actions, icon, open, onPress, accessibilityLabel, theme, style, fabStyle, visible, testID, onStateChange, color: colorProp, }: Props): JSX.Element;
    displayName: string;
}), {}>)>;
export { FABGroupWithTheme as FABGroup };
