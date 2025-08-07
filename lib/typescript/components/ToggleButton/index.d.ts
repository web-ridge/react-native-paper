/// <reference types="react" />
declare const ToggleButton: (({ icon, size, theme: themeOverrides, accessibilityLabel, disabled, style, value, status, onPress, rippleColor, ref, ...rest }: import("./ToggleButton").Props) => import("react").JSX.Element) & {
    Group: {
        <Value = string>({ value, onValueChange, children, }: import("./ToggleButtonGroup").Props<Value>): import("react").JSX.Element;
        displayName: string;
    };
    Row: {
        ({ value, onValueChange, children, style }: import("./ToggleButtonRow").Props): import("react").JSX.Element;
        displayName: string;
    };
};
export default ToggleButton;
//# sourceMappingURL=index.d.ts.map