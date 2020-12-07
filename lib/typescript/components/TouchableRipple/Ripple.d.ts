/// <reference types="react" />
import { ColorValue } from 'react-native';
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
export default function Ripple({ onRemove, ripple, ripple: { status, animationDuration, style }, }: {
    ripple: RippleType;
    onRemove: (ripple: RippleType) => any;
}): JSX.Element;
export {};
