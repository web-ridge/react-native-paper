import * as React from 'react';
import { ViewStyle, StyleProp, ColorValue, GestureResponderEvent } from 'react-native';
import Surface from '../Surface';
import type { $RemoveChildren } from '../../types';
import type { IconSource } from './../Icon';
import type { AccessibilityState } from 'react-native';
declare type Props = $RemoveChildren<typeof Surface> & {
    /**
     * Icon to display for the `FAB`.
     */
    icon: IconSource;
    /**
     * Optional label for extended `FAB`.
     */
    label?: string;
    /**
     * Make the label text uppercased.
     */
    uppercase?: boolean;
    /**
     * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
     * Uses `label` by default if specified.
     */
    accessibilityLabel?: string;
    /**
     * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
     */
    accessibilityState?: AccessibilityState;
    /**
     * Whether an icon change is animated.
     */
    animated?: boolean;
    /**
     *  Whether FAB is mini-sized, used to create visual continuity with other elements. This has no effect if `label` is specified.
     */
    small?: boolean;
    /**
     * Custom color for the icon and label of the `FAB`.
     */
    color?: ColorValue;
    /**
     * Whether `FAB` is disabled. A disabled button is greyed out and `onPress` is not called on touch.
     */
    disabled?: boolean;
    /**
     * Whether `FAB` is currently visible.
     */
    visible?: boolean;
    /**
     * Whether to show a loading indicator.
     */
    loading?: boolean;
    /**
     * Function to execute on press.
     */
    onPress?: (event: GestureResponderEvent) => void;
    /**
     * Function to execute on long press.
     */
    onLongPress?: (event: GestureResponderEvent) => void;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
    testID?: string;
};
declare const _default: React.MemoExoticComponent<(React.ComponentClass<Pick<Props, "label" | "small" | "style" | "color" | "icon" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "pointerEvents" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "visible" | "disabled" | "uppercase" | "loading" | "animated"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & {
    ({ small, icon, label, accessibilityLabel, accessibilityState, animated, color: customColor, disabled, onPress, onLongPress, theme, style, visible, uppercase, loading, testID, ...rest }: Props): JSX.Element;
    Group: React.MemoExoticComponent<(React.ComponentClass<Pick<{
        actions: {
            icon: IconSource; /**
             * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
             * Uses `label` by default if specified.
             */
            label?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            accessibilityLabel?: string | undefined;
            style?: StyleProp<ViewStyle>;
            onPress: (event: GestureResponderEvent) => void;
            testID?: string | undefined; /**
             * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
             */
        }[];
        icon: IconSource;
        accessibilityLabel?: string | undefined;
        color?: string | typeof import("react-native").OpaqueColorValue | undefined;
        onPress?: ((event: GestureResponderEvent) => void) | undefined;
        open: boolean;
        onStateChange: (state: {
            open: boolean; /**
             * Function to execute on press.
             */
        }) => void;
        visible: boolean;
        style?: StyleProp<ViewStyle>;
        fabStyle?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, "style" | "color" | "icon" | "onPress" | "testID" | "accessibilityLabel" | "visible" | "actions" | "open" | "fabStyle" | "onStateChange"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<{
        actions: {
            icon: IconSource; /**
             * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
             * Uses `label` by default if specified.
             */
            label?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            accessibilityLabel?: string | undefined;
            style?: StyleProp<ViewStyle>;
            onPress: (event: GestureResponderEvent) => void;
            testID?: string | undefined; /**
             * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
             */
        }[];
        icon: IconSource;
        accessibilityLabel?: string | undefined;
        color?: string | typeof import("react-native").OpaqueColorValue | undefined;
        onPress?: ((event: GestureResponderEvent) => void) | undefined;
        open: boolean;
        onStateChange: (state: {
            open: boolean; /**
             * Function to execute on press.
             */
        }) => void;
        visible: boolean;
        style?: StyleProp<ViewStyle>;
        fabStyle?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, any> & {
        ({ actions, icon, open, onPress, accessibilityLabel, theme, style, fabStyle, visible, testID, onStateChange, color: colorProp, }: {
            actions: {
                icon: IconSource; /**
                 * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
                 * Uses `label` by default if specified.
                 */
                label?: string | undefined;
                color?: string | typeof import("react-native").OpaqueColorValue | undefined;
                accessibilityLabel?: string | undefined;
                style?: StyleProp<ViewStyle>;
                onPress: (event: GestureResponderEvent) => void;
                testID?: string | undefined; /**
                 * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
                 */
            }[];
            icon: IconSource;
            accessibilityLabel?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            onPress?: ((event: GestureResponderEvent) => void) | undefined;
            open: boolean;
            onStateChange: (state: {
                open: boolean; /**
                 * Function to execute on press.
                 */
            }) => void;
            visible: boolean;
            style?: StyleProp<ViewStyle>;
            fabStyle?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<{
        actions: {
            icon: IconSource; /**
             * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
             * Uses `label` by default if specified.
             */
            label?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            accessibilityLabel?: string | undefined;
            style?: StyleProp<ViewStyle>;
            onPress: (event: GestureResponderEvent) => void;
            testID?: string | undefined; /**
             * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
             */
        }[];
        icon: IconSource;
        accessibilityLabel?: string | undefined;
        color?: string | typeof import("react-native").OpaqueColorValue | undefined;
        onPress?: ((event: GestureResponderEvent) => void) | undefined;
        open: boolean;
        onStateChange: (state: {
            open: boolean; /**
             * Function to execute on press.
             */
        }) => void;
        visible: boolean;
        style?: StyleProp<ViewStyle>;
        fabStyle?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }> & {
        ({ actions, icon, open, onPress, accessibilityLabel, theme, style, fabStyle, visible, testID, onStateChange, color: colorProp, }: {
            actions: {
                icon: IconSource; /**
                 * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
                 * Uses `label` by default if specified.
                 */
                label?: string | undefined;
                color?: string | typeof import("react-native").OpaqueColorValue | undefined;
                accessibilityLabel?: string | undefined;
                style?: StyleProp<ViewStyle>;
                onPress: (event: GestureResponderEvent) => void;
                testID?: string | undefined; /**
                 * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
                 */
            }[];
            icon: IconSource;
            accessibilityLabel?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            onPress?: ((event: GestureResponderEvent) => void) | undefined;
            open: boolean;
            onStateChange: (state: {
                open: boolean; /**
                 * Function to execute on press.
                 */
            }) => void;
            visible: boolean;
            style?: StyleProp<ViewStyle>;
            fabStyle?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
        }): JSX.Element;
        displayName: string;
    }), {}>) | (React.FunctionComponent<Pick<{
        actions: {
            icon: IconSource; /**
             * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
             * Uses `label` by default if specified.
             */
            label?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            accessibilityLabel?: string | undefined;
            style?: StyleProp<ViewStyle>;
            onPress: (event: GestureResponderEvent) => void;
            testID?: string | undefined; /**
             * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
             */
        }[];
        icon: IconSource;
        accessibilityLabel?: string | undefined;
        color?: string | typeof import("react-native").OpaqueColorValue | undefined;
        onPress?: ((event: GestureResponderEvent) => void) | undefined;
        open: boolean;
        onStateChange: (state: {
            open: boolean; /**
             * Function to execute on press.
             */
        }) => void;
        visible: boolean;
        style?: StyleProp<ViewStyle>;
        fabStyle?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, "style" | "color" | "icon" | "onPress" | "testID" | "accessibilityLabel" | "visible" | "actions" | "open" | "fabStyle" | "onStateChange"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<{
        actions: {
            icon: IconSource; /**
             * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
             * Uses `label` by default if specified.
             */
            label?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            accessibilityLabel?: string | undefined;
            style?: StyleProp<ViewStyle>;
            onPress: (event: GestureResponderEvent) => void;
            testID?: string | undefined; /**
             * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
             */
        }[];
        icon: IconSource;
        accessibilityLabel?: string | undefined;
        color?: string | typeof import("react-native").OpaqueColorValue | undefined;
        onPress?: ((event: GestureResponderEvent) => void) | undefined;
        open: boolean;
        onStateChange: (state: {
            open: boolean; /**
             * Function to execute on press.
             */
        }) => void;
        visible: boolean;
        style?: StyleProp<ViewStyle>;
        fabStyle?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, any> & {
        ({ actions, icon, open, onPress, accessibilityLabel, theme, style, fabStyle, visible, testID, onStateChange, color: colorProp, }: {
            actions: {
                icon: IconSource; /**
                 * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
                 * Uses `label` by default if specified.
                 */
                label?: string | undefined;
                color?: string | typeof import("react-native").OpaqueColorValue | undefined;
                accessibilityLabel?: string | undefined;
                style?: StyleProp<ViewStyle>;
                onPress: (event: GestureResponderEvent) => void;
                testID?: string | undefined; /**
                 * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
                 */
            }[];
            icon: IconSource;
            accessibilityLabel?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            onPress?: ((event: GestureResponderEvent) => void) | undefined;
            open: boolean;
            onStateChange: (state: {
                open: boolean; /**
                 * Function to execute on press.
                 */
            }) => void;
            visible: boolean;
            style?: StyleProp<ViewStyle>;
            fabStyle?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<{
        actions: {
            icon: IconSource; /**
             * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
             * Uses `label` by default if specified.
             */
            label?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            accessibilityLabel?: string | undefined;
            style?: StyleProp<ViewStyle>;
            onPress: (event: GestureResponderEvent) => void;
            testID?: string | undefined; /**
             * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
             */
        }[];
        icon: IconSource;
        accessibilityLabel?: string | undefined;
        color?: string | typeof import("react-native").OpaqueColorValue | undefined;
        onPress?: ((event: GestureResponderEvent) => void) | undefined;
        open: boolean;
        onStateChange: (state: {
            open: boolean; /**
             * Function to execute on press.
             */
        }) => void;
        visible: boolean;
        style?: StyleProp<ViewStyle>;
        fabStyle?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }> & {
        ({ actions, icon, open, onPress, accessibilityLabel, theme, style, fabStyle, visible, testID, onStateChange, color: colorProp, }: {
            actions: {
                icon: IconSource; /**
                 * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
                 * Uses `label` by default if specified.
                 */
                label?: string | undefined;
                color?: string | typeof import("react-native").OpaqueColorValue | undefined;
                accessibilityLabel?: string | undefined;
                style?: StyleProp<ViewStyle>;
                onPress: (event: GestureResponderEvent) => void;
                testID?: string | undefined; /**
                 * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
                 */
            }[];
            icon: IconSource;
            accessibilityLabel?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            onPress?: ((event: GestureResponderEvent) => void) | undefined;
            open: boolean;
            onStateChange: (state: {
                open: boolean; /**
                 * Function to execute on press.
                 */
            }) => void;
            visible: boolean;
            style?: StyleProp<ViewStyle>;
            fabStyle?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
        }): JSX.Element;
        displayName: string;
    }), {}>)>;
}) | (React.FunctionComponent<Props> & {
    ({ small, icon, label, accessibilityLabel, accessibilityState, animated, color: customColor, disabled, onPress, onLongPress, theme, style, visible, uppercase, loading, testID, ...rest }: Props): JSX.Element;
    Group: React.MemoExoticComponent<(React.ComponentClass<Pick<{
        actions: {
            icon: IconSource; /**
             * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
             * Uses `label` by default if specified.
             */
            label?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            accessibilityLabel?: string | undefined;
            style?: StyleProp<ViewStyle>;
            onPress: (event: GestureResponderEvent) => void;
            testID?: string | undefined; /**
             * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
             */
        }[];
        icon: IconSource;
        accessibilityLabel?: string | undefined;
        color?: string | typeof import("react-native").OpaqueColorValue | undefined;
        onPress?: ((event: GestureResponderEvent) => void) | undefined;
        open: boolean;
        onStateChange: (state: {
            open: boolean; /**
             * Function to execute on press.
             */
        }) => void;
        visible: boolean;
        style?: StyleProp<ViewStyle>;
        fabStyle?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, "style" | "color" | "icon" | "onPress" | "testID" | "accessibilityLabel" | "visible" | "actions" | "open" | "fabStyle" | "onStateChange"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<{
        actions: {
            icon: IconSource; /**
             * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
             * Uses `label` by default if specified.
             */
            label?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            accessibilityLabel?: string | undefined;
            style?: StyleProp<ViewStyle>;
            onPress: (event: GestureResponderEvent) => void;
            testID?: string | undefined; /**
             * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
             */
        }[];
        icon: IconSource;
        accessibilityLabel?: string | undefined;
        color?: string | typeof import("react-native").OpaqueColorValue | undefined;
        onPress?: ((event: GestureResponderEvent) => void) | undefined;
        open: boolean;
        onStateChange: (state: {
            open: boolean; /**
             * Function to execute on press.
             */
        }) => void;
        visible: boolean;
        style?: StyleProp<ViewStyle>;
        fabStyle?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, any> & {
        ({ actions, icon, open, onPress, accessibilityLabel, theme, style, fabStyle, visible, testID, onStateChange, color: colorProp, }: {
            actions: {
                icon: IconSource; /**
                 * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
                 * Uses `label` by default if specified.
                 */
                label?: string | undefined;
                color?: string | typeof import("react-native").OpaqueColorValue | undefined;
                accessibilityLabel?: string | undefined;
                style?: StyleProp<ViewStyle>;
                onPress: (event: GestureResponderEvent) => void;
                testID?: string | undefined; /**
                 * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
                 */
            }[];
            icon: IconSource;
            accessibilityLabel?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            onPress?: ((event: GestureResponderEvent) => void) | undefined;
            open: boolean;
            onStateChange: (state: {
                open: boolean; /**
                 * Function to execute on press.
                 */
            }) => void;
            visible: boolean;
            style?: StyleProp<ViewStyle>;
            fabStyle?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<{
        actions: {
            icon: IconSource; /**
             * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
             * Uses `label` by default if specified.
             */
            label?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            accessibilityLabel?: string | undefined;
            style?: StyleProp<ViewStyle>;
            onPress: (event: GestureResponderEvent) => void;
            testID?: string | undefined; /**
             * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
             */
        }[];
        icon: IconSource;
        accessibilityLabel?: string | undefined;
        color?: string | typeof import("react-native").OpaqueColorValue | undefined;
        onPress?: ((event: GestureResponderEvent) => void) | undefined;
        open: boolean;
        onStateChange: (state: {
            open: boolean; /**
             * Function to execute on press.
             */
        }) => void;
        visible: boolean;
        style?: StyleProp<ViewStyle>;
        fabStyle?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }> & {
        ({ actions, icon, open, onPress, accessibilityLabel, theme, style, fabStyle, visible, testID, onStateChange, color: colorProp, }: {
            actions: {
                icon: IconSource; /**
                 * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
                 * Uses `label` by default if specified.
                 */
                label?: string | undefined;
                color?: string | typeof import("react-native").OpaqueColorValue | undefined;
                accessibilityLabel?: string | undefined;
                style?: StyleProp<ViewStyle>;
                onPress: (event: GestureResponderEvent) => void;
                testID?: string | undefined; /**
                 * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
                 */
            }[];
            icon: IconSource;
            accessibilityLabel?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            onPress?: ((event: GestureResponderEvent) => void) | undefined;
            open: boolean;
            onStateChange: (state: {
                open: boolean; /**
                 * Function to execute on press.
                 */
            }) => void;
            visible: boolean;
            style?: StyleProp<ViewStyle>;
            fabStyle?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
        }): JSX.Element;
        displayName: string;
    }), {}>) | (React.FunctionComponent<Pick<{
        actions: {
            icon: IconSource; /**
             * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
             * Uses `label` by default if specified.
             */
            label?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            accessibilityLabel?: string | undefined;
            style?: StyleProp<ViewStyle>;
            onPress: (event: GestureResponderEvent) => void;
            testID?: string | undefined; /**
             * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
             */
        }[];
        icon: IconSource;
        accessibilityLabel?: string | undefined;
        color?: string | typeof import("react-native").OpaqueColorValue | undefined;
        onPress?: ((event: GestureResponderEvent) => void) | undefined;
        open: boolean;
        onStateChange: (state: {
            open: boolean; /**
             * Function to execute on press.
             */
        }) => void;
        visible: boolean;
        style?: StyleProp<ViewStyle>;
        fabStyle?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, "style" | "color" | "icon" | "onPress" | "testID" | "accessibilityLabel" | "visible" | "actions" | "open" | "fabStyle" | "onStateChange"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<{
        actions: {
            icon: IconSource; /**
             * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
             * Uses `label` by default if specified.
             */
            label?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            accessibilityLabel?: string | undefined;
            style?: StyleProp<ViewStyle>;
            onPress: (event: GestureResponderEvent) => void;
            testID?: string | undefined; /**
             * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
             */
        }[];
        icon: IconSource;
        accessibilityLabel?: string | undefined;
        color?: string | typeof import("react-native").OpaqueColorValue | undefined;
        onPress?: ((event: GestureResponderEvent) => void) | undefined;
        open: boolean;
        onStateChange: (state: {
            open: boolean; /**
             * Function to execute on press.
             */
        }) => void;
        visible: boolean;
        style?: StyleProp<ViewStyle>;
        fabStyle?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, any> & {
        ({ actions, icon, open, onPress, accessibilityLabel, theme, style, fabStyle, visible, testID, onStateChange, color: colorProp, }: {
            actions: {
                icon: IconSource; /**
                 * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
                 * Uses `label` by default if specified.
                 */
                label?: string | undefined;
                color?: string | typeof import("react-native").OpaqueColorValue | undefined;
                accessibilityLabel?: string | undefined;
                style?: StyleProp<ViewStyle>;
                onPress: (event: GestureResponderEvent) => void;
                testID?: string | undefined; /**
                 * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
                 */
            }[];
            icon: IconSource;
            accessibilityLabel?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            onPress?: ((event: GestureResponderEvent) => void) | undefined;
            open: boolean;
            onStateChange: (state: {
                open: boolean; /**
                 * Function to execute on press.
                 */
            }) => void;
            visible: boolean;
            style?: StyleProp<ViewStyle>;
            fabStyle?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<{
        actions: {
            icon: IconSource; /**
             * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
             * Uses `label` by default if specified.
             */
            label?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            accessibilityLabel?: string | undefined;
            style?: StyleProp<ViewStyle>;
            onPress: (event: GestureResponderEvent) => void;
            testID?: string | undefined; /**
             * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
             */
        }[];
        icon: IconSource;
        accessibilityLabel?: string | undefined;
        color?: string | typeof import("react-native").OpaqueColorValue | undefined;
        onPress?: ((event: GestureResponderEvent) => void) | undefined;
        open: boolean;
        onStateChange: (state: {
            open: boolean; /**
             * Function to execute on press.
             */
        }) => void;
        visible: boolean;
        style?: StyleProp<ViewStyle>;
        fabStyle?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }> & {
        ({ actions, icon, open, onPress, accessibilityLabel, theme, style, fabStyle, visible, testID, onStateChange, color: colorProp, }: {
            actions: {
                icon: IconSource; /**
                 * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
                 * Uses `label` by default if specified.
                 */
                label?: string | undefined;
                color?: string | typeof import("react-native").OpaqueColorValue | undefined;
                accessibilityLabel?: string | undefined;
                style?: StyleProp<ViewStyle>;
                onPress: (event: GestureResponderEvent) => void;
                testID?: string | undefined; /**
                 * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
                 */
            }[];
            icon: IconSource;
            accessibilityLabel?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            onPress?: ((event: GestureResponderEvent) => void) | undefined;
            open: boolean;
            onStateChange: (state: {
                open: boolean; /**
                 * Function to execute on press.
                 */
            }) => void;
            visible: boolean;
            style?: StyleProp<ViewStyle>;
            fabStyle?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
        }): JSX.Element;
        displayName: string;
    }), {}>)>;
}), {}>) | (React.FunctionComponent<Pick<Props, "label" | "small" | "style" | "color" | "icon" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "pointerEvents" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "visible" | "disabled" | "uppercase" | "loading" | "animated"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & {
    ({ small, icon, label, accessibilityLabel, accessibilityState, animated, color: customColor, disabled, onPress, onLongPress, theme, style, visible, uppercase, loading, testID, ...rest }: Props): JSX.Element;
    Group: React.MemoExoticComponent<(React.ComponentClass<Pick<{
        actions: {
            icon: IconSource; /**
             * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
             * Uses `label` by default if specified.
             */
            label?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            accessibilityLabel?: string | undefined;
            style?: StyleProp<ViewStyle>;
            onPress: (event: GestureResponderEvent) => void;
            testID?: string | undefined; /**
             * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
             */
        }[];
        icon: IconSource;
        accessibilityLabel?: string | undefined;
        color?: string | typeof import("react-native").OpaqueColorValue | undefined;
        onPress?: ((event: GestureResponderEvent) => void) | undefined;
        open: boolean;
        onStateChange: (state: {
            open: boolean; /**
             * Function to execute on press.
             */
        }) => void;
        visible: boolean;
        style?: StyleProp<ViewStyle>;
        fabStyle?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, "style" | "color" | "icon" | "onPress" | "testID" | "accessibilityLabel" | "visible" | "actions" | "open" | "fabStyle" | "onStateChange"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<{
        actions: {
            icon: IconSource; /**
             * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
             * Uses `label` by default if specified.
             */
            label?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            accessibilityLabel?: string | undefined;
            style?: StyleProp<ViewStyle>;
            onPress: (event: GestureResponderEvent) => void;
            testID?: string | undefined; /**
             * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
             */
        }[];
        icon: IconSource;
        accessibilityLabel?: string | undefined;
        color?: string | typeof import("react-native").OpaqueColorValue | undefined;
        onPress?: ((event: GestureResponderEvent) => void) | undefined;
        open: boolean;
        onStateChange: (state: {
            open: boolean; /**
             * Function to execute on press.
             */
        }) => void;
        visible: boolean;
        style?: StyleProp<ViewStyle>;
        fabStyle?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, any> & {
        ({ actions, icon, open, onPress, accessibilityLabel, theme, style, fabStyle, visible, testID, onStateChange, color: colorProp, }: {
            actions: {
                icon: IconSource; /**
                 * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
                 * Uses `label` by default if specified.
                 */
                label?: string | undefined;
                color?: string | typeof import("react-native").OpaqueColorValue | undefined;
                accessibilityLabel?: string | undefined;
                style?: StyleProp<ViewStyle>;
                onPress: (event: GestureResponderEvent) => void;
                testID?: string | undefined; /**
                 * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
                 */
            }[];
            icon: IconSource;
            accessibilityLabel?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            onPress?: ((event: GestureResponderEvent) => void) | undefined;
            open: boolean;
            onStateChange: (state: {
                open: boolean; /**
                 * Function to execute on press.
                 */
            }) => void;
            visible: boolean;
            style?: StyleProp<ViewStyle>;
            fabStyle?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<{
        actions: {
            icon: IconSource; /**
             * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
             * Uses `label` by default if specified.
             */
            label?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            accessibilityLabel?: string | undefined;
            style?: StyleProp<ViewStyle>;
            onPress: (event: GestureResponderEvent) => void;
            testID?: string | undefined; /**
             * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
             */
        }[];
        icon: IconSource;
        accessibilityLabel?: string | undefined;
        color?: string | typeof import("react-native").OpaqueColorValue | undefined;
        onPress?: ((event: GestureResponderEvent) => void) | undefined;
        open: boolean;
        onStateChange: (state: {
            open: boolean; /**
             * Function to execute on press.
             */
        }) => void;
        visible: boolean;
        style?: StyleProp<ViewStyle>;
        fabStyle?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }> & {
        ({ actions, icon, open, onPress, accessibilityLabel, theme, style, fabStyle, visible, testID, onStateChange, color: colorProp, }: {
            actions: {
                icon: IconSource; /**
                 * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
                 * Uses `label` by default if specified.
                 */
                label?: string | undefined;
                color?: string | typeof import("react-native").OpaqueColorValue | undefined;
                accessibilityLabel?: string | undefined;
                style?: StyleProp<ViewStyle>;
                onPress: (event: GestureResponderEvent) => void;
                testID?: string | undefined; /**
                 * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
                 */
            }[];
            icon: IconSource;
            accessibilityLabel?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            onPress?: ((event: GestureResponderEvent) => void) | undefined;
            open: boolean;
            onStateChange: (state: {
                open: boolean; /**
                 * Function to execute on press.
                 */
            }) => void;
            visible: boolean;
            style?: StyleProp<ViewStyle>;
            fabStyle?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
        }): JSX.Element;
        displayName: string;
    }), {}>) | (React.FunctionComponent<Pick<{
        actions: {
            icon: IconSource; /**
             * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
             * Uses `label` by default if specified.
             */
            label?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            accessibilityLabel?: string | undefined;
            style?: StyleProp<ViewStyle>;
            onPress: (event: GestureResponderEvent) => void;
            testID?: string | undefined; /**
             * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
             */
        }[];
        icon: IconSource;
        accessibilityLabel?: string | undefined;
        color?: string | typeof import("react-native").OpaqueColorValue | undefined;
        onPress?: ((event: GestureResponderEvent) => void) | undefined;
        open: boolean;
        onStateChange: (state: {
            open: boolean; /**
             * Function to execute on press.
             */
        }) => void;
        visible: boolean;
        style?: StyleProp<ViewStyle>;
        fabStyle?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, "style" | "color" | "icon" | "onPress" | "testID" | "accessibilityLabel" | "visible" | "actions" | "open" | "fabStyle" | "onStateChange"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<{
        actions: {
            icon: IconSource; /**
             * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
             * Uses `label` by default if specified.
             */
            label?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            accessibilityLabel?: string | undefined;
            style?: StyleProp<ViewStyle>;
            onPress: (event: GestureResponderEvent) => void;
            testID?: string | undefined; /**
             * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
             */
        }[];
        icon: IconSource;
        accessibilityLabel?: string | undefined;
        color?: string | typeof import("react-native").OpaqueColorValue | undefined;
        onPress?: ((event: GestureResponderEvent) => void) | undefined;
        open: boolean;
        onStateChange: (state: {
            open: boolean; /**
             * Function to execute on press.
             */
        }) => void;
        visible: boolean;
        style?: StyleProp<ViewStyle>;
        fabStyle?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, any> & {
        ({ actions, icon, open, onPress, accessibilityLabel, theme, style, fabStyle, visible, testID, onStateChange, color: colorProp, }: {
            actions: {
                icon: IconSource; /**
                 * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
                 * Uses `label` by default if specified.
                 */
                label?: string | undefined;
                color?: string | typeof import("react-native").OpaqueColorValue | undefined;
                accessibilityLabel?: string | undefined;
                style?: StyleProp<ViewStyle>;
                onPress: (event: GestureResponderEvent) => void;
                testID?: string | undefined; /**
                 * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
                 */
            }[];
            icon: IconSource;
            accessibilityLabel?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            onPress?: ((event: GestureResponderEvent) => void) | undefined;
            open: boolean;
            onStateChange: (state: {
                open: boolean; /**
                 * Function to execute on press.
                 */
            }) => void;
            visible: boolean;
            style?: StyleProp<ViewStyle>;
            fabStyle?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<{
        actions: {
            icon: IconSource; /**
             * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
             * Uses `label` by default if specified.
             */
            label?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            accessibilityLabel?: string | undefined;
            style?: StyleProp<ViewStyle>;
            onPress: (event: GestureResponderEvent) => void;
            testID?: string | undefined; /**
             * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
             */
        }[];
        icon: IconSource;
        accessibilityLabel?: string | undefined;
        color?: string | typeof import("react-native").OpaqueColorValue | undefined;
        onPress?: ((event: GestureResponderEvent) => void) | undefined;
        open: boolean;
        onStateChange: (state: {
            open: boolean; /**
             * Function to execute on press.
             */
        }) => void;
        visible: boolean;
        style?: StyleProp<ViewStyle>;
        fabStyle?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }> & {
        ({ actions, icon, open, onPress, accessibilityLabel, theme, style, fabStyle, visible, testID, onStateChange, color: colorProp, }: {
            actions: {
                icon: IconSource; /**
                 * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
                 * Uses `label` by default if specified.
                 */
                label?: string | undefined;
                color?: string | typeof import("react-native").OpaqueColorValue | undefined;
                accessibilityLabel?: string | undefined;
                style?: StyleProp<ViewStyle>;
                onPress: (event: GestureResponderEvent) => void;
                testID?: string | undefined; /**
                 * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
                 */
            }[];
            icon: IconSource;
            accessibilityLabel?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            onPress?: ((event: GestureResponderEvent) => void) | undefined;
            open: boolean;
            onStateChange: (state: {
                open: boolean; /**
                 * Function to execute on press.
                 */
            }) => void;
            visible: boolean;
            style?: StyleProp<ViewStyle>;
            fabStyle?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
        }): JSX.Element;
        displayName: string;
    }), {}>)>;
}) | (React.FunctionComponent<Props> & {
    ({ small, icon, label, accessibilityLabel, accessibilityState, animated, color: customColor, disabled, onPress, onLongPress, theme, style, visible, uppercase, loading, testID, ...rest }: Props): JSX.Element;
    Group: React.MemoExoticComponent<(React.ComponentClass<Pick<{
        actions: {
            icon: IconSource; /**
             * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
             * Uses `label` by default if specified.
             */
            label?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            accessibilityLabel?: string | undefined;
            style?: StyleProp<ViewStyle>;
            onPress: (event: GestureResponderEvent) => void;
            testID?: string | undefined; /**
             * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
             */
        }[];
        icon: IconSource;
        accessibilityLabel?: string | undefined;
        color?: string | typeof import("react-native").OpaqueColorValue | undefined;
        onPress?: ((event: GestureResponderEvent) => void) | undefined;
        open: boolean;
        onStateChange: (state: {
            open: boolean; /**
             * Function to execute on press.
             */
        }) => void;
        visible: boolean;
        style?: StyleProp<ViewStyle>;
        fabStyle?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, "style" | "color" | "icon" | "onPress" | "testID" | "accessibilityLabel" | "visible" | "actions" | "open" | "fabStyle" | "onStateChange"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<{
        actions: {
            icon: IconSource; /**
             * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
             * Uses `label` by default if specified.
             */
            label?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            accessibilityLabel?: string | undefined;
            style?: StyleProp<ViewStyle>;
            onPress: (event: GestureResponderEvent) => void;
            testID?: string | undefined; /**
             * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
             */
        }[];
        icon: IconSource;
        accessibilityLabel?: string | undefined;
        color?: string | typeof import("react-native").OpaqueColorValue | undefined;
        onPress?: ((event: GestureResponderEvent) => void) | undefined;
        open: boolean;
        onStateChange: (state: {
            open: boolean; /**
             * Function to execute on press.
             */
        }) => void;
        visible: boolean;
        style?: StyleProp<ViewStyle>;
        fabStyle?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, any> & {
        ({ actions, icon, open, onPress, accessibilityLabel, theme, style, fabStyle, visible, testID, onStateChange, color: colorProp, }: {
            actions: {
                icon: IconSource; /**
                 * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
                 * Uses `label` by default if specified.
                 */
                label?: string | undefined;
                color?: string | typeof import("react-native").OpaqueColorValue | undefined;
                accessibilityLabel?: string | undefined;
                style?: StyleProp<ViewStyle>;
                onPress: (event: GestureResponderEvent) => void;
                testID?: string | undefined; /**
                 * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
                 */
            }[];
            icon: IconSource;
            accessibilityLabel?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            onPress?: ((event: GestureResponderEvent) => void) | undefined;
            open: boolean;
            onStateChange: (state: {
                open: boolean; /**
                 * Function to execute on press.
                 */
            }) => void;
            visible: boolean;
            style?: StyleProp<ViewStyle>;
            fabStyle?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<{
        actions: {
            icon: IconSource; /**
             * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
             * Uses `label` by default if specified.
             */
            label?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            accessibilityLabel?: string | undefined;
            style?: StyleProp<ViewStyle>;
            onPress: (event: GestureResponderEvent) => void;
            testID?: string | undefined; /**
             * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
             */
        }[];
        icon: IconSource;
        accessibilityLabel?: string | undefined;
        color?: string | typeof import("react-native").OpaqueColorValue | undefined;
        onPress?: ((event: GestureResponderEvent) => void) | undefined;
        open: boolean;
        onStateChange: (state: {
            open: boolean; /**
             * Function to execute on press.
             */
        }) => void;
        visible: boolean;
        style?: StyleProp<ViewStyle>;
        fabStyle?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }> & {
        ({ actions, icon, open, onPress, accessibilityLabel, theme, style, fabStyle, visible, testID, onStateChange, color: colorProp, }: {
            actions: {
                icon: IconSource; /**
                 * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
                 * Uses `label` by default if specified.
                 */
                label?: string | undefined;
                color?: string | typeof import("react-native").OpaqueColorValue | undefined;
                accessibilityLabel?: string | undefined;
                style?: StyleProp<ViewStyle>;
                onPress: (event: GestureResponderEvent) => void;
                testID?: string | undefined; /**
                 * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
                 */
            }[];
            icon: IconSource;
            accessibilityLabel?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            onPress?: ((event: GestureResponderEvent) => void) | undefined;
            open: boolean;
            onStateChange: (state: {
                open: boolean; /**
                 * Function to execute on press.
                 */
            }) => void;
            visible: boolean;
            style?: StyleProp<ViewStyle>;
            fabStyle?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
        }): JSX.Element;
        displayName: string;
    }), {}>) | (React.FunctionComponent<Pick<{
        actions: {
            icon: IconSource; /**
             * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
             * Uses `label` by default if specified.
             */
            label?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            accessibilityLabel?: string | undefined;
            style?: StyleProp<ViewStyle>;
            onPress: (event: GestureResponderEvent) => void;
            testID?: string | undefined; /**
             * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
             */
        }[];
        icon: IconSource;
        accessibilityLabel?: string | undefined;
        color?: string | typeof import("react-native").OpaqueColorValue | undefined;
        onPress?: ((event: GestureResponderEvent) => void) | undefined;
        open: boolean;
        onStateChange: (state: {
            open: boolean; /**
             * Function to execute on press.
             */
        }) => void;
        visible: boolean;
        style?: StyleProp<ViewStyle>;
        fabStyle?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, "style" | "color" | "icon" | "onPress" | "testID" | "accessibilityLabel" | "visible" | "actions" | "open" | "fabStyle" | "onStateChange"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<{
        actions: {
            icon: IconSource; /**
             * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
             * Uses `label` by default if specified.
             */
            label?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            accessibilityLabel?: string | undefined;
            style?: StyleProp<ViewStyle>;
            onPress: (event: GestureResponderEvent) => void;
            testID?: string | undefined; /**
             * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
             */
        }[];
        icon: IconSource;
        accessibilityLabel?: string | undefined;
        color?: string | typeof import("react-native").OpaqueColorValue | undefined;
        onPress?: ((event: GestureResponderEvent) => void) | undefined;
        open: boolean;
        onStateChange: (state: {
            open: boolean; /**
             * Function to execute on press.
             */
        }) => void;
        visible: boolean;
        style?: StyleProp<ViewStyle>;
        fabStyle?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, any> & {
        ({ actions, icon, open, onPress, accessibilityLabel, theme, style, fabStyle, visible, testID, onStateChange, color: colorProp, }: {
            actions: {
                icon: IconSource; /**
                 * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
                 * Uses `label` by default if specified.
                 */
                label?: string | undefined;
                color?: string | typeof import("react-native").OpaqueColorValue | undefined;
                accessibilityLabel?: string | undefined;
                style?: StyleProp<ViewStyle>;
                onPress: (event: GestureResponderEvent) => void;
                testID?: string | undefined; /**
                 * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
                 */
            }[];
            icon: IconSource;
            accessibilityLabel?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            onPress?: ((event: GestureResponderEvent) => void) | undefined;
            open: boolean;
            onStateChange: (state: {
                open: boolean; /**
                 * Function to execute on press.
                 */
            }) => void;
            visible: boolean;
            style?: StyleProp<ViewStyle>;
            fabStyle?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<{
        actions: {
            icon: IconSource; /**
             * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
             * Uses `label` by default if specified.
             */
            label?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            accessibilityLabel?: string | undefined;
            style?: StyleProp<ViewStyle>;
            onPress: (event: GestureResponderEvent) => void;
            testID?: string | undefined; /**
             * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
             */
        }[];
        icon: IconSource;
        accessibilityLabel?: string | undefined;
        color?: string | typeof import("react-native").OpaqueColorValue | undefined;
        onPress?: ((event: GestureResponderEvent) => void) | undefined;
        open: boolean;
        onStateChange: (state: {
            open: boolean; /**
             * Function to execute on press.
             */
        }) => void;
        visible: boolean;
        style?: StyleProp<ViewStyle>;
        fabStyle?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }> & {
        ({ actions, icon, open, onPress, accessibilityLabel, theme, style, fabStyle, visible, testID, onStateChange, color: colorProp, }: {
            actions: {
                icon: IconSource; /**
                 * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
                 * Uses `label` by default if specified.
                 */
                label?: string | undefined;
                color?: string | typeof import("react-native").OpaqueColorValue | undefined;
                accessibilityLabel?: string | undefined;
                style?: StyleProp<ViewStyle>;
                onPress: (event: GestureResponderEvent) => void;
                testID?: string | undefined; /**
                 * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
                 */
            }[];
            icon: IconSource;
            accessibilityLabel?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            onPress?: ((event: GestureResponderEvent) => void) | undefined;
            open: boolean;
            onStateChange: (state: {
                open: boolean; /**
                 * Function to execute on press.
                 */
            }) => void;
            visible: boolean;
            style?: StyleProp<ViewStyle>;
            fabStyle?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
        }): JSX.Element;
        displayName: string;
    }), {}>)>;
}), {}>)>;
export default _default;
declare const FABWithTheme: React.MemoExoticComponent<(React.ComponentClass<Pick<Props, "label" | "small" | "style" | "color" | "icon" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "pointerEvents" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "visible" | "disabled" | "uppercase" | "loading" | "animated"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & {
    ({ small, icon, label, accessibilityLabel, accessibilityState, animated, color: customColor, disabled, onPress, onLongPress, theme, style, visible, uppercase, loading, testID, ...rest }: Props): JSX.Element;
    Group: React.MemoExoticComponent<(React.ComponentClass<Pick<{
        actions: {
            icon: IconSource; /**
             * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
             * Uses `label` by default if specified.
             */
            label?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            accessibilityLabel?: string | undefined;
            style?: StyleProp<ViewStyle>;
            onPress: (event: GestureResponderEvent) => void;
            testID?: string | undefined; /**
             * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
             */
        }[];
        icon: IconSource;
        accessibilityLabel?: string | undefined;
        color?: string | typeof import("react-native").OpaqueColorValue | undefined;
        onPress?: ((event: GestureResponderEvent) => void) | undefined;
        open: boolean;
        onStateChange: (state: {
            open: boolean; /**
             * Function to execute on press.
             */
        }) => void;
        visible: boolean;
        style?: StyleProp<ViewStyle>;
        fabStyle?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, "style" | "color" | "icon" | "onPress" | "testID" | "accessibilityLabel" | "visible" | "actions" | "open" | "fabStyle" | "onStateChange"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<{
        actions: {
            icon: IconSource; /**
             * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
             * Uses `label` by default if specified.
             */
            label?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            accessibilityLabel?: string | undefined;
            style?: StyleProp<ViewStyle>;
            onPress: (event: GestureResponderEvent) => void;
            testID?: string | undefined; /**
             * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
             */
        }[];
        icon: IconSource;
        accessibilityLabel?: string | undefined;
        color?: string | typeof import("react-native").OpaqueColorValue | undefined;
        onPress?: ((event: GestureResponderEvent) => void) | undefined;
        open: boolean;
        onStateChange: (state: {
            open: boolean; /**
             * Function to execute on press.
             */
        }) => void;
        visible: boolean;
        style?: StyleProp<ViewStyle>;
        fabStyle?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, any> & {
        ({ actions, icon, open, onPress, accessibilityLabel, theme, style, fabStyle, visible, testID, onStateChange, color: colorProp, }: {
            actions: {
                icon: IconSource; /**
                 * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
                 * Uses `label` by default if specified.
                 */
                label?: string | undefined;
                color?: string | typeof import("react-native").OpaqueColorValue | undefined;
                accessibilityLabel?: string | undefined;
                style?: StyleProp<ViewStyle>;
                onPress: (event: GestureResponderEvent) => void;
                testID?: string | undefined; /**
                 * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
                 */
            }[];
            icon: IconSource;
            accessibilityLabel?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            onPress?: ((event: GestureResponderEvent) => void) | undefined;
            open: boolean;
            onStateChange: (state: {
                open: boolean; /**
                 * Function to execute on press.
                 */
            }) => void;
            visible: boolean;
            style?: StyleProp<ViewStyle>;
            fabStyle?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<{
        actions: {
            icon: IconSource; /**
             * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
             * Uses `label` by default if specified.
             */
            label?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            accessibilityLabel?: string | undefined;
            style?: StyleProp<ViewStyle>;
            onPress: (event: GestureResponderEvent) => void;
            testID?: string | undefined; /**
             * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
             */
        }[];
        icon: IconSource;
        accessibilityLabel?: string | undefined;
        color?: string | typeof import("react-native").OpaqueColorValue | undefined;
        onPress?: ((event: GestureResponderEvent) => void) | undefined;
        open: boolean;
        onStateChange: (state: {
            open: boolean; /**
             * Function to execute on press.
             */
        }) => void;
        visible: boolean;
        style?: StyleProp<ViewStyle>;
        fabStyle?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }> & {
        ({ actions, icon, open, onPress, accessibilityLabel, theme, style, fabStyle, visible, testID, onStateChange, color: colorProp, }: {
            actions: {
                icon: IconSource; /**
                 * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
                 * Uses `label` by default if specified.
                 */
                label?: string | undefined;
                color?: string | typeof import("react-native").OpaqueColorValue | undefined;
                accessibilityLabel?: string | undefined;
                style?: StyleProp<ViewStyle>;
                onPress: (event: GestureResponderEvent) => void;
                testID?: string | undefined; /**
                 * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
                 */
            }[];
            icon: IconSource;
            accessibilityLabel?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            onPress?: ((event: GestureResponderEvent) => void) | undefined;
            open: boolean;
            onStateChange: (state: {
                open: boolean; /**
                 * Function to execute on press.
                 */
            }) => void;
            visible: boolean;
            style?: StyleProp<ViewStyle>;
            fabStyle?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
        }): JSX.Element;
        displayName: string;
    }), {}>) | (React.FunctionComponent<Pick<{
        actions: {
            icon: IconSource; /**
             * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
             * Uses `label` by default if specified.
             */
            label?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            accessibilityLabel?: string | undefined;
            style?: StyleProp<ViewStyle>;
            onPress: (event: GestureResponderEvent) => void;
            testID?: string | undefined; /**
             * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
             */
        }[];
        icon: IconSource;
        accessibilityLabel?: string | undefined;
        color?: string | typeof import("react-native").OpaqueColorValue | undefined;
        onPress?: ((event: GestureResponderEvent) => void) | undefined;
        open: boolean;
        onStateChange: (state: {
            open: boolean; /**
             * Function to execute on press.
             */
        }) => void;
        visible: boolean;
        style?: StyleProp<ViewStyle>;
        fabStyle?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, "style" | "color" | "icon" | "onPress" | "testID" | "accessibilityLabel" | "visible" | "actions" | "open" | "fabStyle" | "onStateChange"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<{
        actions: {
            icon: IconSource; /**
             * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
             * Uses `label` by default if specified.
             */
            label?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            accessibilityLabel?: string | undefined;
            style?: StyleProp<ViewStyle>;
            onPress: (event: GestureResponderEvent) => void;
            testID?: string | undefined; /**
             * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
             */
        }[];
        icon: IconSource;
        accessibilityLabel?: string | undefined;
        color?: string | typeof import("react-native").OpaqueColorValue | undefined;
        onPress?: ((event: GestureResponderEvent) => void) | undefined;
        open: boolean;
        onStateChange: (state: {
            open: boolean; /**
             * Function to execute on press.
             */
        }) => void;
        visible: boolean;
        style?: StyleProp<ViewStyle>;
        fabStyle?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, any> & {
        ({ actions, icon, open, onPress, accessibilityLabel, theme, style, fabStyle, visible, testID, onStateChange, color: colorProp, }: {
            actions: {
                icon: IconSource; /**
                 * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
                 * Uses `label` by default if specified.
                 */
                label?: string | undefined;
                color?: string | typeof import("react-native").OpaqueColorValue | undefined;
                accessibilityLabel?: string | undefined;
                style?: StyleProp<ViewStyle>;
                onPress: (event: GestureResponderEvent) => void;
                testID?: string | undefined; /**
                 * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
                 */
            }[];
            icon: IconSource;
            accessibilityLabel?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            onPress?: ((event: GestureResponderEvent) => void) | undefined;
            open: boolean;
            onStateChange: (state: {
                open: boolean; /**
                 * Function to execute on press.
                 */
            }) => void;
            visible: boolean;
            style?: StyleProp<ViewStyle>;
            fabStyle?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<{
        actions: {
            icon: IconSource; /**
             * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
             * Uses `label` by default if specified.
             */
            label?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            accessibilityLabel?: string | undefined;
            style?: StyleProp<ViewStyle>;
            onPress: (event: GestureResponderEvent) => void;
            testID?: string | undefined; /**
             * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
             */
        }[];
        icon: IconSource;
        accessibilityLabel?: string | undefined;
        color?: string | typeof import("react-native").OpaqueColorValue | undefined;
        onPress?: ((event: GestureResponderEvent) => void) | undefined;
        open: boolean;
        onStateChange: (state: {
            open: boolean; /**
             * Function to execute on press.
             */
        }) => void;
        visible: boolean;
        style?: StyleProp<ViewStyle>;
        fabStyle?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }> & {
        ({ actions, icon, open, onPress, accessibilityLabel, theme, style, fabStyle, visible, testID, onStateChange, color: colorProp, }: {
            actions: {
                icon: IconSource; /**
                 * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
                 * Uses `label` by default if specified.
                 */
                label?: string | undefined;
                color?: string | typeof import("react-native").OpaqueColorValue | undefined;
                accessibilityLabel?: string | undefined;
                style?: StyleProp<ViewStyle>;
                onPress: (event: GestureResponderEvent) => void;
                testID?: string | undefined; /**
                 * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
                 */
            }[];
            icon: IconSource;
            accessibilityLabel?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            onPress?: ((event: GestureResponderEvent) => void) | undefined;
            open: boolean;
            onStateChange: (state: {
                open: boolean; /**
                 * Function to execute on press.
                 */
            }) => void;
            visible: boolean;
            style?: StyleProp<ViewStyle>;
            fabStyle?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
        }): JSX.Element;
        displayName: string;
    }), {}>)>;
}) | (React.FunctionComponent<Props> & {
    ({ small, icon, label, accessibilityLabel, accessibilityState, animated, color: customColor, disabled, onPress, onLongPress, theme, style, visible, uppercase, loading, testID, ...rest }: Props): JSX.Element;
    Group: React.MemoExoticComponent<(React.ComponentClass<Pick<{
        actions: {
            icon: IconSource; /**
             * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
             * Uses `label` by default if specified.
             */
            label?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            accessibilityLabel?: string | undefined;
            style?: StyleProp<ViewStyle>;
            onPress: (event: GestureResponderEvent) => void;
            testID?: string | undefined; /**
             * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
             */
        }[];
        icon: IconSource;
        accessibilityLabel?: string | undefined;
        color?: string | typeof import("react-native").OpaqueColorValue | undefined;
        onPress?: ((event: GestureResponderEvent) => void) | undefined;
        open: boolean;
        onStateChange: (state: {
            open: boolean; /**
             * Function to execute on press.
             */
        }) => void;
        visible: boolean;
        style?: StyleProp<ViewStyle>;
        fabStyle?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, "style" | "color" | "icon" | "onPress" | "testID" | "accessibilityLabel" | "visible" | "actions" | "open" | "fabStyle" | "onStateChange"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<{
        actions: {
            icon: IconSource; /**
             * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
             * Uses `label` by default if specified.
             */
            label?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            accessibilityLabel?: string | undefined;
            style?: StyleProp<ViewStyle>;
            onPress: (event: GestureResponderEvent) => void;
            testID?: string | undefined; /**
             * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
             */
        }[];
        icon: IconSource;
        accessibilityLabel?: string | undefined;
        color?: string | typeof import("react-native").OpaqueColorValue | undefined;
        onPress?: ((event: GestureResponderEvent) => void) | undefined;
        open: boolean;
        onStateChange: (state: {
            open: boolean; /**
             * Function to execute on press.
             */
        }) => void;
        visible: boolean;
        style?: StyleProp<ViewStyle>;
        fabStyle?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, any> & {
        ({ actions, icon, open, onPress, accessibilityLabel, theme, style, fabStyle, visible, testID, onStateChange, color: colorProp, }: {
            actions: {
                icon: IconSource; /**
                 * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
                 * Uses `label` by default if specified.
                 */
                label?: string | undefined;
                color?: string | typeof import("react-native").OpaqueColorValue | undefined;
                accessibilityLabel?: string | undefined;
                style?: StyleProp<ViewStyle>;
                onPress: (event: GestureResponderEvent) => void;
                testID?: string | undefined; /**
                 * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
                 */
            }[];
            icon: IconSource;
            accessibilityLabel?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            onPress?: ((event: GestureResponderEvent) => void) | undefined;
            open: boolean;
            onStateChange: (state: {
                open: boolean; /**
                 * Function to execute on press.
                 */
            }) => void;
            visible: boolean;
            style?: StyleProp<ViewStyle>;
            fabStyle?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<{
        actions: {
            icon: IconSource; /**
             * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
             * Uses `label` by default if specified.
             */
            label?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            accessibilityLabel?: string | undefined;
            style?: StyleProp<ViewStyle>;
            onPress: (event: GestureResponderEvent) => void;
            testID?: string | undefined; /**
             * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
             */
        }[];
        icon: IconSource;
        accessibilityLabel?: string | undefined;
        color?: string | typeof import("react-native").OpaqueColorValue | undefined;
        onPress?: ((event: GestureResponderEvent) => void) | undefined;
        open: boolean;
        onStateChange: (state: {
            open: boolean; /**
             * Function to execute on press.
             */
        }) => void;
        visible: boolean;
        style?: StyleProp<ViewStyle>;
        fabStyle?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }> & {
        ({ actions, icon, open, onPress, accessibilityLabel, theme, style, fabStyle, visible, testID, onStateChange, color: colorProp, }: {
            actions: {
                icon: IconSource; /**
                 * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
                 * Uses `label` by default if specified.
                 */
                label?: string | undefined;
                color?: string | typeof import("react-native").OpaqueColorValue | undefined;
                accessibilityLabel?: string | undefined;
                style?: StyleProp<ViewStyle>;
                onPress: (event: GestureResponderEvent) => void;
                testID?: string | undefined; /**
                 * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
                 */
            }[];
            icon: IconSource;
            accessibilityLabel?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            onPress?: ((event: GestureResponderEvent) => void) | undefined;
            open: boolean;
            onStateChange: (state: {
                open: boolean; /**
                 * Function to execute on press.
                 */
            }) => void;
            visible: boolean;
            style?: StyleProp<ViewStyle>;
            fabStyle?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
        }): JSX.Element;
        displayName: string;
    }), {}>) | (React.FunctionComponent<Pick<{
        actions: {
            icon: IconSource; /**
             * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
             * Uses `label` by default if specified.
             */
            label?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            accessibilityLabel?: string | undefined;
            style?: StyleProp<ViewStyle>;
            onPress: (event: GestureResponderEvent) => void;
            testID?: string | undefined; /**
             * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
             */
        }[];
        icon: IconSource;
        accessibilityLabel?: string | undefined;
        color?: string | typeof import("react-native").OpaqueColorValue | undefined;
        onPress?: ((event: GestureResponderEvent) => void) | undefined;
        open: boolean;
        onStateChange: (state: {
            open: boolean; /**
             * Function to execute on press.
             */
        }) => void;
        visible: boolean;
        style?: StyleProp<ViewStyle>;
        fabStyle?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, "style" | "color" | "icon" | "onPress" | "testID" | "accessibilityLabel" | "visible" | "actions" | "open" | "fabStyle" | "onStateChange"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<{
        actions: {
            icon: IconSource; /**
             * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
             * Uses `label` by default if specified.
             */
            label?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            accessibilityLabel?: string | undefined;
            style?: StyleProp<ViewStyle>;
            onPress: (event: GestureResponderEvent) => void;
            testID?: string | undefined; /**
             * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
             */
        }[];
        icon: IconSource;
        accessibilityLabel?: string | undefined;
        color?: string | typeof import("react-native").OpaqueColorValue | undefined;
        onPress?: ((event: GestureResponderEvent) => void) | undefined;
        open: boolean;
        onStateChange: (state: {
            open: boolean; /**
             * Function to execute on press.
             */
        }) => void;
        visible: boolean;
        style?: StyleProp<ViewStyle>;
        fabStyle?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, any> & {
        ({ actions, icon, open, onPress, accessibilityLabel, theme, style, fabStyle, visible, testID, onStateChange, color: colorProp, }: {
            actions: {
                icon: IconSource; /**
                 * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
                 * Uses `label` by default if specified.
                 */
                label?: string | undefined;
                color?: string | typeof import("react-native").OpaqueColorValue | undefined;
                accessibilityLabel?: string | undefined;
                style?: StyleProp<ViewStyle>;
                onPress: (event: GestureResponderEvent) => void;
                testID?: string | undefined; /**
                 * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
                 */
            }[];
            icon: IconSource;
            accessibilityLabel?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            onPress?: ((event: GestureResponderEvent) => void) | undefined;
            open: boolean;
            onStateChange: (state: {
                open: boolean; /**
                 * Function to execute on press.
                 */
            }) => void;
            visible: boolean;
            style?: StyleProp<ViewStyle>;
            fabStyle?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<{
        actions: {
            icon: IconSource; /**
             * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
             * Uses `label` by default if specified.
             */
            label?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            accessibilityLabel?: string | undefined;
            style?: StyleProp<ViewStyle>;
            onPress: (event: GestureResponderEvent) => void;
            testID?: string | undefined; /**
             * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
             */
        }[];
        icon: IconSource;
        accessibilityLabel?: string | undefined;
        color?: string | typeof import("react-native").OpaqueColorValue | undefined;
        onPress?: ((event: GestureResponderEvent) => void) | undefined;
        open: boolean;
        onStateChange: (state: {
            open: boolean; /**
             * Function to execute on press.
             */
        }) => void;
        visible: boolean;
        style?: StyleProp<ViewStyle>;
        fabStyle?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }> & {
        ({ actions, icon, open, onPress, accessibilityLabel, theme, style, fabStyle, visible, testID, onStateChange, color: colorProp, }: {
            actions: {
                icon: IconSource; /**
                 * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
                 * Uses `label` by default if specified.
                 */
                label?: string | undefined;
                color?: string | typeof import("react-native").OpaqueColorValue | undefined;
                accessibilityLabel?: string | undefined;
                style?: StyleProp<ViewStyle>;
                onPress: (event: GestureResponderEvent) => void;
                testID?: string | undefined; /**
                 * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
                 */
            }[];
            icon: IconSource;
            accessibilityLabel?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            onPress?: ((event: GestureResponderEvent) => void) | undefined;
            open: boolean;
            onStateChange: (state: {
                open: boolean; /**
                 * Function to execute on press.
                 */
            }) => void;
            visible: boolean;
            style?: StyleProp<ViewStyle>;
            fabStyle?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
        }): JSX.Element;
        displayName: string;
    }), {}>)>;
}), {}>) | (React.FunctionComponent<Pick<Props, "label" | "small" | "style" | "color" | "icon" | "onLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "pointerEvents" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "visible" | "disabled" | "uppercase" | "loading" | "animated"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & {
    ({ small, icon, label, accessibilityLabel, accessibilityState, animated, color: customColor, disabled, onPress, onLongPress, theme, style, visible, uppercase, loading, testID, ...rest }: Props): JSX.Element;
    Group: React.MemoExoticComponent<(React.ComponentClass<Pick<{
        actions: {
            icon: IconSource; /**
             * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
             * Uses `label` by default if specified.
             */
            label?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            accessibilityLabel?: string | undefined;
            style?: StyleProp<ViewStyle>;
            onPress: (event: GestureResponderEvent) => void;
            testID?: string | undefined; /**
             * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
             */
        }[];
        icon: IconSource;
        accessibilityLabel?: string | undefined;
        color?: string | typeof import("react-native").OpaqueColorValue | undefined;
        onPress?: ((event: GestureResponderEvent) => void) | undefined;
        open: boolean;
        onStateChange: (state: {
            open: boolean; /**
             * Function to execute on press.
             */
        }) => void;
        visible: boolean;
        style?: StyleProp<ViewStyle>;
        fabStyle?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, "style" | "color" | "icon" | "onPress" | "testID" | "accessibilityLabel" | "visible" | "actions" | "open" | "fabStyle" | "onStateChange"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<{
        actions: {
            icon: IconSource; /**
             * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
             * Uses `label` by default if specified.
             */
            label?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            accessibilityLabel?: string | undefined;
            style?: StyleProp<ViewStyle>;
            onPress: (event: GestureResponderEvent) => void;
            testID?: string | undefined; /**
             * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
             */
        }[];
        icon: IconSource;
        accessibilityLabel?: string | undefined;
        color?: string | typeof import("react-native").OpaqueColorValue | undefined;
        onPress?: ((event: GestureResponderEvent) => void) | undefined;
        open: boolean;
        onStateChange: (state: {
            open: boolean; /**
             * Function to execute on press.
             */
        }) => void;
        visible: boolean;
        style?: StyleProp<ViewStyle>;
        fabStyle?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, any> & {
        ({ actions, icon, open, onPress, accessibilityLabel, theme, style, fabStyle, visible, testID, onStateChange, color: colorProp, }: {
            actions: {
                icon: IconSource; /**
                 * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
                 * Uses `label` by default if specified.
                 */
                label?: string | undefined;
                color?: string | typeof import("react-native").OpaqueColorValue | undefined;
                accessibilityLabel?: string | undefined;
                style?: StyleProp<ViewStyle>;
                onPress: (event: GestureResponderEvent) => void;
                testID?: string | undefined; /**
                 * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
                 */
            }[];
            icon: IconSource;
            accessibilityLabel?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            onPress?: ((event: GestureResponderEvent) => void) | undefined;
            open: boolean;
            onStateChange: (state: {
                open: boolean; /**
                 * Function to execute on press.
                 */
            }) => void;
            visible: boolean;
            style?: StyleProp<ViewStyle>;
            fabStyle?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<{
        actions: {
            icon: IconSource; /**
             * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
             * Uses `label` by default if specified.
             */
            label?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            accessibilityLabel?: string | undefined;
            style?: StyleProp<ViewStyle>;
            onPress: (event: GestureResponderEvent) => void;
            testID?: string | undefined; /**
             * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
             */
        }[];
        icon: IconSource;
        accessibilityLabel?: string | undefined;
        color?: string | typeof import("react-native").OpaqueColorValue | undefined;
        onPress?: ((event: GestureResponderEvent) => void) | undefined;
        open: boolean;
        onStateChange: (state: {
            open: boolean; /**
             * Function to execute on press.
             */
        }) => void;
        visible: boolean;
        style?: StyleProp<ViewStyle>;
        fabStyle?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }> & {
        ({ actions, icon, open, onPress, accessibilityLabel, theme, style, fabStyle, visible, testID, onStateChange, color: colorProp, }: {
            actions: {
                icon: IconSource; /**
                 * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
                 * Uses `label` by default if specified.
                 */
                label?: string | undefined;
                color?: string | typeof import("react-native").OpaqueColorValue | undefined;
                accessibilityLabel?: string | undefined;
                style?: StyleProp<ViewStyle>;
                onPress: (event: GestureResponderEvent) => void;
                testID?: string | undefined; /**
                 * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
                 */
            }[];
            icon: IconSource;
            accessibilityLabel?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            onPress?: ((event: GestureResponderEvent) => void) | undefined;
            open: boolean;
            onStateChange: (state: {
                open: boolean; /**
                 * Function to execute on press.
                 */
            }) => void;
            visible: boolean;
            style?: StyleProp<ViewStyle>;
            fabStyle?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
        }): JSX.Element;
        displayName: string;
    }), {}>) | (React.FunctionComponent<Pick<{
        actions: {
            icon: IconSource; /**
             * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
             * Uses `label` by default if specified.
             */
            label?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            accessibilityLabel?: string | undefined;
            style?: StyleProp<ViewStyle>;
            onPress: (event: GestureResponderEvent) => void;
            testID?: string | undefined; /**
             * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
             */
        }[];
        icon: IconSource;
        accessibilityLabel?: string | undefined;
        color?: string | typeof import("react-native").OpaqueColorValue | undefined;
        onPress?: ((event: GestureResponderEvent) => void) | undefined;
        open: boolean;
        onStateChange: (state: {
            open: boolean; /**
             * Function to execute on press.
             */
        }) => void;
        visible: boolean;
        style?: StyleProp<ViewStyle>;
        fabStyle?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, "style" | "color" | "icon" | "onPress" | "testID" | "accessibilityLabel" | "visible" | "actions" | "open" | "fabStyle" | "onStateChange"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<{
        actions: {
            icon: IconSource; /**
             * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
             * Uses `label` by default if specified.
             */
            label?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            accessibilityLabel?: string | undefined;
            style?: StyleProp<ViewStyle>;
            onPress: (event: GestureResponderEvent) => void;
            testID?: string | undefined; /**
             * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
             */
        }[];
        icon: IconSource;
        accessibilityLabel?: string | undefined;
        color?: string | typeof import("react-native").OpaqueColorValue | undefined;
        onPress?: ((event: GestureResponderEvent) => void) | undefined;
        open: boolean;
        onStateChange: (state: {
            open: boolean; /**
             * Function to execute on press.
             */
        }) => void;
        visible: boolean;
        style?: StyleProp<ViewStyle>;
        fabStyle?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, any> & {
        ({ actions, icon, open, onPress, accessibilityLabel, theme, style, fabStyle, visible, testID, onStateChange, color: colorProp, }: {
            actions: {
                icon: IconSource; /**
                 * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
                 * Uses `label` by default if specified.
                 */
                label?: string | undefined;
                color?: string | typeof import("react-native").OpaqueColorValue | undefined;
                accessibilityLabel?: string | undefined;
                style?: StyleProp<ViewStyle>;
                onPress: (event: GestureResponderEvent) => void;
                testID?: string | undefined; /**
                 * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
                 */
            }[];
            icon: IconSource;
            accessibilityLabel?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            onPress?: ((event: GestureResponderEvent) => void) | undefined;
            open: boolean;
            onStateChange: (state: {
                open: boolean; /**
                 * Function to execute on press.
                 */
            }) => void;
            visible: boolean;
            style?: StyleProp<ViewStyle>;
            fabStyle?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<{
        actions: {
            icon: IconSource; /**
             * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
             * Uses `label` by default if specified.
             */
            label?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            accessibilityLabel?: string | undefined;
            style?: StyleProp<ViewStyle>;
            onPress: (event: GestureResponderEvent) => void;
            testID?: string | undefined; /**
             * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
             */
        }[];
        icon: IconSource;
        accessibilityLabel?: string | undefined;
        color?: string | typeof import("react-native").OpaqueColorValue | undefined;
        onPress?: ((event: GestureResponderEvent) => void) | undefined;
        open: boolean;
        onStateChange: (state: {
            open: boolean; /**
             * Function to execute on press.
             */
        }) => void;
        visible: boolean;
        style?: StyleProp<ViewStyle>;
        fabStyle?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }> & {
        ({ actions, icon, open, onPress, accessibilityLabel, theme, style, fabStyle, visible, testID, onStateChange, color: colorProp, }: {
            actions: {
                icon: IconSource; /**
                 * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
                 * Uses `label` by default if specified.
                 */
                label?: string | undefined;
                color?: string | typeof import("react-native").OpaqueColorValue | undefined;
                accessibilityLabel?: string | undefined;
                style?: StyleProp<ViewStyle>;
                onPress: (event: GestureResponderEvent) => void;
                testID?: string | undefined; /**
                 * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
                 */
            }[];
            icon: IconSource;
            accessibilityLabel?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            onPress?: ((event: GestureResponderEvent) => void) | undefined;
            open: boolean;
            onStateChange: (state: {
                open: boolean; /**
                 * Function to execute on press.
                 */
            }) => void;
            visible: boolean;
            style?: StyleProp<ViewStyle>;
            fabStyle?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
        }): JSX.Element;
        displayName: string;
    }), {}>)>;
}) | (React.FunctionComponent<Props> & {
    ({ small, icon, label, accessibilityLabel, accessibilityState, animated, color: customColor, disabled, onPress, onLongPress, theme, style, visible, uppercase, loading, testID, ...rest }: Props): JSX.Element;
    Group: React.MemoExoticComponent<(React.ComponentClass<Pick<{
        actions: {
            icon: IconSource; /**
             * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
             * Uses `label` by default if specified.
             */
            label?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            accessibilityLabel?: string | undefined;
            style?: StyleProp<ViewStyle>;
            onPress: (event: GestureResponderEvent) => void;
            testID?: string | undefined; /**
             * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
             */
        }[];
        icon: IconSource;
        accessibilityLabel?: string | undefined;
        color?: string | typeof import("react-native").OpaqueColorValue | undefined;
        onPress?: ((event: GestureResponderEvent) => void) | undefined;
        open: boolean;
        onStateChange: (state: {
            open: boolean; /**
             * Function to execute on press.
             */
        }) => void;
        visible: boolean;
        style?: StyleProp<ViewStyle>;
        fabStyle?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, "style" | "color" | "icon" | "onPress" | "testID" | "accessibilityLabel" | "visible" | "actions" | "open" | "fabStyle" | "onStateChange"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<{
        actions: {
            icon: IconSource; /**
             * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
             * Uses `label` by default if specified.
             */
            label?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            accessibilityLabel?: string | undefined;
            style?: StyleProp<ViewStyle>;
            onPress: (event: GestureResponderEvent) => void;
            testID?: string | undefined; /**
             * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
             */
        }[];
        icon: IconSource;
        accessibilityLabel?: string | undefined;
        color?: string | typeof import("react-native").OpaqueColorValue | undefined;
        onPress?: ((event: GestureResponderEvent) => void) | undefined;
        open: boolean;
        onStateChange: (state: {
            open: boolean; /**
             * Function to execute on press.
             */
        }) => void;
        visible: boolean;
        style?: StyleProp<ViewStyle>;
        fabStyle?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, any> & {
        ({ actions, icon, open, onPress, accessibilityLabel, theme, style, fabStyle, visible, testID, onStateChange, color: colorProp, }: {
            actions: {
                icon: IconSource; /**
                 * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
                 * Uses `label` by default if specified.
                 */
                label?: string | undefined;
                color?: string | typeof import("react-native").OpaqueColorValue | undefined;
                accessibilityLabel?: string | undefined;
                style?: StyleProp<ViewStyle>;
                onPress: (event: GestureResponderEvent) => void;
                testID?: string | undefined; /**
                 * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
                 */
            }[];
            icon: IconSource;
            accessibilityLabel?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            onPress?: ((event: GestureResponderEvent) => void) | undefined;
            open: boolean;
            onStateChange: (state: {
                open: boolean; /**
                 * Function to execute on press.
                 */
            }) => void;
            visible: boolean;
            style?: StyleProp<ViewStyle>;
            fabStyle?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<{
        actions: {
            icon: IconSource; /**
             * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
             * Uses `label` by default if specified.
             */
            label?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            accessibilityLabel?: string | undefined;
            style?: StyleProp<ViewStyle>;
            onPress: (event: GestureResponderEvent) => void;
            testID?: string | undefined; /**
             * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
             */
        }[];
        icon: IconSource;
        accessibilityLabel?: string | undefined;
        color?: string | typeof import("react-native").OpaqueColorValue | undefined;
        onPress?: ((event: GestureResponderEvent) => void) | undefined;
        open: boolean;
        onStateChange: (state: {
            open: boolean; /**
             * Function to execute on press.
             */
        }) => void;
        visible: boolean;
        style?: StyleProp<ViewStyle>;
        fabStyle?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }> & {
        ({ actions, icon, open, onPress, accessibilityLabel, theme, style, fabStyle, visible, testID, onStateChange, color: colorProp, }: {
            actions: {
                icon: IconSource; /**
                 * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
                 * Uses `label` by default if specified.
                 */
                label?: string | undefined;
                color?: string | typeof import("react-native").OpaqueColorValue | undefined;
                accessibilityLabel?: string | undefined;
                style?: StyleProp<ViewStyle>;
                onPress: (event: GestureResponderEvent) => void;
                testID?: string | undefined; /**
                 * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
                 */
            }[];
            icon: IconSource;
            accessibilityLabel?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            onPress?: ((event: GestureResponderEvent) => void) | undefined;
            open: boolean;
            onStateChange: (state: {
                open: boolean; /**
                 * Function to execute on press.
                 */
            }) => void;
            visible: boolean;
            style?: StyleProp<ViewStyle>;
            fabStyle?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
        }): JSX.Element;
        displayName: string;
    }), {}>) | (React.FunctionComponent<Pick<{
        actions: {
            icon: IconSource; /**
             * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
             * Uses `label` by default if specified.
             */
            label?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            accessibilityLabel?: string | undefined;
            style?: StyleProp<ViewStyle>;
            onPress: (event: GestureResponderEvent) => void;
            testID?: string | undefined; /**
             * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
             */
        }[];
        icon: IconSource;
        accessibilityLabel?: string | undefined;
        color?: string | typeof import("react-native").OpaqueColorValue | undefined;
        onPress?: ((event: GestureResponderEvent) => void) | undefined;
        open: boolean;
        onStateChange: (state: {
            open: boolean; /**
             * Function to execute on press.
             */
        }) => void;
        visible: boolean;
        style?: StyleProp<ViewStyle>;
        fabStyle?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, "style" | "color" | "icon" | "onPress" | "testID" | "accessibilityLabel" | "visible" | "actions" | "open" | "fabStyle" | "onStateChange"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<{
        actions: {
            icon: IconSource; /**
             * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
             * Uses `label` by default if specified.
             */
            label?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            accessibilityLabel?: string | undefined;
            style?: StyleProp<ViewStyle>;
            onPress: (event: GestureResponderEvent) => void;
            testID?: string | undefined; /**
             * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
             */
        }[];
        icon: IconSource;
        accessibilityLabel?: string | undefined;
        color?: string | typeof import("react-native").OpaqueColorValue | undefined;
        onPress?: ((event: GestureResponderEvent) => void) | undefined;
        open: boolean;
        onStateChange: (state: {
            open: boolean; /**
             * Function to execute on press.
             */
        }) => void;
        visible: boolean;
        style?: StyleProp<ViewStyle>;
        fabStyle?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }, any> & {
        ({ actions, icon, open, onPress, accessibilityLabel, theme, style, fabStyle, visible, testID, onStateChange, color: colorProp, }: {
            actions: {
                icon: IconSource; /**
                 * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
                 * Uses `label` by default if specified.
                 */
                label?: string | undefined;
                color?: string | typeof import("react-native").OpaqueColorValue | undefined;
                accessibilityLabel?: string | undefined;
                style?: StyleProp<ViewStyle>;
                onPress: (event: GestureResponderEvent) => void;
                testID?: string | undefined; /**
                 * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
                 */
            }[];
            icon: IconSource;
            accessibilityLabel?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            onPress?: ((event: GestureResponderEvent) => void) | undefined;
            open: boolean;
            onStateChange: (state: {
                open: boolean; /**
                 * Function to execute on press.
                 */
            }) => void;
            visible: boolean;
            style?: StyleProp<ViewStyle>;
            fabStyle?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<{
        actions: {
            icon: IconSource; /**
             * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
             * Uses `label` by default if specified.
             */
            label?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            accessibilityLabel?: string | undefined;
            style?: StyleProp<ViewStyle>;
            onPress: (event: GestureResponderEvent) => void;
            testID?: string | undefined; /**
             * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
             */
        }[];
        icon: IconSource;
        accessibilityLabel?: string | undefined;
        color?: string | typeof import("react-native").OpaqueColorValue | undefined;
        onPress?: ((event: GestureResponderEvent) => void) | undefined;
        open: boolean;
        onStateChange: (state: {
            open: boolean; /**
             * Function to execute on press.
             */
        }) => void;
        visible: boolean;
        style?: StyleProp<ViewStyle>;
        fabStyle?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
        testID?: string | undefined;
    }> & {
        ({ actions, icon, open, onPress, accessibilityLabel, theme, style, fabStyle, visible, testID, onStateChange, color: colorProp, }: {
            actions: {
                icon: IconSource; /**
                 * Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
                 * Uses `label` by default if specified.
                 */
                label?: string | undefined;
                color?: string | typeof import("react-native").OpaqueColorValue | undefined;
                accessibilityLabel?: string | undefined;
                style?: StyleProp<ViewStyle>;
                onPress: (event: GestureResponderEvent) => void;
                testID?: string | undefined; /**
                 * Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB.
                 */
            }[];
            icon: IconSource;
            accessibilityLabel?: string | undefined;
            color?: string | typeof import("react-native").OpaqueColorValue | undefined;
            onPress?: ((event: GestureResponderEvent) => void) | undefined;
            open: boolean;
            onStateChange: (state: {
                open: boolean; /**
                 * Function to execute on press.
                 */
            }) => void;
            visible: boolean;
            style?: StyleProp<ViewStyle>;
            fabStyle?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
            testID?: string | undefined;
        }): JSX.Element;
        displayName: string;
    }), {}>)>;
}), {}>)>;
export { FABWithTheme as FAB };
