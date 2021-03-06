function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { View, Platform, StyleSheet } from 'react-native';
import color from 'color';
import { AppbarContent, AppbarAction, AppbarBackAction, AppbarHeader } from './AppbarElements';
import Surface from '../Surface';
import { withTheme } from '../../core/theming';
import { black, white } from '../../styles/colors';
import overlay from '../../styles/overlay';
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

const Appbar = (_ref) => {
  let {
    children,
    dark,
    style,
    theme
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "dark", "style", "theme"]);

  const {
    colors,
    dark: isDarkTheme,
    mode
  } = theme;

  const _ref2 = StyleSheet.flatten(style) || {},
        {
    backgroundColor: customBackground,
    elevation = 4
  } = _ref2,
        restStyle = _objectWithoutProperties(_ref2, ["backgroundColor", "elevation"]);

  let isDark;
  const backgroundColor = customBackground ? customBackground : isDarkTheme && mode === 'adaptive' ? overlay(elevation, colors.surface) : colors.primary;

  if (typeof dark === 'boolean') {
    isDark = dark;
  } else {
    isDark = backgroundColor === 'transparent' ? false : !color(backgroundColor).isLight();
  }

  let shouldCenterContent = false;
  let shouldAddLeftSpacing = false;
  let shouldAddRightSpacing = false;

  if (Platform.OS === 'ios') {
    let hasAppbarContent = false;
    let leftItemsCount = 0;
    let rightItemsCount = 0;
    React.Children.forEach(children, child => {
      if ( /*#__PURE__*/React.isValidElement(child)) {
        if (child.type === AppbarContent) {
          hasAppbarContent = true;
        } else if (hasAppbarContent) {
          rightItemsCount++;
        } else {
          leftItemsCount++;
        }
      }
    });
    shouldCenterContent = hasAppbarContent && leftItemsCount < 2 && rightItemsCount < 2;
    shouldAddLeftSpacing = shouldCenterContent && leftItemsCount === 0;
    shouldAddRightSpacing = shouldCenterContent && rightItemsCount === 0;
  }

  return /*#__PURE__*/React.createElement(Surface //@ts-ignore Types of property 'backgroundColor' are incompatible.
  , _extends({
    style: [{
      backgroundColor
    }, styles.appbar, {
      elevation
    }, restStyle]
  }, rest), shouldAddLeftSpacing ? /*#__PURE__*/React.createElement(View, {
    style: styles.spacing
  }) : null, React.Children.toArray(children).filter(child => child != null && typeof child !== 'boolean').map((child, i) => {
    if (! /*#__PURE__*/React.isValidElement(child) || ![AppbarContent, AppbarAction, AppbarBackAction // @ts-ignore Type 'string' is not assignable to type
    ].includes(child.type)) {
      return child;
    }

    const props = {
      color: typeof child.props.color !== 'undefined' ? child.props.color : isDark ? white : black
    };

    if (child.type === AppbarContent) {
      props.style = [// Since content is not first item, add extra left margin
      i !== 0 && {
        marginLeft: 8
      }, shouldCenterContent && {
        alignItems: 'center'
      }, child.props.style];
    }

    return /*#__PURE__*/React.cloneElement(child, props);
  }), shouldAddRightSpacing ? /*#__PURE__*/React.createElement(View, {
    style: styles.spacing
  }) : null);
};

const styles = StyleSheet.create({
  appbar: {
    height: DEFAULT_APPBAR_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
    elevation: 4
  },
  spacing: {
    width: 48
  }
});
let AppbarWithThemeTheme = withTheme(Appbar);
let AppbarWithTheme = /*#__PURE__*/React.memo(AppbarWithThemeTheme); // @component ./AppbarContent.tsx

AppbarWithTheme.Content = AppbarContent; // @component ./AppbarAction.tsx

AppbarWithTheme.Action = AppbarAction; // @component ./AppbarBackAction.tsx

AppbarWithTheme.BackAction = AppbarBackAction; // @component ./AppbarHeader.tsx

AppbarWithTheme.Header = AppbarHeader; // @component-docs ignore-next-line
// @component-docs ignore-next-line

export { AppbarWithTheme as Appbar };
export default AppbarWithTheme;
//# sourceMappingURL=Appbar.js.map