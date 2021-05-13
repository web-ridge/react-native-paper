import * as React from 'react';
import { StyleProp, ViewStyle, TextStyle, ColorValue, GestureResponderEvent } from 'react-native';
export declare type Props = {
    /**
     * Value of the radio button.
     */
    value: string;
    /**
     * Label to be displayed on the item.
     */
    label: string;
    /**
     * Whether radio is disabled.
     */
    disabled?: boolean;
    /**
     * Function to execute on press.
     */
    onPress?: (event: GestureResponderEvent) => void;
    /**
     * Accessibility label for the touchable. This is read by the screen reader when the user taps the touchable.
     */
    accessibilityLabel?: string;
    /**
     * Custom color for unchecked radio.
     */
    uncheckedColor?: ColorValue;
    /**
     * Custom color for radio.
     */
    color?: ColorValue;
    /**
     * Status of radio button.
     */
    status?: 'checked' | 'unchecked';
    /**
     * Additional styles for container View.
     */
    style?: StyleProp<ViewStyle>;
    /**
     * Style that is passed to Label element.
     */
    labelStyle?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    /**
     * testID to be used on tests.
     */
    testID?: string;
    /**
     * Whether `<RadioButton.Android />` or `<RadioButton.IOS />` should be used.
     * Left undefined `<RadioButton />` will be used.
     */
    mode?: 'android' | 'ios';
};
declare const _default: React.MemoExoticComponent<(React.ComponentClass<Pick<Props, "label" | "style" | "color" | "onPress" | "testID" | "accessibilityLabel" | "labelStyle" | "mode" | "status" | "disabled" | "value" | "uncheckedColor"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & {
    ({ value, label, style, labelStyle, onPress, disabled, color, uncheckedColor, status, theme: { colors }, accessibilityLabel, testID, mode, }: Props): JSX.Element;
    displayName: string;
}) | (React.FunctionComponent<Props> & {
    ({ value, label, style, labelStyle, onPress, disabled, color, uncheckedColor, status, theme: { colors }, accessibilityLabel, testID, mode, }: Props): JSX.Element;
    displayName: string;
}), {}>) | (React.FunctionComponent<Pick<Props, "label" | "style" | "color" | "onPress" | "testID" | "accessibilityLabel" | "labelStyle" | "mode" | "status" | "disabled" | "value" | "uncheckedColor"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & {
    ({ value, label, style, labelStyle, onPress, disabled, color, uncheckedColor, status, theme: { colors }, accessibilityLabel, testID, mode, }: Props): JSX.Element;
    displayName: string;
}) | (React.FunctionComponent<Props> & {
    ({ value, label, style, labelStyle, onPress, disabled, color, uncheckedColor, status, theme: { colors }, accessibilityLabel, testID, mode, }: Props): JSX.Element;
    displayName: string;
}), {}>)>;
export default _default;
declare const RadioButtonItemWithTheme: React.MemoExoticComponent<(React.ComponentClass<Pick<Props, "label" | "style" | "color" | "onPress" | "testID" | "accessibilityLabel" | "labelStyle" | "mode" | "status" | "disabled" | "value" | "uncheckedColor"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & {
    ({ value, label, style, labelStyle, onPress, disabled, color, uncheckedColor, status, theme: { colors }, accessibilityLabel, testID, mode, }: Props): JSX.Element;
    displayName: string;
}) | (React.FunctionComponent<Props> & {
    ({ value, label, style, labelStyle, onPress, disabled, color, uncheckedColor, status, theme: { colors }, accessibilityLabel, testID, mode, }: Props): JSX.Element;
    displayName: string;
}), {}>) | (React.FunctionComponent<Pick<Props, "label" | "style" | "color" | "onPress" | "testID" | "accessibilityLabel" | "labelStyle" | "mode" | "status" | "disabled" | "value" | "uncheckedColor"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & {
    ({ value, label, style, labelStyle, onPress, disabled, color, uncheckedColor, status, theme: { colors }, accessibilityLabel, testID, mode, }: Props): JSX.Element;
    displayName: string;
}) | (React.FunctionComponent<Props> & {
    ({ value, label, style, labelStyle, onPress, disabled, color, uncheckedColor, status, theme: { colors }, accessibilityLabel, testID, mode, }: Props): JSX.Element;
    displayName: string;
}), {}>)>;
export { RadioButtonItemWithTheme as RadioButtonItem };
