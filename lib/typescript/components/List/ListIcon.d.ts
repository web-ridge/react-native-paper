import * as React from 'react';
import { ViewStyle, StyleProp, ColorValue } from 'react-native';
import { IconSource } from '../Icon';
declare type Props = {
    /**
     * Icon to show.
     */
    icon: IconSource;
    /**
     * Color for the icon.
     */
    color?: ColorValue;
    style?: StyleProp<ViewStyle>;
};
declare const _default: React.MemoExoticComponent<{
    ({ icon, color: iconColor, style }: Props): JSX.Element;
    displayName: string;
}>;
export default _default;
