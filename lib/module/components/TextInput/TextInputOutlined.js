function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { View, TextInput as NativeTextInput, StyleSheet, I18nManager, Platform } from 'react-native';
import color from 'color';
import TextInputAdornment, { getAdornmentConfig, getAdornmentStyleAdjustmentForNativeInput } from './Adornment/TextInputAdornment';
import InputLabel from './Label/InputLabel';
import LabelBackground from './Label/LabelBackground';
import { MAXIMIZED_LABEL_FONT_SIZE, MINIMIZED_LABEL_FONT_SIZE, LABEL_WIGGLE_X_OFFSET, ADORNMENT_SIZE, ADORNMENT_OFFSET } from './constants';
import { calculateLabelTopPosition, calculateInputHeight, calculatePadding, adjustPaddingOut, interpolatePlaceholder, calculateOutlinedIconAndAffixTopPosition } from './helpers';
import { AdornmentType, AdornmentSide } from './Adornment/enums';
const OUTLINE_MINIMIZED_LABEL_Y_OFFSET = -6;
const LABEL_PADDING_TOP = 8;
const MIN_HEIGHT = 64;
const MIN_DENSE_HEIGHT = 48;
const INPUT_PADDING_HORIZONTAL = 14;

function TextInputOutlined(props) {
  const {
    disabled = false,
    editable = false,
    label,
    error = false,
    selectionColor,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    underlineColor,
    dense,
    style,
    theme,
    render = props => /*#__PURE__*/React.createElement(NativeTextInput, props),
    multiline = false,
    parentState,
    innerRef,
    onFocus,
    forceFocus,
    onBlur,
    onChangeText,
    onLayoutAnimatedText,
    onLeftAffixLayoutChange,
    onRightAffixLayoutChange,
    left,
    right,
    placeholderTextColor
  } = props,
        rest = _objectWithoutProperties(props, ["disabled", "editable", "label", "error", "selectionColor", "underlineColor", "dense", "style", "theme", "render", "multiline", "parentState", "innerRef", "onFocus", "forceFocus", "onBlur", "onChangeText", "onLayoutAnimatedText", "onLeftAffixLayoutChange", "onRightAffixLayoutChange", "left", "right", "placeholderTextColor"]);

  const adornmentConfig = React.useMemo(() => getAdornmentConfig({
    left,
    right
  }), [left, right]);
  const {
    colors,
    fonts
  } = theme;
  const font = fonts.regular;
  const hasActiveOutline = parentState.focused || error;

  const _ref = StyleSheet.flatten(style) || {},
        {
    fontSize: fontSizeStyle,
    fontWeight,
    height,
    backgroundColor = colors.background,
    textAlign
  } = _ref,
        viewStyle = _objectWithoutProperties(_ref, ["fontSize", "fontWeight", "height", "backgroundColor", "textAlign"]);

  const fontSize = fontSizeStyle || MAXIMIZED_LABEL_FONT_SIZE;
  const {
    activeColor,
    errorColor,
    inputTextColor,
    placeholderColor,
    outlineColor
  } = React.useMemo(() => {
    if (disabled) {
      const cc = color(colors.text).alpha(0.54).rgb().string();
      return {
        activeColor: cc,
        inputTextColor: cc,
        placeholderColor: colors.disabled,
        outlineColor: colors.disabled,
        errorColor: colors.error
      };
    }

    return {
      inputTextColor: colors.text,
      placeholderColor: colors.placeholder,
      outlineColor: colors.placeholder,
      errorColor: colors.error,
      activeColor: error ? colors.error : colors.primary
    };
  }, [colors.disabled, colors.error, colors.placeholder, colors.primary, colors.text, disabled, error]);
  const labelScale = MINIMIZED_LABEL_FONT_SIZE / fontSize;
  const fontScale = MAXIMIZED_LABEL_FONT_SIZE / fontSize;
  const labelWidth = parentState.labelLayout.width;
  const labelHeight = parentState.labelLayout.height;
  const labelHalfWidth = labelWidth / 2;
  const labelHalfHeight = labelHeight / 2;
  const baseLabelTranslateX = (I18nManager.isRTL ? 1 : -1) * (labelHalfWidth - labelScale * labelWidth / 2 - (fontSize - MINIMIZED_LABEL_FONT_SIZE) * labelScale);
  let labelTranslationXOffset = 0;
  const isAdornmentLeftIcon = adornmentConfig.some(({
    side,
    type
  }) => side === AdornmentSide.Left && type === AdornmentType.Icon);

  if (isAdornmentLeftIcon) {
    labelTranslationXOffset = (I18nManager.isRTL ? -1 : 1) * (ADORNMENT_SIZE + ADORNMENT_OFFSET - 8);
  }

  const minInputHeight = (dense ? MIN_DENSE_HEIGHT : MIN_HEIGHT) - LABEL_PADDING_TOP;
  const inputHeight = React.useMemo(() => calculateInputHeight(labelHeight, height, minInputHeight), [height, labelHeight, minInputHeight]);
  const topPosition = React.useMemo(() => calculateLabelTopPosition(labelHeight, inputHeight, LABEL_PADDING_TOP), [inputHeight, labelHeight]);

  if (height && typeof height !== 'number') {
    // eslint-disable-next-line
    console.warn('Currently we support only numbers in height prop');
  }

  const paddingSettings = React.useMemo(() => ({
    height: height ? +height : null,
    labelHalfHeight,
    offset: LABEL_PADDING_TOP,
    multiline: multiline ? multiline : null,
    dense: dense ? dense : null,
    topPosition,
    fontSize,
    label,
    scale: fontScale,
    isAndroid: Platform.OS === 'android',
    styles: StyleSheet.flatten(dense ? styles.inputOutlinedDense : styles.inputOutlined)
  }), [dense, fontScale, fontSize, height, label, labelHalfHeight, multiline, topPosition]);
  const pad = calculatePadding(paddingSettings);
  const paddingOut = React.useMemo(() => adjustPaddingOut(_objectSpread(_objectSpread({}, paddingSettings), {}, {
    pad
  })), [pad, paddingSettings]);
  const baseLabelTranslateY = -labelHalfHeight - (topPosition + OUTLINE_MINIMIZED_LABEL_Y_OFFSET);
  const placeholderOpacity = hasActiveOutline ? interpolatePlaceholder(parentState.labeled, hasActiveOutline) : parentState.labelLayout.measured ? 1 : 0;
  const labelProps = React.useMemo(() => ({
    label,
    onLayoutAnimatedText,
    placeholderOpacity,
    error,
    placeholderStyle: styles.placeholder,
    baseLabelTranslateY,
    baseLabelTranslateX,
    font,
    fontSize,
    fontWeight,
    labelScale,
    wiggleOffsetX: LABEL_WIGGLE_X_OFFSET,
    topPosition,
    hasActiveOutline,
    activeColor,
    placeholderColor,
    backgroundColor,
    errorColor,
    labelTranslationXOffset
  }), [activeColor, backgroundColor, baseLabelTranslateX, baseLabelTranslateY, error, errorColor, font, fontSize, fontWeight, hasActiveOutline, label, labelScale, labelTranslationXOffset, onLayoutAnimatedText, placeholderColor, placeholderOpacity, topPosition]);
  const minHeight = height || (dense ? MIN_DENSE_HEIGHT : MIN_HEIGHT);
  const {
    leftLayout,
    rightLayout
  } = parentState;
  const leftAffixTopPosition = calculateOutlinedIconAndAffixTopPosition({
    height: minHeight,
    affixHeight: leftLayout.height || 0,
    labelYOffset: -OUTLINE_MINIMIZED_LABEL_Y_OFFSET
  });
  const rightAffixTopPosition = calculateOutlinedIconAndAffixTopPosition({
    height: minHeight,
    affixHeight: rightLayout.height || 0,
    labelYOffset: -OUTLINE_MINIMIZED_LABEL_Y_OFFSET
  });
  const iconTopPosition = calculateOutlinedIconAndAffixTopPosition({
    height: minHeight,
    affixHeight: ADORNMENT_SIZE,
    labelYOffset: -OUTLINE_MINIMIZED_LABEL_Y_OFFSET
  });
  const rightAffixWidth = right ? rightLayout.width || ADORNMENT_SIZE : ADORNMENT_SIZE;
  const leftAffixWidth = left ? leftLayout.width || ADORNMENT_SIZE : ADORNMENT_SIZE;
  const adornmentStyleAdjustmentForNativeInput = React.useMemo(() => getAdornmentStyleAdjustmentForNativeInput({
    adornmentConfig,
    rightAffixWidth,
    leftAffixWidth,
    mode: 'outlined'
  }), [adornmentConfig, leftAffixWidth, rightAffixWidth]);
  const affixTopPosition = {
    [AdornmentSide.Left]: leftAffixTopPosition,
    [AdornmentSide.Right]: rightAffixTopPosition
  };
  const onAffixChange = {
    [AdornmentSide.Left]: onLeftAffixLayoutChange,
    [AdornmentSide.Right]: onRightAffixLayoutChange
  };
  let adornmentProps = {
    adornmentConfig,
    forceFocus,
    topPosition: {
      [AdornmentType.Icon]: iconTopPosition,
      [AdornmentType.Affix]: affixTopPosition
    },
    onAffixChange,
    isTextInputFocused: parentState.focused
  };

  if (adornmentConfig.length) {
    adornmentProps = _objectSpread(_objectSpread({}, adornmentProps), {}, {
      left,
      right,
      textStyle: _objectSpread(_objectSpread({}, font), {}, {
        fontSize,
        fontWeight
      }),
      visible: props.parentState.labeled
    });
  }

  const textInputStyle = React.useMemo(() => [styles.input, !multiline || multiline && height ? {
    height: inputHeight
  } : {}, paddingOut, _objectSpread(_objectSpread({}, font), {}, {
    fontSize,
    fontWeight,
    color: inputTextColor,
    textAlignVertical: multiline ? 'top' : 'center',
    textAlign: textAlign ? textAlign : I18nManager.isRTL ? 'right' : 'left'
  }), adornmentStyleAdjustmentForNativeInput], [adornmentStyleAdjustmentForNativeInput, font, fontSize, fontWeight, height, inputHeight, inputTextColor, multiline, paddingOut, textAlign]);
  return /*#__PURE__*/React.createElement(View, {
    style: viewStyle
  }, /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(Outline, {
    theme: theme,
    hasActiveOutline: hasActiveOutline,
    activeColor: activeColor,
    outlineColor: outlineColor,
    backgroundColor: backgroundColor
  }), /*#__PURE__*/React.createElement(View, {
    style: {
      paddingTop: LABEL_PADDING_TOP,
      paddingBottom: 0,
      minHeight
    }
  }, /*#__PURE__*/React.createElement(InputLabel, {
    parentState: parentState,
    labelProps: labelProps,
    labelBackground: LabelBackground
  }), render === null || render === void 0 ? void 0 : render(_objectSpread(_objectSpread({}, rest), {}, {
    ref: innerRef,
    onChangeText,
    placeholder: label ? parentState.placeholder : props.placeholder,
    placeholderTextColor: placeholderTextColor || placeholderColor,
    editable: !disabled && editable,
    selectionColor: typeof selectionColor === 'undefined' ? activeColor : selectionColor,
    onFocus,
    onBlur,
    underlineColorAndroid: 'transparent',
    multiline,
    style: textInputStyle
  }))), /*#__PURE__*/React.createElement(TextInputAdornment, adornmentProps)));
}

