import * as React from 'react';
import { ImageSourcePropType, ColorValue } from 'react-native';
declare type IconSourceBase = string | ImageSourcePropType;
export declare type IconSource = IconSourceBase | Readonly<{
    source: IconSourceBase;
    direction: 'rtl' | 'ltr' | 'auto';
}> | ((props: IconProps & {
    color: ColorValue;
}) => React.ReactNode);
declare type IconProps = {
    size: number;
    allowFontScaling?: boolean;
};
declare type Props = IconProps & {
    color?: ColorValue;
    source: any;
    /**
     * @optional
     */
    theme: ReactNativePaper.Theme;
};
export declare const isValidIcon: (source: any) => boolean;
export declare const isEqualIcon: (a: any, b: any) => boolean;
declare const _default: React.MemoExoticComponent<(React.ComponentClass<Pick<Props, "source" | "color" | "size" | "allowFontScaling"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & (({ source, color, size, theme, ...rest }: Props) => any)) | (React.FunctionComponent<Props> & (({ source, color, size, theme, ...rest }: Props) => any)), {}>) | (React.FunctionComponent<Pick<Props, "source" | "color" | "size" | "allowFontScaling"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Props, any> & (({ source, color, size, theme, ...rest }: Props) => any)) | (React.FunctionComponent<Props> & (({ source, color, size, theme, ...rest }: Props) => any)), {}>)>;
export default _default;
