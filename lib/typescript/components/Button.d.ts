import * as React from 'react';
import { ViewStyle, StyleProp, TextStyle, ColorValue, GestureResponderEvent } from 'react-native';
import { IconSource } from './Icon';
import Surface from './Surface';
declare type Props = React.ComponentProps<typeof Surface> & {
    /**
     * Mode of the button. You can change the mode to adjust the styling to give it desired emphasis.
     * - `text` - flat button without background or outline (low emphasis)
     * - `outlined` - button with an outline (medium emphasis)
     * - `contained` - button with a background color and elevation shadow (high emphasis)
     */
    mode?: 'text' | 'outlined' | 'contained';
    /**
     * Whether the color is a dark color. A dark button will render light text and vice-versa. Only applicable for `contained` mode.
     */
    dark?: boolean;
    /**
     * Use a compact look, useful for `text` buttons in a row.
     */
    compact?: boolean;
    /**
     * Custom text color for flat button, or background color for contained button.
     */
    color?: ColorValue;
    /**
     * Whether to show a loading indicator.
     */
    loading?: boolean;
    /**
     * Icon to display for the `Button`.
     */
    icon?: IconSource;
    /**
     * Whether the button is disabled. A disabled button is greyed out and `onPress` is not called on touch.
     */
    disabled?: boolean;
    /**
     * Label text of the button.
     */
    children: React.ReactNode;
    /**
     * Make the label text uppercased. Note that this won't work if you pass React elements as children.
     */
    uppercase?: boolean;
    /**
     * Accessibility label for the button. This is read by the screen reader when the user taps the button.
     */
    accessibilityLabel?: string;
    /**
     * Function to execute on press.
     */
    onPress?: (event: GestureResponderEvent) => void;
    /**
     * Function to execute on pressOut.
     */
    onPressOut?: (event: GestureResponderEvent) => void;
    /**
     * Function to execute on pressIn.
     */
    onPressIn?: (event: GestureResponderEvent) => void;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (event: GestureResponderEvent) => void;
    /**
     * Style of button's inner content.
     * Use this prop to apply custom height and width and to set the icon on the right with `flexDirection: 'row-reverse'`.
     */
    contentStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<ViewStyle>;
    /**
     * Style for the button text.
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
};
declare const _default: React.MemoExoticComponent<(React.ComponentClass<Pick<Props, "ref" | "style" | "children" | "color" | "icon" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "pointerEvents" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "dark" | "labelStyle" | "mode" | "onPressIn" | "onPressOut" | "disabled" | "uppercase" | "compact" | "loading" | "contentStyle"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & (({ disabled, compact, mode, dark, loading, icon, color: buttonColor, children, uppercase, accessibilityLabel, onPress, onLongPress, onPressIn, onPressOut, style, theme, contentStyle, labelStyle, testID, accessible, ...rest }: Props) => JSX.Element)) | (React.FunctionComponent<Props> & (({ disabled, compact, mode, dark, loading, icon, color: buttonColor, children, uppercase, accessibilityLabel, onPress, onLongPress, onPressIn, onPressOut, style, theme, contentStyle, labelStyle, testID, accessible, ...rest }: Props) => JSX.Element)), {}>) | (React.FunctionComponent<Pick<Props, "ref" | "style" | "children" | "color" | "icon" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "pointerEvents" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "dark" | "labelStyle" | "mode" | "onPressIn" | "onPressOut" | "disabled" | "uppercase" | "compact" | "loading" | "contentStyle"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & (({ disabled, compact, mode, dark, loading, icon, color: buttonColor, children, uppercase, accessibilityLabel, onPress, onLongPress, onPressIn, onPressOut, style, theme, contentStyle, labelStyle, testID, accessible, ...rest }: Props) => JSX.Element)) | (React.FunctionComponent<Props> & (({ disabled, compact, mode, dark, loading, icon, color: buttonColor, children, uppercase, accessibilityLabel, onPress, onLongPress, onPressIn, onPressOut, style, theme, contentStyle, labelStyle, testID, accessible, ...rest }: Props) => JSX.Element)), {}>)>;
export default _default;
