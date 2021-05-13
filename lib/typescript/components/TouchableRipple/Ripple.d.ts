import { ColorValue } from 'react-native';
import * as React from 'react';
declare type RippleStatusType = 'pressed' | 'not_pressed';
export declare type RippleType = {
    style: {
        backgroundColor: ColorValue;
        left: number;
        top: number;
        width: number;
        height: number;
    };
    animationDuration: number;
    status: RippleStatusType;
};
export declare const RippleStatus: {
    [key: string]: RippleStatusType;
};
declare function Ripple({ onRemove, ripple, ripple: { status, animationDuration, style }, }: {
    ripple: RippleType;
    onRemove: (ripple: RippleType) => any;
}): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof Ripple>;
export default _default;
