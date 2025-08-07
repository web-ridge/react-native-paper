import * as React from 'react';
import { PressableAndroidRippleConfig, StyleProp, ViewStyle, GestureResponderEvent, ColorValue, MouseEvent } from 'react-native';
import type { PressableProps } from './Pressable';
import { PressableStateCallbackType } from './Pressable';
import type { ThemeProp } from '../../types';
export type MouseEventType = React.MouseEvent | MouseEvent;
export type Props = PressableProps & {
    borderless?: boolean;
    background?: PressableAndroidRippleConfig;
    centered?: boolean;
    disabled?: boolean;
    onPress?: (e: GestureResponderEvent) => void | null;
    onLongPress?: (e: GestureResponderEvent) => void;
    onPressIn?: (e: GestureResponderEvent) => void;
    onPressOut?: (e: GestureResponderEvent) => void;
    rippleColor?: ColorValue;
    underlayColor?: string;
    children: ((state: PressableStateCallbackType) => React.ReactNode) | React.ReactNode;
    style?: StyleProp<ViewStyle>;
    theme?: ThemeProp;
};
declare const _default: {
    ({ style, background, borderless, disabled: disabledProp, rippleColor, underlayColor, children, theme: themeOverrides, ref, ...rest }: Props): React.JSX.Element;
    supported: boolean;
} & {
    supported: boolean;
};
export default _default;
//# sourceMappingURL=TouchableRipple.native.d.ts.map