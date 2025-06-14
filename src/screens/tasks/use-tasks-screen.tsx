import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  IconCheck,
  IconPlus,
  IconTrash,
  IconX,
} from '@tabler/icons-react-native'
import React, { useEffect, useState } from 'react'
import {
  FlatList,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native'
import { Header } from '@/components/header'
import { colors } from '@/constants/theme'
import { s } from './styles'

interface Todo {
  id: string
  text: string
  completedAt?: string
}

const STORAGE_KEY = '@todos'
export function UseTasksScreen() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [input, setInput] = useState('')

  useEffect(() => {
    ;(async () => {
      try {
        const json = await AsyncStorage.getItem(STORAGE_KEY)
        if (json) setTodos(JSON.parse(json))
      } catch (e) {
        console.error('failed to load todos', e)
      }
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
      } catch (e) {
        console.error('failed to save todos', e)
      }
    })()
  }, [todos])

  const handleAdd = () => {
    const trimmed = input.trim()
    if (!trimmed) return
    setTodos(prev => [...prev, { id: Date.now().toString(), text: trimmed }])
    setInput('')
  }

  const handleRemove = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const handleComplete = (id: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id
          ? { ...todo, completedAt: new Date().toISOString() }
          : todo
      )
    )
  }

  const renderItem = ({ item }: { item: Todo }) => {
    const done = !!item.completedAt
    return (
      <View style={[s.item, done && s.itemDone]}>
        <Text style={[s.itemText, done && s.textDone]}>{item.text}</Text>
        <View style={s.buttons}>
          {done ? (
            <Text style={s.date}>
              Concluído em: {new Date(item.completedAt!).toLocaleDateString()}
            </Text>
          ) : (
            <Pressable
              onPress={() => handleComplete(item.id)}
              style={s.complete}
              testID="conclusion"
            >
              <IconCheck size={24} color="#4CD964" />
            </Pressable>
          )}
          <Pressable
            onPress={() => handleRemove(item.id)}
            style={s.delete}
            testID="delete"
          >
            <IconTrash size={24} color="#FF3B30" />
          </Pressable>
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={s.container}>
      <Header title="Tarefas" />

      <View style={s.inputContainer}>
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Nova tarefa"
          style={s.input}
          onSubmitEditing={handleAdd}
          returnKeyType="done"
        />
        <Pressable onPress={handleAdd} testID="addTask" style={s.addButton}>
          <IconPlus size={24} color={colors.zinc[50]} />
        </Pressable>
      </View>

      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={s.list}
      />
    </SafeAreaView>
  )
}
