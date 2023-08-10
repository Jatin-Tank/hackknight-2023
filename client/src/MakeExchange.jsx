import { ChakraProvider, theme } from '@chakra-ui/react'
import React from 'react'
import Exchange from './cryptoComponents/Exchange'

const MakeExchange = () => {
  return (
    <ChakraProvider theme={theme}>
        <Exchange/>
    </ChakraProvider>
  )
}

export default MakeExchange