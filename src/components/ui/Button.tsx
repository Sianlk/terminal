// Button Component — Terminal AI
import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, StyleSheet, ViewStyle, TextStyle, View } from 'react-native';
import Colors from '../../theme/colors';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'ai';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  label: string;
  onPress: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  style?: ViewStyle;
  labelStyle?: TextStyle;
}

export const Button: React.FC<ButtonProps> = ({
  label, onPress, variant='primary', size='md',
  loading=false, disabled=false, fullWidth=false, leftIcon, style, labelStyle
}) => {
  const isDisabled = disabled || loading;
  return (
    <TouchableOpacity
      onPress={onPress} disabled={isDisabled} activeOpacity={0.8}
      style={[styles.base, styles['sz_'+size], styles['v_'+variant], fullWidth && styles.fw, isDisabled && styles.dis, style]}
      accessibilityRole="button" accessibilityLabel={label}
    >
      {loading
        ? <ActivityIndicator color="#fff" size="small" />
        : <View style={styles.row}>
            {leftIcon && <View style={styles.il}>{leftIcon}</View>}
            <Text style={[styles.lbl, styles['lv_'+variant], styles['ls_'+size], labelStyle]}>{label}</Text>
          </View>
      }
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  base: { borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  row:  { flexDirection: 'row', alignItems: 'center' },
  il:   { marginRight: 8 },
  fw:   { width: '100%' },
  dis:  { opacity: 0.5 },
  sz_sm: { paddingHorizontal: 12, paddingVertical: 8, borderRadius: 8 },
  sz_md: { paddingHorizontal: 20, paddingVertical: 14 },
  sz_lg: { paddingHorizontal: 28, paddingVertical: 18, borderRadius: 16 },
  v_primary:   { backgroundColor: '#059669' },
  v_secondary: { backgroundColor: '#10B98133' },
  v_outline:   { backgroundColor: 'transparent', borderWidth: 1.5, borderColor: '#059669' },
  v_ghost:     { backgroundColor: 'transparent' },
  v_danger:    { backgroundColor: '#EF4444' },
  v_ai:        { backgroundColor: '#047857', borderWidth: 1, borderColor: '#10B981' },
  lbl:    { fontSize: 14, fontWeight: '600' },
  lv_primary:   { color: '#FFFFFF' },
  lv_secondary: { color: '#047857' },
  lv_outline:   { color: '#059669' },
  lv_ghost:     { color: '#059669' },
  lv_danger:    { color: '#FFFFFF' },
  lv_ai:        { color: '#FFFFFF' },
  ls_sm: { fontSize: 13 },
  ls_md: { fontSize: 15 },
  ls_lg: { fontSize: 17 },
});

// alias
const styles = s;

export default Button;
