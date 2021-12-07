import React, { useState, useEffect } from 'react'
import './Popup.css'
import { Heading, Box, HStack, Spinner, Center, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import StonkInformation from '../../components/StonkInformation'
import ThemeToggleButton from '../../components/ThemeToggleButton'
import SearchBar from '../../components/SearchBar'

const Popup = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [stonk, setStonk] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (searchTerm === '') return
    setIsLoading(true)
    fetch(`http://localhost:3000/api/v1/stonks/external/${searchTerm}`)
      .then(res => res.json())
      .then(data => {
        setStonk(data[0])
        setIsLoading(false)
      })
  }, [searchTerm])

  return (
    <Box height='full'>
        <HStack justifyContent='space-between' m={2}>
          <Heading as='h1'>ESG Stonks</Heading>
          <ThemeToggleButton/>
        </HStack>
        <Box mx={2}>
          <SearchBar mt={2} mb={4} setSearchTerm={setSearchTerm} />
        </Box>
        {/* fallback if there is no stonk from search result */}
        {isLoading ? (
          <Center>
            <Spinner size='xl' thickness='4px' /> 
          </Center>
        ) : stonk && <StonkInformation stonk={stonk} />}
        <Center>
          <Link href='http://localhost:3000' isExternal>
            Go to site <ExternalLinkIcon />
          </Link>
        </Center>
        
    </Box>
  )
}

export default Popup

/*
.App {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  text-align: center;
  height: 100%;
  padding: 10px;
  background-color: #282c34;
}

.App-logo {
  height: 30vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

*/
