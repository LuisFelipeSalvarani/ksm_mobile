import { evaluate } from 'mathjs'
import React, { useState } from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { Header } from '@/components/header'
import { s } from './styles'

// Teclado custom (números e operações básicas)
const buttons = [
  ['C', '←', '.'],
  ['7', '8', '9'],
  ['4', '5', '6'],
  ['1', '2', '3'],
  ['0', '='],
] as const

type CalcType = 'contrib' | 'profit'

type Field = 'price' | 'cost'

export function UseCalculatorScreen() {
  const [activeCalc, setActiveCalc] = useState<CalcType>('contrib')
  const [activeField, setActiveField] = useState<Field>('price')

  const [price, setPrice] = useState('')
  const [cost, setCost] = useState('')
  const [resultLabel, setResultLabel] = useState('Margem de Contribuição:')
  const [result, setResult] = useState<string | null>(null)

  const onKeyPress = (label: string) => {
    const getter = activeField === 'price' ? price : cost
    const updater = activeField === 'price' ? setPrice : setCost

    if (label === 'C') {
      updater('')
      return
    }
    if (label === '←') {
      updater(getter.slice(0, -1))
      return
    }
    if (label === '=') {
      runCalculation()
      return
    }

    if (!/[0-9.]/.test(label)) return
    updater(getter + label)
  }

  const runCalculation = () => {
    const p = Number.parseFloat(price)
    const c = Number.parseFloat(cost)
    if (!p || Number.isNaN(c)) {
      setResult('Erro: valores inválidos')
      return
    }

    let val: number
    if (activeCalc === 'contrib') {
      val = p - c
    } else {
      val = p - c
    }
    const pct = (val / p) * 100
    setResult(`${val.toFixed(2)} (${pct.toFixed(2)}%)`)
  }

  const changeCalc = (option: 'contrib' | 'profit') => {
    setActiveCalc(option)
    setResult('')
    const label =
      activeCalc === 'profit' ? 'Margem de Contribuição' : 'Margem de Lucro'
    setResultLabel(`${label}:`)
  }

  const costLabel = activeCalc === 'contrib' ? 'Custo Variável' : 'Custo Total'

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#fff' }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Header title="Calculadora de Margens" />
      <ScrollView
        contentContainerStyle={s.container}
        keyboardShouldPersistTaps="handled"
      >
        <View style={s.selectorRow}>
          <Pressable
            style={[
              s.selectorBtn,
              activeCalc === 'contrib' && s.selectorActive,
            ]}
            onPress={() => changeCalc('contrib')}
          >
            <Text style={activeCalc === 'contrib' ? s.selTxtActive : s.selTxt}>
              Contribuição
            </Text>
          </Pressable>
          <Pressable
            style={[s.selectorBtn, activeCalc === 'profit' && s.selectorActive]}
            onPress={() => changeCalc('profit')}
          >
            <Text style={activeCalc === 'profit' ? s.selTxtActive : s.selTxt}>
              Lucro
            </Text>
          </Pressable>
        </View>

        <View style={s.fields}>
          <Pressable
            style={[s.fieldBox, activeField === 'price' && s.fieldActive]}
            onPress={() => setActiveField('price')}
          >
            <Text style={s.fieldLabel}>Preço de Venda</Text>
            <Text style={s.fieldValue}>{price || '—'}</Text>
          </Pressable>
          <Pressable
            style={[s.fieldBox, activeField === 'cost' && s.fieldActive]}
            onPress={() => setActiveField('cost')}
          >
            <Text style={s.fieldLabel}>{costLabel}</Text>
            <Text style={s.fieldValue}>{cost || '—'}</Text>
          </Pressable>
        </View>

        <View style={s.resultBox}>
          <Text style={s.resultLabel}>{resultLabel}</Text>
          {result && <Text style={s.resultTxt}>{result}</Text>}
        </View>
      </ScrollView>

      <View style={s.keypad}>
        {buttons.map((row, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <View style={s.row} key={i}>
            {row.map(label => (
              <Pressable
                key={label}
                onPress={() => onKeyPress(label)}
                style={[s.keyBtn, label === '=' && s.keyEquals]}
              >
                <Text style={s.keyTxt}>{label}</Text>
              </Pressable>
            ))}
          </View>
        ))}
      </View>
    </KeyboardAvoidingView>
  )
}
