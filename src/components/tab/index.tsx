import type { Href } from 'expo-router'
import { TabList, TabSlot, Tabs, TabTrigger } from 'expo-router/ui'
import { ScrollView, Text } from 'react-native'

import { TabButton } from '@/components/tab/tab-button'
import { s } from './styles'

export type TabProps = {
  tabs: TabsData[]
}

export type TabsData = {
  name: string
  href: Href
  label: string
}

export function Tab({ tabs }: TabProps) {
  return (
    <Tabs>
      <TabList style={{ display: 'none' }}>
        {tabs.map(tab => {
          return (
            <TabTrigger key={tab.name} name={tab.name} href={tab.href}>
              <Text>{tab.label}</Text>
            </TabTrigger>
          )
        })}
      </TabList>

      <ScrollView
        style={s.container}
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        {tabs.map(tab => {
          return (
            <TabTrigger key={tab.name} name={tab.name} asChild>
              <TabButton>{tab.label}</TabButton>
            </TabTrigger>
          )
        })}
      </ScrollView>

      <TabSlot />
    </Tabs>
  )
}
