import * as React from 'react';
import {
  StyleSheet,
  Pressable,
  View,
  Platform,
  ColorValue,
  ViewStyle,
  StyleProp,
  GestureResponderEvent,
} from 'react-native';
import color from 'color';
import { withTheme } from '../../core/theming';
import {
  getInteractionChildren,
  getInteractionStyle,
  InteractionState,
  useRadiusStyles,
} from './utils';

type Props = React.ComponentProps<typeof Pressable> & {
  borderless?: boolean;
  background?: string;
  disabled?: boolean;
  onPress?: (event: GestureResponderEvent) => void | null;
  rippleColor?: ColorValue;
  underlayColor?: ColorValue;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  theme: ReactNativePaper.Theme;
};

const TouchableRipple = ({
  style,
  background,
  borderless = false,
  disabled: disabledProp,
  rippleColor,
  underlayColor,
  children,
  theme,
  ...rest
}: Props) => {
  const { dark, colors } = theme;
  const disabled = disabledProp || !rest.onPress;
  const calculatedRippleColor =
    rippleColor ||
    color(colors.text)
      .alpha(dark ? 0.32 : 0.2)
      .rgb()
      .string();
  const rippleContainerStyle = useRadiusStyles(style);
  return (
    <Pressable
      {...rest}
      disabled={disabled}
      android_ripple={{
        color: background != null ? background : calculatedRippleColor,
        borderless,
      }}
      style={(interactionState: InteractionState) => [
        styles.touchable,
        borderless && styles.borderless,
        getInteractionStyle(interactionState, style),
      ]}
    >
      {(interactionState: InteractionState) => (
        <>
          {React.Children.only(
            getInteractionChildren(interactionState, children)
          )}
          {interactionState.pressed && Platform.OS !== 'android' ? (
            <View
              style={[
                StyleSheet.absoluteFill,
                rippleContainerStyle,
                { backgroundColor: underlayColor || calculatedRippleColor },
              ]}
            />
          ) : null}
        </>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  touchable: {
    position: 'relative',
  },
  borderless: {
    overflow: 'hidden',
  },
});

export default React.memo(withTheme(TouchableRipple));
