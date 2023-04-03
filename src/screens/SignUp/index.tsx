import {Center, Heading, Image, ScrollView, Text, VStack} from 'native-base'

import BgImg from '@assets/background.png'
import LogoSvg from '@assets/logo.svg'
import {Button} from '@components/Button'
import {Input} from '@components/Input'
import {useNavigation} from '@react-navigation/native'

export function SignUp() {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }
  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}>
      <VStack flex={1} px={10}>
        <Image
          defaultSource={BgImg}
          source={BgImg}
          alt='Pessoas treinando'
          resizeMode='contain'
          position='absolute'
        />
        <Center my={24}>
          <LogoSvg />
          <Text color='gray.100' fontSize='sm'>
            Treine sua mente e o seu corpo
          </Text>
        </Center>

        <Center>
          <Heading
            color='gray.100'
            mb={6}
            fontSize={'xl'}
            fontFamily={'heading'}>
            Crie sua conta
          </Heading>
          <Input placeholder='Nome' />
          <Input
            placeholder='E-mail'
            keyboardType='email-address'
            autoCapitalize='none'
          />
          <Input placeholder='Senha' secureTextEntry />
          <Button title='Criar e acessar' />
        </Center>
        <Button
          title='Voltar para o login'
          variant='outline'
          mt={24}
          onPress={handleGoBack}
        />
      </VStack>
    </ScrollView>
  )
}
