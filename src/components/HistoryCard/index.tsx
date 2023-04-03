import {HStack, Heading, Text, VStack} from 'native-base'

export function HistoryCard() {
  return (
    <HStack
      w='full'
      px={5}
      mb={3}
      py={4}
      bg='gray.600'
      alignItems='center'
      justifyContent='space-between'
      rounded='md'>
      <VStack mr={5} flex={1}>
        <Heading
          color='white'
          fontSize='md'
          textTransform='capitalize'
          numberOfLines={1}>
          Costas
        </Heading>
        <Text color='gray.100' fontSize='lg' numberOfLines={1}>
          Puxada frontal
        </Text>
      </VStack>
      <Text color='gray.300' fontSize='md'>
        08:56
      </Text>
    </HStack>
  )
}
