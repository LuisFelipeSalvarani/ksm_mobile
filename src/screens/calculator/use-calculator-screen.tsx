/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
import { evaluate } from 'mathjs'
import { useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import { s } from './styles'

const buttons = [
  ['C', '/', '*', '←'],
  ['7', '8', '9', '-'],
  ['4', '5', '6', '+'],
  ['1', '2', '3', '.'],
  ['0', '='],
]

export function UseCalculatorScreen() {
  const [expr, setExpr] = useState('')
  const [res, setRes] = useState('')

  const onPress = (label: string) => {
    if (label === 'C') {
      setExpr('')
      setRes('')
      return
    }
    if (label === '←') return setExpr(prev => prev.slice(0, -1))
    if (label === '=') {
      try {
        const val = evaluate(expr)
        return setRes(val.toString())
      } catch {
        return setRes('Erro')
      }
    }
    setExpr(prev => prev + label)
  }

  return (
    <View style={s.container}>
      <Text style={s.expr}>{expr || '0'}</Text>
      <Text style={s.res}>{res}</Text>
      {buttons.map((row, i) => (
        <View style={s.row} key={i}>
          {row.map(label => (
            <Pressable
              key={label}
              onPress={() => onPress(label)}
              style={[s.btn, label === '=' && s.equals]}
            >
              <Text style={s.txt}>{label}</Text>
            </Pressable>
          ))}
        </View>
      ))}
    </View>
  )
}
