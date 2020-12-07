import * as React from 'react';
import {
  View,
  ViewStyle,
  Platform,
  StyleSheet,
  StyleProp,
  ColorValue,
} from 'react-native';
import color from 'color';

import AppbarContent, {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  AppbarContent as _AppbarContent,
} from './AppbarContent';
import AppbarAction from './AppbarAction';
import AppbarBackAction from './AppbarBackAction';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import AppbarHeader, { AppbarHeader as _AppbarHeader } from './AppbarHeader';
import Surface from '../Surface';
import { withTheme } from '../../core/theming';
import { black, white } from '../../styles/colors';
import overlay from '../../styles/overlay';

type Props = Partial<React.ComponentPropsWithRef<typeof View>> & {
  /**
   * Whether the background color is a dark color. A dark appbar will render light text and vice-versa.
   */
  dark?: boolean;
  /**
   * Content of the `Appbar`.
   */
  children: React.ReactNode;
  /**
   * @optional
   */
  theme: ReactNativePaper.Theme;
  style?: StyleProp<ViewStyle>;
};

export const DEFAULT_APPBAR_HEIGHT = 56;

/**
 * A component to display action items in a bar. It can be placed at the top or bottom.
 * The top bar usually contains the screen title, controls such as navigation buttons, menu button etc.
 * The bottom bar usually provides access to a drawer and up to four actions.
 *
 * By default Appbar uses primary color as a background, in dark theme with `adaptive` mode it will use surface colour instead.
 * See [Dark Theme](https://callstack.github.io/react-native-paper/theming.html#dark-theme) for more informations
 *
 * <div class="screenshots">
 *   <img class="medium" src="screenshots/appbar.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Appbar } from 'react-native-paper';
 * import { StyleSheet } from 'react-native';
 *
 * const MyComponent = () => (
 *  <Appbar style={styles.bottom}>
 *    <Appbar.Action
 *      icon="archive"
 *      onPress={() => console.log('Pressed archive')}
 *     />
 *     <Appbar.Action icon="mail" onPress={() => console.log('Pressed mail')} />
 *     <Appbar.Action icon="label" onPress={() => console.log('Pressed label')} />
 *     <Appbar.Action
 *       icon="delete"
 *       onPress={() => console.log('Pressed delete')}
 *     />
 *   </Appbar>
 *  );
 *
 * export default MyComponent
 *
 * const styles = StyleSheet.create({
 *   bottom: {
 *     position: 'absolute',
 *     left: 0,
 *     right: 0,
 *     bottom: 0,
 *   },
 * });
 * ```
 */
const Appbar = ({ children, dark, style, theme, ...rest }: Props) => {
  const { colors, dark: isDarkTheme, mode } = theme;
  const {
    backgroundColor: customBackground,
    elevation = 4,
    ...restStyle
  }: ViewStyle = StyleSheet.flatten(style) || {};

  let isDark: boolean;

  const backgroundColor = customBackground
    ? customBackground
    : isDarkTheme && mode === 'adaptive'
    ? overlay(elevation, colors.surface)
    : colors.primary;
  if (typeof dark === 'boolean') {
    isDark = dark;
  } else {
    isDark =
      backgroundColor === 'transparent'
        ? false
        : !color(backgroundColor as string).isLight();
  }

  let shouldCenterContent = false;
  let shouldAddLeftSpacing = false;
  let shouldAddRightSpacing = false;
  if (Platform.OS === 'ios') {
    let hasAppbarContent = false;
    let leftItemsCount = 0;
    let rightItemsCount = 0;

    React.Children.forEach(children, (child) => {
      if (React.isValidElement(child)) {
        if (child.type === AppbarContent) {
          hasAppbarContent = true;
        } else if (hasAppbarContent) {
          rightItemsCount++;
        } else {
          leftItemsCount++;
        }
      }
    });

    shouldCenterContent =
      hasAppbarContent && leftItemsCount < 2 && rightItemsCount < 2;
    shouldAddLeftSpacing = shouldCenterContent && leftItemsCount === 0;
    shouldAddRightSpacing = shouldCenterContent && rightItemsCount === 0;
  }
  return (
    <Surface
      //@ts-ignore Types of property 'backgroundColor' are incompatible.
      style={[{ backgroundColor }, styles.appbar, { elevation }, restStyle]}
      {...rest}
    >
      {shouldAddLeftSpacing ? <View style={styles.spacing} /> : null}
      {React.Children.toArray(children)
        .filter((child) => child != null && typeof child !== 'boolean')
        .map((child, i) => {
          if (
            !React.isValidElement(child) ||
            ![
              AppbarContent,
              AppbarAction,
              AppbarBackAction,
              // @ts-ignore Type 'string' is not assignable to type
            ].includes(child.type)
          ) {
            return child;
          }

          const props: { color?: ColorValue; style?: StyleProp<ViewStyle> } = {
            color:
              typeof child.props.color !== 'undefined'
                ? child.props.color
                : isDark
                ? white
                : black,
          };

          if (child.type === AppbarContent) {
            props.style = [
              // Since content is not first item, add extra left margin
              i !== 0 && { marginLeft: 8 },
              shouldCenterContent && { alignItems: 'center' },
              child.props.style,
            ];
          }
          return React.cloneElement(child, props);
        })}
      {shouldAddRightSpacing ? <View style={styles.spacing} /> : null}
    </Surface>
  );
};

// @component ./AppbarContent.tsx
Appbar.Content = AppbarContent;
// @component ./AppbarAction.tsx
Appbar.Action = AppbarAction;
// @component ./AppbarBackAction.tsx
Appbar.BackAction = AppbarBackAction;
// @component ./AppbarHeader.tsx
Appbar.Header = AppbarHeader;

const styles = StyleSheet.create({
  appbar: {
    height: DEFAULT_APPBAR_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
    elevation: 4,
  },
  spacing: {
    width: 48,
  },
});

export default withTheme(Appbar);
