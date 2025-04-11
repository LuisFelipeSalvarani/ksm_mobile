/** biome-ignore-all lint/suspicious/noExplicitAny: <explanation> */
import { createContext, useContext, useEffect, useState } from 'react'
import {
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
  View,
  type ViewProps,
} from 'react-native'
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

import { colors } from '@/constants/theme'
import { s } from './styles'

type GroupButtonContextType<T> = {
  option: T
  setOption: (value: T) => void
}

const GroupButtonContext = createContext<
  GroupButtonContextType<any> | undefined
>(undefined)

type GroupButtonProps<T> = ViewProps & {
  value?: T
  defaultValue?: T
  onChange: (value: T) => void
}

function GroupButton<T extends string | number>({
  value,
  defaultValue,
  onChange,
  style,
  ...props
}: GroupButtonProps<T>) {
  const isControlled = value !== undefined
  const [internalValue, setInternalValue] = useState<T | undefined>(undefined)

  const option = isControlled ? value! : internalValue!
  const setOption = (val: T) => {
    if (!isControlled) setInternalValue(val)
    onChange?.(val)
  }

  return (
    <GroupButtonContext.Provider value={{ option, setOption }}>
      <View style={[s.container, style]} {...props} />
    </GroupButtonContext.Provider>
  )
}

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity)
const AnimatedText = Animated.createAnimatedComponent(Text)

type GroupButtonTriggerProps<T> = TouchableOpacityProps & {
  value: T
  children?: React.ReactNode
}

function GroupButtonTrigger<T extends string | number>({
  value,
  children,
  style,
  ...props
}: GroupButtonTriggerProps<T>) {
  const context = useContext(GroupButtonContext) as GroupButtonContextType<T>

  if (!context) {
    throw new Error('GroupButtonTrigger must be used within a GroupButton')
  }

  const { option, setOption } = context
  const selected = option === value

  const animationValue = useSharedValue(selected ? 1 : 0)

  useEffect(() => {
    animationValue.value = withTiming(selected ? 1 : 0, { duration: 200 })
  }, [selected])

  const animatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      animationValue.value,
      [0, 1],
      ['transparent', colors.blue[600]]
    )
    return { backgroundColor }
  })

  const animatedTextStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      animationValue.value,
      [0, 1],
      [colors.zinc[700], colors.zinc[50]]
    )
    return { color }
  })

  return (
    <AnimatedTouchable
      style={[s.button, style, animatedStyle]}
      onPress={() => setOption(value)}
      {...props}
    >
      <AnimatedText style={[s.text, animatedTextStyle]}>
        {children ?? String(value)}
      </AnimatedText>
    </AnimatedTouchable>
  )
}

GroupButton.Trigger = GroupButtonTrigger

export { GroupButton }
