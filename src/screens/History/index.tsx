import {HistoryCard} from '@components/HistoryCard'
import {ScreenHeader} from '@components/ScreenHeader'
import {Heading, SectionList, VStack} from 'native-base'
import {useState} from 'react'
import {} from 'react-native'

export function History() {
  const [exercises, setExercises] = useState([
    {
      title: '01.04.22',
      data: ['Puxada frontal', 'Remada Unilateral', 'Agachamento'],
    },
    {
      title: '02.04.22',
      data: ['Remada Unilateral', 'Agachamento'],
    },
    {
      title: '31.03.22',
      data: ['Remada Unilateral', 'Agachamento'],
    },
  ])
  return (
    <VStack flex={1}>
      <ScreenHeader title='Histórico de Exercícios' />

      <SectionList
        showsVerticalScrollIndicator={false}
        sections={exercises}
        keyExtractor={item => item}
        renderItem={({item}) => <HistoryCard />}
        renderSectionHeader={({section: {title}}) => (
          <Heading color='gray.200' fontSize='md' mt={10} mb={3}>
            {title}
          </Heading>
        )}
        contentContainerStyle={
          exercises.length === 0 && {flex: 1, justifyContent: 'center'}
        }
        ListEmptyComponent={() => (
          <Heading
            color='gray.100'
            fontSize='md'
            textAlign='center'
            mt={10}
            mb={3}>
            Nenhum exercício realizado ainda.{'\n'}
            Vamos fazer exercícios hoje?
          </Heading>
        )}
        px={8}
      />
    </VStack>
  )
}
