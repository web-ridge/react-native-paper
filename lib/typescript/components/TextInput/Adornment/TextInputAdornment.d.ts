import React from 'react';
import type { LayoutChangeEvent, TextStyle, StyleProp, Animated } from 'react-native';
import type { AdornmentConfig, AdornmentStyleAdjustmentForNativeInput } from './types';
import { AdornmentSide, AdornmentType } from './enums';
export declare function getAdornmentConfig({ left, right, }: {
    left?: React.ReactNode;
    right?: React.ReactNode;
}): Array<AdornmentConfig>;
export declare function getAdornmentStyleAdjustmentForNativeInput({ adornmentConfig, leftAffixWidth, rightAffixWidth, paddingHorizontal, inputOffset, mode, }: {
    inputOffset?: number;
    adornmentConfig: AdornmentConfig[];
    leftAffixWidth: number;
    rightAffixWidth: number;
    mode?: 'outlined' | 'flat';
    paddingHorizontal?: number | string;
}): AdornmentStyleAdjustmentForNativeInput | {};
export interface TextInputAdornmentProps {
    forceFocus: () => void;
    adornmentConfig: AdornmentConfig[];
    topPosition: {
        [AdornmentType.Affix]: {
            [AdornmentSide.Left]: number | undefined;
            [AdornmentSide.Right]: number | undefined;
        };
        [AdornmentType.Icon]: number;
    };
    onAffixChange: {
        [AdornmentSide.Left]: (event: LayoutChangeEvent) => void;
        [AdornmentSide.Right]: (event: LayoutChangeEvent) => void;
    };
    left?: React.ReactNode;
    right?: React.ReactNode;
    textStyle?: StyleProp<TextStyle>;
    visible?: Animated.Value;
    isTextInputFocused: boolean;
    paddingHorizontal?: number | string;
}
declare const _default: React.NamedExoticComponent<TextInputAdornmentProps>;
export default _default;
