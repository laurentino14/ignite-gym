import {IInputProps, Input as InputNB} from 'native-base'

export function Input({...rest}: IInputProps) {
  return (
    <InputNB
      bg='gray.700'
      h={14}
      px={4}
      borderWidth={0}
      fontSize='md'
      color='white'
      mb={4}
      fontFamily={'body'}
      placeholderTextColor='gray.300'
      _focus={{bg: 'gray.700', borderWidth: 1, borderColor: 'green.500'}}
      {...rest}
    />
  )
}
