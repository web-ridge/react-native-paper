import * as React from 'react';
import {
  ColorValue,
  GestureResponderEvent,
  Platform,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import color from 'color';

import Text from '../Typography/Text';

import { withTheme } from '../../core/theming';
import { white } from '../../styles/colors';

import type { $RemoveChildren } from '../../types';

type Props = $RemoveChildren<typeof View> & {
  /**
   * Custom color for the text.
   */
  color?: ColorValue;
  /**
   * Text for the title.
   */
  title: React.ReactNode;
  /**
   * Style for the title.
   */
  titleStyle?: StyleProp<TextStyle>;
  /**
   * Reference for the title.
   */
  titleRef?: React.RefObject<Text>;
  /**
   * Text for the subtitle.
   */
  subtitle?: React.ReactNode;
  /**
   * Style for the subtitle.
   */
  subtitleStyle?: StyleProp<TextStyle>;
  /**
   * Function to execute on press.
   */
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  /**
   * @optional
   */
  theme: ReactNativePaper.Theme;
};

/**
 * A component used to display a title and optional subtitle in an appbar.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/appbar-content.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Appbar } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *     <Appbar.Header>
 *        <Appbar.Content title="Title" subtitle={'Subtitle'} />
 *     </Appbar.Header>
 * );
 *
 * export default MyComponent;
 * ```
 */
const AppbarContent = ({
  color: titleColor = white,
  subtitle,
  subtitleStyle,
  onPress,
  style,
  titleRef,
  titleStyle,
  theme,
  title,
  ...rest
}: Props) => {
  const { fonts } = theme;

  const subtitleColor = color(titleColor as string)
    .alpha(0.7)
    .rgb()
    .string();

  return (
    <TouchableWithoutFeedback onPress={onPress} disabled={!onPress}>
      <View style={[styles.container, style]} {...rest}>
        <Text
          ref={titleRef}
          style={[
            {
              color: titleColor,
              ...(Platform.OS === 'ios' ? fonts.regular : fonts.medium),
            },
            styles.title,
            titleStyle,
          ]}
          numberOfLines={1}
          accessible
          // @ts-ignore Type '"heading"' is not assignable to type ...
          accessibilityRole={Platform.OS === 'web' ? 'heading' : 'header'}
        >
          {title}
        </Text>
        {subtitle ? (
          <Text
            style={[styles.subtitle, { color: subtitleColor }, subtitleStyle]}
            numberOfLines={1}
          >
            {subtitle}
          </Text>
        ) : null}
      </View>
    </TouchableWithoutFeedback>
  );
};

AppbarContent.displayName = 'Appbar.Content';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: Platform.OS === 'ios' ? 17 : 20,
  },
  subtitle: {
    fontSize: Platform.OS === 'ios' ? 11 : 14,
  },
});

export default React.memo(withTheme(AppbarContent));

// @component-docs ignore-next-line
const AppbarContentWithTheme = React.memo(withTheme(AppbarContent));
// @component-docs ignore-next-line
export { AppbarContentWithTheme as AppbarContent };
