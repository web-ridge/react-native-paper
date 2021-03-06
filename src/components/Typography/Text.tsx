import * as React from 'react';
import { Text as NativeText, TextStyle, StyleProp } from 'react-native';
import { withTheme } from '../../core/theming';

type Props = React.ComponentProps<typeof NativeText> & {
  style?: StyleProp<TextStyle>;
  /**
   * @optional
   */
  theme: ReactNativePaper.Theme;
};

// @component-group Typography

/**
 * Text component which follows styles from the theme.
 *
<<<<<<< HEAD
 * @extends Text props https://reactnative.dev/docs/text.html#props
=======
 * @extends Text props https://reactnative.dev/docs/text#props
>>>>>>> 6b72d3e921217f600be45210bf15ee57674f95ac
 */
const Text: React.RefForwardingComponent<{}, Props> = (
  { style, theme, ...rest }: Props,
  ref
) => {
  const root = React.useRef<NativeText | null>(null);

  React.useImperativeHandle(ref, () => ({
    setNativeProps: (args: Object) => root.current?.setNativeProps(args),
  }));

  return (
    <NativeText
      {...rest}
      ref={root}
      style={[
        {
          ...theme.fonts.regular,
          color: theme.colors.text,
          textAlign: 'left',
        },
        style,
      ]}
    />
  );
};

export default React.memo(withTheme(React.forwardRef(Text)));
