import * as React from 'react';
import { StyleSheet, Text, Platform, ViewProps, Role } from 'react-native';

import { black } from '../styles/themes/v2/colors';

export type IconProps = {
  name: string;
  color?: string;
  size: number;
  direction: 'rtl' | 'ltr';
  allowFontScaling?: boolean;
  testID?: string;
};

type AccessibilityProps =
  | {
      role?: Role;
      focusable?: boolean;
    }
  | {
      accessibilityElementsHidden?: boolean;
      importantForAccessibility?: 'auto' | 'yes' | 'no' | 'no-hide-descendants';
    };

let MaterialCommunityIcons: React.ComponentType<
  React.ComponentProps<any> = ({ name, color, size, ...rest }) => {
  return (
    <Text
      {...rest}
      style={[styles.icon, { color, fontSize: size }]}
      // @ts-expect-error: Text doesn't support this, but it seems to affect TouchableNativeFeedback
      pointerEvents="none"
      selectable={false}
    >
      □
    </Text>
  );
};

export const accessibilityProps: AccessibilityProps =
  Platform.OS === 'web'
    ? {
        role: 'img',
        focusable: false,
      }
    : {
        accessibilityElementsHidden: true,
        importantForAccessibility:
          'no-hide-descendants' as 'no-hide-descendants',
      };

const defaultIcon = ({
  name,
  color = black,
  size,
  direction,
  allowFontScaling,
  testID,
}: IconProps) => (
  <MaterialCommunityIcons
    allowFontScaling={allowFontScaling}
    name={name}
    color={color}
    size={size}
    style={[
      {
        transform: [{ scaleX: direction === 'rtl' ? -1 : 1 }],
        lineHeight: size,
      },
      styles.icon,
    ]}
    pointerEvents="none"
    selectable={false}
    testID={testID}
    {...accessibilityProps}
  />
);

const styles = StyleSheet.create({
  // eslint-disable-next-line react-native/no-color-literals
  icon: {
    backgroundColor: 'transparent',
  },
});

export default defaultIcon;
