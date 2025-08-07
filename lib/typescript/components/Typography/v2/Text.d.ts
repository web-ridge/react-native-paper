import * as React from 'react';
import { StyleProp, Text as NativeText, TextStyle } from 'react-native';
import type { MD2Theme } from 'src/types';
type Props = React.ComponentPropsWithRef<typeof NativeText> & {
    style?: StyleProp<TextStyle>;
    /**
     * @optional
     */
    theme?: MD2Theme;
    ref?: any;
};
/**
 * Text component which follows styles from the theme.
 *
 * @extends Text props https://reactnative.dev/docs/text#props
 */
declare const Text: ({ style, theme: overrideTheme, ref, ...rest }: Props) => React.JSX.Element;
export default Text;
//# sourceMappingURL=Text.d.ts.map