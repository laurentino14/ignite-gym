import {Button} from '@components/Button'
import {Input} from '@components/Input'
import {ScreenHeader} from '@components/ScreenHeader'
import {UserPhoto} from '@components/UserPhoto'
import * as ImagePicker from 'expo-image-picker'
import {Center, Heading, ScrollView, Skeleton, Text, VStack} from 'native-base'
import {useState} from 'react'
import {TouchableOpacity} from 'react-native'

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false)
  const [photo, setPhoto] = useState('https://github.com/laurentino14.png')

  async function handleUserPhotoSelect() {
    setPhotoIsLoading(true)
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      })

      if (photoSelected.canceled) return

      if (photoSelected.assets[0].uri) setPhoto(photoSelected.assets[0].uri)
    } catch (error) {
      console.log(error)
    } finally {
      setPhotoIsLoading(false)
    }
  }

  return (
    <VStack flex={1}>
      <ScreenHeader title='Perfil' />
      <ScrollView>
        <Center mt={6} px={10}>
          {photoIsLoading ? (
            <Skeleton
              w={33}
              h={33}
              rounded='full'
              startColor='gray.500'
              endColor='gray.400'
            />
          ) : (
            <UserPhoto size={33} source={{uri: photo}} alt='Foto do usuário' />
          )}

          <TouchableOpacity onPress={handleUserPhotoSelect}>
            <Text
              color='green.500'
              fontWeight='bold'
              fontSize='md'
              mt={2}
              mb={8}>
              Alterar foto
            </Text>
          </TouchableOpacity>

          <Input placeholder='Lucas Laurentino' bg='gray.600' />
          <Input placeholder='E-mail' bg='gray.600' isDisabled />
        </Center>

        <VStack px={10} mt={12} mb={9}>
          <Heading color='gray.200' fontSize='md' mb={2}>
            Alterar senha
          </Heading>
          <Input placeholder='Senha atual' bg='gray.600' secureTextEntry />
          <Input placeholder='Nova senha' bg='gray.600' secureTextEntry />
          <Input
            placeholder='Confirme a nova senha'
            bg='gray.600'
            secureTextEntry
          />
          <Button title='Atualizar' mt={4} />
        </VStack>
      </ScrollView>
    </VStack>
  )
}