export default /*#__PURE__*/React.memo(TextInputOutlined);

const OutlinePure = ({
  theme,
  hasActiveOutline,
  activeColor,
  outlineColor,
  backgroundColor
}) => /*#__PURE__*/React.createElement(View, {
  pointerEvents: "none",
  style: [styles.outline, // eslint-disable-next-line react-native/no-inline-styles
  {
    backgroundColor,
    borderRadius: theme.roundness,
    borderWidth: hasActiveOutline ? 2 : 1,
    borderColor: hasActiveOutline ? activeColor : outlineColor
  }]
});

const Outline = /*#__PURE__*/React.memo(OutlinePure);
const styles = StyleSheet.create({
  placeholder: {
    position: 'absolute',
    left: 0,
    paddingHorizontal: INPUT_PADDING_HORIZONTAL
  },
  outline: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 6,
    bottom: 0
  },
  input: {
    flexGrow: 1,
    paddingHorizontal: INPUT_PADDING_HORIZONTAL,
    margin: 0,
    zIndex: 1
  },
  inputOutlined: {
    paddingTop: 8,
    paddingBottom: 8
  },
  inputOutlinedDense: {
    paddingTop: 4,
    paddingBottom: 4
  }
});
//# sourceMappingURL=TextInputOutlined.js.map