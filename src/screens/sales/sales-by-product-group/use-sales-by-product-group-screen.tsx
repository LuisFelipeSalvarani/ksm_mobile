import { Text, View } from 'react-native'
import { Pie, PolarChart } from 'victory-native'

import { Loading } from '@/components/loading'
import { colors } from '@/constants/theme'
import { Caption, type CaptionData } from '../components/caption'
import { s } from './styles'

type UseSalesByProductGroupScreenProps = {
  salesByProductGroup: {
    label: string
    value: number
    color: string
  }[]
  captions: CaptionData[]
  total: number
}

const UseSalesByProductGroupScreen = ({
  salesByProductGroup,
  captions,
  total,
}: UseSalesByProductGroupScreenProps) => {
  return (
    <View style={s.container}>
      <View style={s.chartContainer}>
        <Text style={s.title}>Vendas por grupo de produtos:</Text>

        <View style={s.chartWrapper}>
          <View style={s.chart}>
            <PolarChart
              data={salesByProductGroup}
              labelKey={'label'}
              valueKey={'value'}
              colorKey={'color'}
            >
              <Pie.Chart innerRadius={'60%'}>
                {() => (
                  <>
                    <Pie.Slice animate={{ type: 'spring' }} />
                    <Pie.SliceAngularInset
                      animate={{ type: 'spring' }}
                      angularInset={{
                        angularStrokeColor: colors.white,
                        angularStrokeWidth: 5,
                      }}
                    />
                  </>
                )}
              </Pie.Chart>
            </PolarChart>
          </View>
          <Text style={s.caption}>Total: {total}</Text>
        </View>

        {captions ? <Caption data={captions} /> : <Loading />}
      </View>
    </View>
  )
}

export { UseSalesByProductGroupScreen }
