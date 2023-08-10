import { VStack ,Image,Heading,Text} from '@chakra-ui/react';
import React from 'react'
import {Link} from "react-router-dom"


const CoinCard = (props) =>
(
  <Link to={`/coins/${props.id}`}>
  <VStack width={60} shadow={"lg"} p={"8"} borderRadius={"lg"} transition={"all 0.3s"} m={"4"} 
  css={{
    "&:hover":{
      transform:"scale(1.1)",
    }
  }}>
    <Image src={props.img} w={"10"} h={"10"} objectFit={"contain"}/>
    <Heading size={"md"} noOfLines={1}>{props.symbol}</Heading>
    <Text noOfLines={1}>{props.name}</Text>
    <Text noOfLines={1}>{props.price? `${props.currencySymbol}${props.price}` :"NA"}</Text>

  </VStack>
  </Link>
);

export default CoinCard