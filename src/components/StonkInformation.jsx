import React from 'react'
import {
  Box,
  Center,
  Image,
  useColorModeValue,
  Flex,
  Heading,
  HStack,
  Text
} from '@chakra-ui/react'

import RatingBar from './RatingBar'
import Rating from './Rating'
// CheckIcon and CloseIcon

// const stonk = {
//   id: 1,
//   esg_id: 11119,
//   company_name: 'Apple Inc.',
//   exchange_symbol: 'TSE',
//   stock_symbol: 'AAPL',
//   environment_grade: 'AA',
//   environment_level: 'Excellent',
//   social_grade: 'BB',
//   socialLevel: 'Medium',
//   governance_grade: 'BB',
//   governance_level: 'Medium',
//   total_grade: 'A',
//   total_level: 'High',
//   lastProcessingDate: '04-11-2021',
//   environment_score: 671,
//   social_score: 341,
//   governance_score: 300,
//   total_score: 1312
// }

function StonkInformationPopup ({ stonk }) {
  console.log(stonk)
  console.log(stonk.stock_symbol)
  const grayResponsive = useColorModeValue('gray.600', 'gray.400')

  const image = stonk.stock_symbol && `https://s3.polygon.io/logos/${stonk.stock_symbol.toLowerCase()}/logo.png`

  return (
    <Box
      role='company'
      bg={useColorModeValue('white', 'gray.800')}
      w='full'
    >
      <Box
        h={36}
        bg='white'
      >
        <Center w='full' h='full'>
          <Image
            rounded={'sm'}
            maxHeight='full'
            width='auto'
            src={image}
            alt={stonk.stock_symbol}
          />
        </Center>
      </Box>
      <Box p={2}>
        <Heading
          as='h4'
          fontSize={'lg'}
          fontWeight='bold'
          lineHeight='tight'
        >
          {stonk.company_name}
        </Heading>
        <Flex mb={2} justifyContent='space-between'>
          <HStack justifyContent='flex-start' spacing={1} color={grayResponsive}>
            <Heading
              as='h5'
              fontSize={'md'}
              fontWeight='semibold'
              lineHeight='tight'
            >
              {stonk.stock_symbol}
            </Heading>
            <Text>|</Text>
            <Heading
              as='h5'
              fontSize={'md'}
              fontWeight='semibold'
              lineHeight='tight'
            >
              {stonk.exchange_symbol}
            </Heading>
          </HStack>
          {/* Convert ActiveStonkButton to an add to collection button */}
        </Flex>
        <Rating 
          rating={stonk.total_grade}
          label='Overall'
        />
        <RatingBar 
          rating={stonk.total} 
          max={3000} 
          mb={4} 
        />

        <Rating 
          rating={stonk.environment_grade}
          label='Environment'
        />
        <RatingBar 
          rating={stonk.environment_score} 
          max={1000} 
          mb={2} 
        />

        <Rating 
          rating={stonk.social_grade}
          label='Social'
        />
        <RatingBar 
          rating={stonk.social_score}
          max={1000} 
          mb={2}
        />

        <Rating 
          rating={stonk.governance_grade}
          label='Governance'
        />
        <RatingBar 
          rating={stonk.governance_score} 
          max={1000} 
          mb={2} 
        />
      </Box>
      {/* TODO: rating bar for each score */}
    </Box>
  )
}

export default StonkInformationPopup
