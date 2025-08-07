import * as React from 'react';
import { Animated, GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';
import CardActions from './CardActions';
import CardContent from './CardContent';
import CardCover from './CardCover';
import CardTitle from './CardTitle';
import type { $Omit, ThemeProp } from '../../types';
import Surface from '../Surface';
type OutlinedCardProps = {
    mode: 'outlined';
    elevation?: never;
};
type ElevatedCardProps = {
    mode?: 'elevated';
    elevation?: number;
};
type ContainedCardProps = {
    mode?: 'contained';
    elevation?: never;
};
type Mode = 'elevated' | 'outlined' | 'contained';
export type Props = $Omit<React.ComponentPropsWithRef<typeof Surface>, 'mode'> & {
    /**
     * Mode of the Card.
     * - `elevated` - Card with elevation.
     * - `contained` - Card without outline and elevation @supported Available in v5.x with theme version 3
     * - `outlined` - Card with an outline.
     */
    mode?: Mode;
    /**
     * Content of the `Card`.
     */
    children: React.ReactNode;
    /**
     * Function to execute on long press.
     */
    onLongPress?: () => void;
    /**
     * Function to execute on press.
     */
    onPress?: (e: GestureResponderEvent) => void;
    /**
     * Function to execute as soon as the touchable element is pressed and invoked even before onPress.
     */
    onPressIn?: (e: GestureResponderEvent) => void;
    /**
     * Function to execute as soon as the touch is released even before onPress.
     */
    onPressOut?: (e: GestureResponderEvent) => void;
    /**
     * The number of milliseconds a user must touch the element before executing `onLongPress`.
     */
    delayLongPress?: number;
    /**
     * If true, disable all interactions for this component.
     */
    disabled?: boolean;
    /**
     * Changes Card shadow and background on iOS and Android.
     */
    elevation?: 0 | 1 | 2 | 3 | 4 | 5 | Animated.Value;
    /**
     * Style of card's inner content.
     */
    contentStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<ViewStyle>;
    /**
     * @optional
     */
    theme?: ThemeProp;
    /**
     * Pass down testID from card props to touchable
     */
    testID?: string;
    /**
     * Pass down accessible from card props to touchable
     */
    accessible?: boolean;
};
declare const Card: (({ elevation: cardElevation, delayLongPress, onPress, onLongPress, onPressOut, onPressIn, mode: cardMode, children, style, contentStyle, theme: themeOverrides, testID, accessible, disabled, ref, ...rest }: (OutlinedCardProps | ElevatedCardProps | ContainedCardProps) & Props) => React.JSX.Element) & {
    Content: typeof CardContent;
    Actions: typeof CardActions;
    Cover: typeof CardCover;
    Title: typeof CardTitle;
};
export default Card;
//# sourceMappingURL=Card.d.ts.map