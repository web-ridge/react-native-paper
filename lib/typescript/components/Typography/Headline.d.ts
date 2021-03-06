import * as React from 'react';
import { Text, TextStyle, StyleProp } from 'react-native';
declare type Props = React.ComponentProps<typeof Text> & {
    style?: StyleProp<TextStyle>;
    children: React.ReactNode;
};
declare const _default: React.MemoExoticComponent<(props: Props) => JSX.Element>;
export default _default;
