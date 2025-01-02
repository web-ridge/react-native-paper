import type { ViewStyle } from 'react-native';
import type { InternalTheme } from '../../types';
type CardMode = 'elevated' | 'outlined' | 'contained';
type BorderRadiusStyles = Pick<ViewStyle, Extract<keyof ViewStyle, `border${string}Radius`>>;
export declare const getCardCoverStyle: ({ theme, index, total, borderRadiusStyles, }: {
    theme: InternalTheme;
    borderRadiusStyles: BorderRadiusStyles;
    index?: number | undefined;
    total?: number | undefined;
}) => {
    borderBottomEndRadius?: import("react-native").AnimatableNumericValue | undefined;
    borderBottomStartRadius?: import("react-native").AnimatableNumericValue | undefined;
    borderEndEndRadius?: import("react-native").AnimatableNumericValue | undefined;
    borderEndStartRadius?: import("react-native").AnimatableNumericValue | undefined;
    borderStartEndRadius?: import("react-native").AnimatableNumericValue | undefined;
    borderStartStartRadius?: import("react-native").AnimatableNumericValue | undefined;
    borderTopEndRadius?: import("react-native").AnimatableNumericValue | undefined;
    borderTopStartRadius?: import("react-native").AnimatableNumericValue | undefined;
    borderRadius: import("react-native").AnimatableNumericValue;
    borderTopLeftRadius?: import("react-native").AnimatableNumericValue | undefined;
    borderTopRightRadius?: import("react-native").AnimatableNumericValue | undefined;
    borderBottomLeftRadius?: import("react-native").AnimatableNumericValue | undefined;
    borderBottomRightRadius?: import("react-native").AnimatableNumericValue | undefined;
} | {
    borderTopLeftRadius: number;
    borderTopRightRadius: number;
    borderBottomLeftRadius?: undefined;
} | {
    borderBottomLeftRadius: number;
    borderTopLeftRadius?: undefined;
    borderTopRightRadius?: undefined;
} | undefined;
export declare const getCardColors: ({ theme, mode, }: {
    theme: InternalTheme;
    mode: CardMode;
}) => {
    backgroundColor: string | undefined;
    borderColor: string;
};
export {};
//# sourceMappingURL=utils.d.ts.map