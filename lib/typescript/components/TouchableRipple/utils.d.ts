import { StyleProp, ViewStyle } from 'react-native';
import * as React from 'react';
export declare type InteractionState = {
    hovered?: boolean;
    focused?: boolean;
    pressed: boolean;
};
export declare type InteractionStyleType = StyleProp<ViewStyle> | ((interactionState: InteractionState) => StyleProp<ViewStyle>);
export declare type InteractionChildrenType = React.ReactNode | ((interactionState: InteractionState) => React.ReactNode);
export declare function getInteractionStyle(interactionState: InteractionState, s: InteractionStyleType): StyleProp<ViewStyle>;
export declare function getInteractionChildren(interactionState: InteractionState, c: InteractionChildrenType): any;
export declare function useRadiusStyles(style: InteractionStyleType): ViewStyle;
export declare function pickRadiusStyles({ borderBottomEndRadius, borderBottomLeftRadius, borderBottomRightRadius, borderBottomStartRadius, borderRadius, borderTopEndRadius, borderTopLeftRadius, borderTopRightRadius, borderTopStartRadius, }?: ViewStyle): {
    borderBottomEndRadius: number | undefined;
    borderBottomLeftRadius: number | undefined;
    borderBottomRightRadius: number | undefined;
    borderBottomStartRadius: number | undefined;
    borderRadius: number | undefined;
    borderTopEndRadius: number | undefined;
    borderTopLeftRadius: number | undefined;
    borderTopRightRadius: number | undefined;
    borderTopStartRadius: number | undefined;
};
