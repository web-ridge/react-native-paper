export const handlePress = ({
  onPress,
  value,
  onValueChange,
  event
}) => {
  onValueChange ? onValueChange(value) : onPress === null || onPress === void 0 ? void 0 : onPress(event);
};
export const isChecked = ({
  value,
  status,
  contextValue
}) => {
  if (contextValue !== undefined && contextValue !== null) {
    return contextValue === value ? 'checked' : 'unchecked';
  } else {
    return status;
  }
};
//# sourceMappingURL=utils.js.map