"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MaterialBottomTabView;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _native = require("@react-navigation/native");
var _BottomNavigation = _interopRequireDefault(require("../../components/BottomNavigation/BottomNavigation"));
var _MaterialCommunityIcon = _interopRequireDefault(require("../../components/MaterialCommunityIcon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function MaterialBottomTabView({
  state,
  navigation,
  descriptors,
  ...rest
}) {
  const buildLink = (0, _native.useLinkBuilder)();
  return /*#__PURE__*/React.createElement(_BottomNavigation.default, _extends({}, rest, {
    onIndexChange: noop,
    navigationState: state,
    renderScene: ({
      route
    }) => descriptors[route.key].render(),
    renderTouchable: _reactNative.Platform.OS === 'web' ? ({
      onPress,
      route,
      accessibilityRole: _0,
      borderless: _1,
      centered: _2,
      rippleColor: _3,
      style,
      ...rest
    }) => {
      return /*#__PURE__*/React.createElement(_native.Link, _extends({}, rest, {
        // @ts-expect-error: to could be undefined, but it doesn't affect functionality
        to: buildLink(route.name, route.params),
        accessibilityRole: "link",
        onPress: e => {
          if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && (
          // ignore clicks with modifier keys
          e.button == null || e.button === 0) // ignore everything but left clicks
          ) {
            e.preventDefault();
            onPress === null || onPress === void 0 ? void 0 : onPress(e);
          }
        },
        style: [styles.touchable, style]
      }));
    } : undefined,
    renderIcon: ({
      route,
      focused,
      color
    }) => {
      const {
        options
      } = descriptors[route.key];
      if (typeof options.tabBarIcon === 'string') {
        return /*#__PURE__*/React.createElement(_MaterialCommunityIcon.default, {
          direction: _reactNative.I18nManager.getConstants().isRTL ? 'rtl' : 'ltr',
          name: options.tabBarIcon,
          color: color,
          size: 24
        });
      }
      if (typeof options.tabBarIcon === 'function') {
        return options.tabBarIcon({
          focused,
          color
        });
      }
      return null;
    },
    getLabelText: ({
      route
    }) => {
      const {
        options
      } = descriptors[route.key];
      return options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;
    },
    getColor: ({
      route
    }) => descriptors[route.key].options.tabBarColor,
    getBadge: ({
      route
    }) => descriptors[route.key].options.tabBarBadge,
    getAccessibilityLabel: ({
      route
    }) => descriptors[route.key].options.tabBarAccessibilityLabel,
    getTestID: ({
      route
    }) => descriptors[route.key].options.tabBarButtonTestID,
    onTabPress: ({
      route,
      preventDefault
    }) => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true
      });
      if (event.defaultPrevented) {
        preventDefault();
      } else {
        navigation.dispatch({
          ..._native.CommonActions.navigate(route.name, route.params),
          target: state.key
        });
      }
    },
    onTabLongPress: ({
      route
    }) => navigation.emit({
      type: 'tabLongPress',
      target: route.key
    })
  }));
}
const styles = _reactNative.StyleSheet.create({
  touchable: {
    display: 'flex',
    justifyContent: 'center'
  }
});
function noop() {}
//# sourceMappingURL=MaterialBottomTabView.js.map