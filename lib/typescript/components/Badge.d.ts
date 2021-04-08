import * as React from 'react';
import { Animated, StyleProp, TextStyle, ViewStyle } from 'react-native';
declare type Props = React.ComponentProps<typeof Animated.Text> & {
    /**
     * Whether the badge is visible
     */
    visible?: boolean;
    /**
     * Content of the `Badge`.
     */
    children?: string | number;
    /**
     * Size of the `Badge`.
     */
    size?: number;
    style?: StyleProp<TextStyle> & StyleProp<ViewStyle>;
    ref?: React.RefObject<typeof Animated.Text>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
};
declare const _default: (React.ComponentClass<Pick<Animated.AnimatedProps<import("react-native").TextProps & React.RefAttributes<import("react-native").Text>> & {
    /**
     * Whether the badge is visible
     */
    visible?: boolean | undefined;
    /**
     * Content of the `Badge`.
     */
    children?: string | number | undefined;
    /**
     * Size of the `Badge`.
     */
    size?: number | undefined;
    style?: false | (false & ViewStyle) | (false & import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>) | (TextStyle & false) | (TextStyle & ViewStyle) | (TextStyle & number & {
        __registeredStyleBrand: ViewStyle;
    }) | (TextStyle & import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>) | (number & {
        __registeredStyleBrand: TextStyle;
    } & ViewStyle) | (number & {
        __registeredStyleBrand: TextStyle;
    } & {
        __registeredStyleBrand: ViewStyle;
    }) | (number & {
        __registeredStyleBrand: TextStyle;
    } & import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>) | (import("react-native").RecursiveArray<false | TextStyle | import("react-native").RegisteredStyle<TextStyle> | null | undefined> & false) | (import("react-native").RecursiveArray<false | TextStyle | import("react-native").RegisteredStyle<TextStyle> | null | undefined> & ViewStyle) | (import("react-native").RecursiveArray<false | TextStyle | import("react-native").RegisteredStyle<TextStyle> | null | undefined> & number & {
        __registeredStyleBrand: ViewStyle;
    }) | (import("react-native").RecursiveArray<false | TextStyle | import("react-native").RegisteredStyle<TextStyle> | null | undefined> & import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>) | null | undefined;
    ref?: React.RefObject<Animated.AnimatedComponent<typeof import("react-native").Text>> | undefined;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
}, "ref" | "style" | "children" | "size" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onLayout" | "onTextLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "visible"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Animated.AnimatedProps<import("react-native").TextProps & React.RefAttributes<import("react-native").Text>> & {
    /**
     * Whether the badge is visible
     */
    visible?: boolean | undefined;
    /**
     * Content of the `Badge`.
     */
    children?: string | number | undefined;
    /**
     * Size of the `Badge`.
     */
    size?: number | undefined;
    style?: false | (false & ViewStyle) | (false & import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>) | (TextStyle & false) | (TextStyle & ViewStyle) | (TextStyle & number & {
        __registeredStyleBrand: ViewStyle;
    }) | (TextStyle & import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>) | (number & {
        __registeredStyleBrand: TextStyle;
    } & ViewStyle) | (number & {
        __registeredStyleBrand: TextStyle;
    } & {
        __registeredStyleBrand: ViewStyle;
    }) | (number & {
        __registeredStyleBrand: TextStyle;
    } & import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>) | (import("react-native").RecursiveArray<false | TextStyle | import("react-native").RegisteredStyle<TextStyle> | null | undefined> & false) | (import("react-native").RecursiveArray<false | TextStyle | import("react-native").RegisteredStyle<TextStyle> | null | undefined> & ViewStyle) | (import("react-native").RecursiveArray<false | TextStyle | import("react-native").RegisteredStyle<TextStyle> | null | undefined> & number & {
        __registeredStyleBrand: ViewStyle;
    }) | (import("react-native").RecursiveArray<false | TextStyle | import("react-native").RegisteredStyle<TextStyle> | null | undefined> & import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>) | null | undefined;
    ref?: React.RefObject<Animated.AnimatedComponent<typeof import("react-native").Text>> | undefined;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
}, any> & (({ children, size, style, theme, visible, ...rest }: Props) => JSX.Element)) | (React.FunctionComponent<Animated.AnimatedProps<import("react-native").TextProps & React.RefAttributes<import("react-native").Text>> & {
    /**
     * Whether the badge is visible
     */
    visible?: boolean | undefined;
    /**
     * Content of the `Badge`.
     */
    children?: string | number | undefined;
    /**
     * Size of the `Badge`.
     */
    size?: number | undefined;
    style?: false | (false & ViewStyle) | (false & import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>) | (TextStyle & false) | (TextStyle & ViewStyle) | (TextStyle & number & {
        __registeredStyleBrand: ViewStyle;
    }) | (TextStyle & import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>) | (number & {
        __registeredStyleBrand: TextStyle;
    } & ViewStyle) | (number & {
        __registeredStyleBrand: TextStyle;
    } & {
        __registeredStyleBrand: ViewStyle;
    }) | (number & {
        __registeredStyleBrand: TextStyle;
    } & import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>) | (import("react-native").RecursiveArray<false | TextStyle | import("react-native").RegisteredStyle<TextStyle> | null | undefined> & false) | (import("react-native").RecursiveArray<false | TextStyle | import("react-native").RegisteredStyle<TextStyle> | null | undefined> & ViewStyle) | (import("react-native").RecursiveArray<false | TextStyle | import("react-native").RegisteredStyle<TextStyle> | null | undefined> & number & {
        __registeredStyleBrand: ViewStyle;
    }) | (import("react-native").RecursiveArray<false | TextStyle | import("react-native").RegisteredStyle<TextStyle> | null | undefined> & import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>) | null | undefined;
    ref?: React.RefObject<Animated.AnimatedComponent<typeof import("react-native").Text>> | undefined;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
}> & (({ children, size, style, theme, visible, ...rest }: Props) => JSX.Element)), {}>) | (React.FunctionComponent<Pick<Animated.AnimatedProps<import("react-native").TextProps & React.RefAttributes<import("react-native").Text>> & {
    /**
     * Whether the badge is visible
     */
    visible?: boolean | undefined;
    /**
     * Content of the `Badge`.
     */
    children?: string | number | undefined;
    /**
     * Size of the `Badge`.
     */
    size?: number | undefined;
    style?: false | (false & ViewStyle) | (false & import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>) | (TextStyle & false) | (TextStyle & ViewStyle) | (TextStyle & number & {
        __registeredStyleBrand: ViewStyle;
    }) | (TextStyle & import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>) | (number & {
        __registeredStyleBrand: TextStyle;
    } & ViewStyle) | (number & {
        __registeredStyleBrand: TextStyle;
    } & {
        __registeredStyleBrand: ViewStyle;
    }) | (number & {
        __registeredStyleBrand: TextStyle;
    } & import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>) | (import("react-native").RecursiveArray<false | TextStyle | import("react-native").RegisteredStyle<TextStyle> | null | undefined> & false) | (import("react-native").RecursiveArray<false | TextStyle | import("react-native").RegisteredStyle<TextStyle> | null | undefined> & ViewStyle) | (import("react-native").RecursiveArray<false | TextStyle | import("react-native").RegisteredStyle<TextStyle> | null | undefined> & number & {
        __registeredStyleBrand: ViewStyle;
    }) | (import("react-native").RecursiveArray<false | TextStyle | import("react-native").RegisteredStyle<TextStyle> | null | undefined> & import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>) | null | undefined;
    ref?: React.RefObject<Animated.AnimatedComponent<typeof import("react-native").Text>> | undefined;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
}, "ref" | "style" | "children" | "size" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onLayout" | "onTextLayout" | "onPress" | "onLongPress" | "testID" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "visible"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Animated.AnimatedProps<import("react-native").TextProps & React.RefAttributes<import("react-native").Text>> & {
    /**
     * Whether the badge is visible
     */
    visible?: boolean | undefined;
    /**
     * Content of the `Badge`.
     */
    children?: string | number | undefined;
    /**
     * Size of the `Badge`.
     */
    size?: number | undefined;
    style?: false | (false & ViewStyle) | (false & import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>) | (TextStyle & false) | (TextStyle & ViewStyle) | (TextStyle & number & {
        __registeredStyleBrand: ViewStyle;
    }) | (TextStyle & import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>) | (number & {
        __registeredStyleBrand: TextStyle;
    } & ViewStyle) | (number & {
        __registeredStyleBrand: TextStyle;
    } & {
        __registeredStyleBrand: ViewStyle;
    }) | (number & {
        __registeredStyleBrand: TextStyle;
    } & import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>) | (import("react-native").RecursiveArray<false | TextStyle | import("react-native").RegisteredStyle<TextStyle> | null | undefined> & false) | (import("react-native").RecursiveArray<false | TextStyle | import("react-native").RegisteredStyle<TextStyle> | null | undefined> & ViewStyle) | (import("react-native").RecursiveArray<false | TextStyle | import("react-native").RegisteredStyle<TextStyle> | null | undefined> & number & {
        __registeredStyleBrand: ViewStyle;
    }) | (import("react-native").RecursiveArray<false | TextStyle | import("react-native").RegisteredStyle<TextStyle> | null | undefined> & import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>) | null | undefined;
    ref?: React.RefObject<Animated.AnimatedComponent<typeof import("react-native").Text>> | undefined;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
}, any> & (({ children, size, style, theme, visible, ...rest }: Props) => JSX.Element)) | (React.FunctionComponent<Animated.AnimatedProps<import("react-native").TextProps & React.RefAttributes<import("react-native").Text>> & {
    /**
     * Whether the badge is visible
     */
    visible?: boolean | undefined;
    /**
     * Content of the `Badge`.
     */
    children?: string | number | undefined;
    /**
     * Size of the `Badge`.
     */
    size?: number | undefined;
    style?: false | (false & ViewStyle) | (false & import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>) | (TextStyle & false) | (TextStyle & ViewStyle) | (TextStyle & number & {
        __registeredStyleBrand: ViewStyle;
    }) | (TextStyle & import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>) | (number & {
        __registeredStyleBrand: TextStyle;
    } & ViewStyle) | (number & {
        __registeredStyleBrand: TextStyle;
    } & {
        __registeredStyleBrand: ViewStyle;
    }) | (number & {
        __registeredStyleBrand: TextStyle;
    } & import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>) | (import("react-native").RecursiveArray<false | TextStyle | import("react-native").RegisteredStyle<TextStyle> | null | undefined> & false) | (import("react-native").RecursiveArray<false | TextStyle | import("react-native").RegisteredStyle<TextStyle> | null | undefined> & ViewStyle) | (import("react-native").RecursiveArray<false | TextStyle | import("react-native").RegisteredStyle<TextStyle> | null | undefined> & number & {
        __registeredStyleBrand: ViewStyle;
    }) | (import("react-native").RecursiveArray<false | TextStyle | import("react-native").RegisteredStyle<TextStyle> | null | undefined> & import("react-native").RecursiveArray<false | ViewStyle | import("react-native").RegisteredStyle<ViewStyle> | null | undefined>) | null | undefined;
    ref?: React.RefObject<Animated.AnimatedComponent<typeof import("react-native").Text>> | undefined;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
}> & (({ children, size, style, theme, visible, ...rest }: Props) => JSX.Element)), {}>);
export default _default;
