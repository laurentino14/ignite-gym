import BodySvg from '@assets/body.svg'
import {Feather} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'
import {AppNavigatorRoutesProps} from '@routes/app.routes'
import {
  Box,
  HStack,
  Heading,
  Icon,
  Image,
  ScrollView,
  Text,
  VStack,
} from 'native-base'
import {TouchableOpacity} from 'react-native'

import RepetitionsSvg from '@assets/repetitions.svg'
import SeriesSvg from '@assets/series.svg'
import {Button} from '@components/Button'

export function Exercise() {
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  function handleGoBack() {
    navigation.goBack()
  }
  return (
    <VStack flex={1}>
      <VStack px={8} bg='gray.600' pt={12}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={Feather} name='arrow-left' color='green.500' size={6} />
        </TouchableOpacity>
        <HStack
          justifyContent='space-between'
          mt={4}
          mb={8}
          alignItems='center'>
          <Heading color='gray.100' fontSize='lg' flexShrink={1}>
            Puxada frontal
          </Heading>
          <HStack alignItems='center'>
            <BodySvg />
            <Text color='gray.200' ml={1} textTransform='capitalize'>
              Costas
            </Text>
          </HStack>
        </HStack>
      </VStack>
      <ScrollView>
        <VStack p={8}>
          <Image
            w='full'
            h={80}
            source={{
              uri: 'https://conteudo.omronbrasil.com/wp-content/uploads/2020/08/post_thumbnail-ad0f2e32380d386a42b328e0ea1dfd5d-780x450.jpeg',
            }}
            mb={3}
            alt='Nome do exercício'
            resizeMode='cover'
            rounded='lg'
            overflow='hidden'
          />

          <Box bg='gray.600' rounded='md' pb={4} px={4}>
            <HStack
              alignItems='center'
              justifyContent='space-around'
              mb={6}
              mt={5}>
              <HStack>
                <SeriesSvg />
                <Text color='gray.200' ml={2}>
                  3 séries
                </Text>
              </HStack>
              <HStack>
                <RepetitionsSvg />
                <Text color='gray.200' ml={2}>
                  12 repetições
                </Text>
              </HStack>
            </HStack>
            <Button title='Marcar como realizado' />
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  )
}
