import {Entypo} from '@expo/vector-icons'
import {HStack, Heading, Icon, Image, Text, VStack} from 'native-base'
import {TouchableOpacity, TouchableOpacityProps} from 'react-native'

type Props = TouchableOpacityProps & {}
export function ExerciseCard({...rest}: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        bg='gray.500'
        alignItems='center'
        p='2'
        pr='4'
        mb='3'
        rounded='md'>
        <Image
          source={{
            uri: 'https://conteudo.omronbrasil.com/wp-content/uploads/2020/08/post_thumbnail-ad0f2e32380d386a42b328e0ea1dfd5d-780x450.jpeg',
          }}
          alt='Imagem do exercício'
          w={16}
          h={16}
          rounded='md'
          mr={4}
          resizeMode='center'
        />
        <VStack flex={1}>
          <Heading fontSize='lg' color='white'>
            Agachamento
          </Heading>

          <Text color='gray.200' fontSize='sm' mt={1} numberOfLines={2}>
            3 séries x 12 repetições
          </Text>
        </VStack>

        <Icon
          as={Entypo}
          name='chevron-thin-right'
          color='gray.300'
          ml='auto'
        />
      </HStack>
    </TouchableOpacity>
  )
}
