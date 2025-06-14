import { BaseToast, type ToastConfig } from 'react-native-toast-message'
import { colors, fontFamily } from '@/constants/theme'

export const toastConfig: ToastConfig = {
  success: props => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: 'green' }}
      contentContainerStyle={{ backgroundColor: colors.zinc[100] }}
    />
  ),
  error: props => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: 'red' }}
      contentContainerStyle={{ backgroundColor: 'red' }}
      text1Style={{
        fontSize: 14,
        fontFamily: fontFamily.semiBold,
        color: colors.zinc[100],
      }}
    />
  ),
}
