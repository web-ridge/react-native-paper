/// <reference types="react" />
declare const Appbar: (({ children, dark, style, mode, elevated, safeAreaInsets, theme: themeOverrides, ...rest }: import("./Appbar").Props) => import("react").JSX.Element) & {
    Content: {
        ({ color: titleColor, subtitle, subtitleStyle, onPress, disabled, style, titleRef, titleStyle, title, titleMaxFontSizeMultiplier, mode, theme: themeOverrides, testID, ...rest }: import("./AppbarContent").Props): import("react").JSX.Element;
        displayName: string;
    };
    Action: {
        ({ size, color: iconColor, icon, disabled, onPress, accessibilityLabel, isLeading, theme: themeOverrides, rippleColor, ref, ...rest }: import("./AppbarAction").Props): import("react").JSX.Element;
        displayName: string;
    };
    BackAction: {
        ({ accessibilityLabel, ref, ...rest }: import("./AppbarBackAction").Props): import("react").JSX.Element;
        displayName: string;
    };
    Header: {
        ({ statusBarHeight, style, dark, mode, elevated, theme: themeOverrides, testID, ...rest }: import("./AppbarHeader").Props): import("react").JSX.Element;
        displayName: string;
    };
};
export default Appbar;
//# sourceMappingURL=index.d.ts.map