import type { TabTriggerSlotProps } from 'expo-router/ui'
import { forwardRef, type Ref } from 'react'
import { Pressable, Text, type View } from 'react-native'

import { colors } from '@/constants/theme'
import { s } from './styles'

type TabButtonProps = TabTriggerSlotProps & {}

export const TabButton = forwardRef(
  ({ children, isFocused, ...props }: TabButtonProps, ref: Ref<View>) => {
    return (
      <Pressable
        ref={ref}
        {...props}
        style={[
          s.container,
          isFocused
            ? { backgroundColor: colors.blue[600] }
            : { backgroundColor: colors.zinc[100] },
        ]}
      >
        <Text
          style={[
            s.label,
            isFocused
              ? { color: colors.zinc[50] }
              : { color: colors.zinc[800] },
          ]}
        >
          {children}
        </Text>
      </Pressable>
    )
  }
)
