import * as React from 'react';
import { ColorValue, GestureResponderEvent, StyleProp, TextStyle, ViewStyle } from 'react-native';
declare type Props = {
    /**
     * Status of checkbox.
     */
    status: 'checked' | 'unchecked' | 'indeterminate';
    /**
     * Whether checkbox is disabled.
     */
    disabled?: boolean;
    /**
     * Label to be displayed on the item.
     */
    label: string;
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
     * Whether `<Checkbox.Android />` or `<Checkbox.IOS />` should be used.
     * Left undefined `<Checkbox />` will be used.
     */
    mode?: 'android' | 'ios';
};
declare const _default: (React.ComponentClass<Pick<Props, "label" | "style" | "color" | "onPress" | "testID" | "labelStyle" | "mode" | "status" | "disabled" | "uncheckedColor"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & {
    ({ style, status, label, onPress, labelStyle, theme, testID, mode, ...props }: Props): JSX.Element;
    displayName: string;
}) | (React.FunctionComponent<Props> & {
    ({ style, status, label, onPress, labelStyle, theme, testID, mode, ...props }: Props): JSX.Element;
    displayName: string;
}), {}>) | (React.FunctionComponent<Pick<Props, "label" | "style" | "color" | "onPress" | "testID" | "labelStyle" | "mode" | "status" | "disabled" | "uncheckedColor"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & {
    ({ style, status, label, onPress, labelStyle, theme, testID, mode, ...props }: Props): JSX.Element;
    displayName: string;
}) | (React.FunctionComponent<Props> & {
    ({ style, status, label, onPress, labelStyle, theme, testID, mode, ...props }: Props): JSX.Element;
    displayName: string;
}), {}>);
export default _default;
declare const CheckboxItemWithTheme: (React.ComponentClass<Pick<Props, "label" | "style" | "color" | "onPress" | "testID" | "labelStyle" | "mode" | "status" | "disabled" | "uncheckedColor"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & {
    ({ style, status, label, onPress, labelStyle, theme, testID, mode, ...props }: Props): JSX.Element;
    displayName: string;
}) | (React.FunctionComponent<Props> & {
    ({ style, status, label, onPress, labelStyle, theme, testID, mode, ...props }: Props): JSX.Element;
    displayName: string;
}), {}>) | (React.FunctionComponent<Pick<Props, "label" | "style" | "color" | "onPress" | "testID" | "labelStyle" | "mode" | "status" | "disabled" | "uncheckedColor"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & {
    ({ style, status, label, onPress, labelStyle, theme, testID, mode, ...props }: Props): JSX.Element;
    displayName: string;
}) | (React.FunctionComponent<Props> & {
    ({ style, status, label, onPress, labelStyle, theme, testID, mode, ...props }: Props): JSX.Element;
    displayName: string;
}), {}>);
export { CheckboxItemWithTheme as CheckboxItem };
