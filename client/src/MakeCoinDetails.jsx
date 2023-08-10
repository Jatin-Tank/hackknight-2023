import { ChakraProvider, theme } from '@chakra-ui/react'
import React from 'react'
import CoinDetails from './cryptoComponents/CoinDetails'

const MakeCoinDetails = () => {
  return (
    <ChakraProvider theme={theme}>
        <CoinDetails/>
    </ChakraProvider>
  )
}

export default MakeCoinDetails