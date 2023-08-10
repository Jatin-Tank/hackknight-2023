import { ChakraProvider, theme } from '@chakra-ui/react'
import React from 'react'
import Coins from './cryptoComponents/Coins'

const MakeCoin = () => {
  return (
    <>
        <ChakraProvider theme={theme}>
            <Coins/>
        </ChakraProvider>
    </>
  )
}

export default MakeCoin