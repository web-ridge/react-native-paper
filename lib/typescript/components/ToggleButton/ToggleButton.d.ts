import * as React from 'react';
import { StyleProp, ViewStyle, GestureResponderEvent, ColorValue } from 'react-native';
import type { IconSource } from '../Icon';
declare type Props = {
    /**
     * Icon to display for the `ToggleButton`.
     */
    icon: IconSource;
    /**
     * Size of the icon.
     */
    size?: number;
    /**
     * Custom text color for button.
     */
    color?: ColorValue;
    /**
     * Whether the button is disabled.
     */
    disabled?: boolean;
    /**
     * Accessibility label for the `ToggleButton`. This is read by the screen reader when the user taps the button.
     */
    accessibilityLabel?: string;
    /**
     * Function to execute on press.
     */
    onPress?: (event: GestureResponderEvent) => void;
    /**
     * Value of button.
     */
    value?: string;
    /**
     * Status of button.
     */
    status?: 'checked' | 'unchecked';
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
};
declare const _default: (React.ComponentClass<Pick<Props, "style" | "color" | "size" | "icon" | "onPress" | "accessibilityLabel" | "status" | "disabled" | "value"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & {
    ({ icon, size, theme, accessibilityLabel, disabled, style, value, status, onPress, ...rest }: Props): JSX.Element;
    Group: {
        ({ value, onValueChange, children }: {
            onValueChange: (value: string) => void;
            value: string;
            children: React.ReactNode;
        }): JSX.Element;
        displayName: string;
    };
    Row: {
        ({ value, onValueChange, children, style }: {
            onValueChange: (value: string) => void;
            value: string;
            children: React.ReactNode;
            style?: StyleProp<ViewStyle>;
        }): JSX.Element;
        displayName: string;
    };
}) | (React.FunctionComponent<Props> & {
    ({ icon, size, theme, accessibilityLabel, disabled, style, value, status, onPress, ...rest }: Props): JSX.Element;
    Group: {
        ({ value, onValueChange, children }: {
            onValueChange: (value: string) => void;
            value: string;
            children: React.ReactNode;
        }): JSX.Element;
        displayName: string;
    };
    Row: {
        ({ value, onValueChange, children, style }: {
            onValueChange: (value: string) => void;
            value: string;
            children: React.ReactNode;
            style?: StyleProp<ViewStyle>;
        }): JSX.Element;
        displayName: string;
    };
}), {}>) | (React.FunctionComponent<Pick<Props, "style" | "color" | "size" | "icon" | "onPress" | "accessibilityLabel" | "status" | "disabled" | "value"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & {
    ({ icon, size, theme, accessibilityLabel, disabled, style, value, status, onPress, ...rest }: Props): JSX.Element;
    Group: {
        ({ value, onValueChange, children }: {
            onValueChange: (value: string) => void;
            value: string;
            children: React.ReactNode;
        }): JSX.Element;
        displayName: string;
    };
    Row: {
        ({ value, onValueChange, children, style }: {
            onValueChange: (value: string) => void;
            value: string;
            children: React.ReactNode;
            style?: StyleProp<ViewStyle>;
        }): JSX.Element;
        displayName: string;
    };
}) | (React.FunctionComponent<Props> & {
    ({ icon, size, theme, accessibilityLabel, disabled, style, value, status, onPress, ...rest }: Props): JSX.Element;
    Group: {
        ({ value, onValueChange, children }: {
            onValueChange: (value: string) => void;
            value: string;
            children: React.ReactNode;
        }): JSX.Element;
        displayName: string;
    };
    Row: {
        ({ value, onValueChange, children, style }: {
            onValueChange: (value: string) => void;
            value: string;
            children: React.ReactNode;
            style?: StyleProp<ViewStyle>;
        }): JSX.Element;
        displayName: string;
    };
}), {}>);
export default _default;
declare const ToggleButtonWithTheme: (React.ComponentClass<Pick<Props, "style" | "color" | "size" | "icon" | "onPress" | "accessibilityLabel" | "status" | "disabled" | "value"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & {
    ({ icon, size, theme, accessibilityLabel, disabled, style, value, status, onPress, ...rest }: Props): JSX.Element;
    Group: {
        ({ value, onValueChange, children }: {
            onValueChange: (value: string) => void;
            value: string;
            children: React.ReactNode;
        }): JSX.Element;
        displayName: string;
    };
    Row: {
        ({ value, onValueChange, children, style }: {
            onValueChange: (value: string) => void;
            value: string;
            children: React.ReactNode;
            style?: StyleProp<ViewStyle>;
        }): JSX.Element;
        displayName: string;
    };
}) | (React.FunctionComponent<Props> & {
    ({ icon, size, theme, accessibilityLabel, disabled, style, value, status, onPress, ...rest }: Props): JSX.Element;
    Group: {
        ({ value, onValueChange, children }: {
            onValueChange: (value: string) => void;
            value: string;
            children: React.ReactNode;
        }): JSX.Element;
        displayName: string;
    };
    Row: {
        ({ value, onValueChange, children, style }: {
            onValueChange: (value: string) => void;
            value: string;
            children: React.ReactNode;
            style?: StyleProp<ViewStyle>;
        }): JSX.Element;
        displayName: string;
    };
}), {}>) | (React.FunctionComponent<Pick<Props, "style" | "color" | "size" | "icon" | "onPress" | "accessibilityLabel" | "status" | "disabled" | "value"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & {
    ({ icon, size, theme, accessibilityLabel, disabled, style, value, status, onPress, ...rest }: Props): JSX.Element;
    Group: {
        ({ value, onValueChange, children }: {
            onValueChange: (value: string) => void;
            value: string;
            children: React.ReactNode;
        }): JSX.Element;
        displayName: string;
    };
    Row: {
        ({ value, onValueChange, children, style }: {
            onValueChange: (value: string) => void;
            value: string;
            children: React.ReactNode;
            style?: StyleProp<ViewStyle>;
        }): JSX.Element;
        displayName: string;
    };
}) | (React.FunctionComponent<Props> & {
    ({ icon, size, theme, accessibilityLabel, disabled, style, value, status, onPress, ...rest }: Props): JSX.Element;
    Group: {
        ({ value, onValueChange, children }: {
            onValueChange: (value: string) => void;
            value: string;
            children: React.ReactNode;
        }): JSX.Element;
        displayName: string;
    };
    Row: {
        ({ value, onValueChange, children, style }: {
            onValueChange: (value: string) => void;
            value: string;
            children: React.ReactNode;
            style?: StyleProp<ViewStyle>;
        }): JSX.Element;
        displayName: string;
    };
}), {}>);
export { ToggleButtonWithTheme as ToggleButton };
