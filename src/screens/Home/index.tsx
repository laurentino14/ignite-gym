import {ExerciseCard} from '@components/ExerciseCard'
import {Group} from '@components/Group'
import {HomeHeader} from '@components/HomeHeader'
import {FlatList, HStack, Heading, Text, VStack} from 'native-base'
import {useState} from 'react'

export function Home() {
  const [groups, setGroups] = useState(['costa', 'ombro', 'bíceps', 'tríceps'])
  const [exercises, setExercises] = useState([
    'Puxada frontal',
    'Remada curvada',
    'Remada unilateral',
    'Levantamento terra',
  ])
  const [groupSelected, setGroupSelected] = useState('costa')

  return (
    <VStack flex={1}>
      <HomeHeader />
      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Group
            name={item}
            isActive={groupSelected.toUpperCase() === item.toUpperCase()}
            onPress={() => setGroupSelected(item)}
          />
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
        _contentContainerStyle={{px: 8}}
        my={10}
        maxH={10}
      />

      <VStack flex={1} px={8}>
        <HStack justifyContent='space-between' mb={5}>
          <Heading color='gray.200' fontSize='md'>
            Exercícios
          </Heading>
          <Text color='gray.200' fontSize='sm'>
            {exercises.length}
          </Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={exercises => exercises}
          renderItem={({item}) => <ExerciseCard />}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{pb: 20}}
        />
      </VStack>
    </VStack>
  )
}
