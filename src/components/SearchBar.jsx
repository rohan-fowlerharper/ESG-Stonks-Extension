import React, { useState, useEffect } from 'react'
import { HStack, Input, InputGroup, InputLeftElement, Button } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const SearchBar = ({ setSearchTerm, ...rest }) => {

  const [value, setValue] = useState('')

  function handleSubmit (evt) {
    evt.preventDefault()
    if (value !== '') {
      setSearchTerm(value)
      setValue('')
    } else {
      console.log('empty')
    }
  }

  return (
    <HStack {...rest}>
      <InputGroup>
        <InputLeftElement 
          pointerEvents="none"
          children={<SearchIcon color='gray.400'/>}
        />
        <Input placeholder='Symbol... (e.g. AAPL)'  onChange={evt => setValue(evt.target.value)} value={value} />
      </InputGroup>
      <Button onClick={handleSubmit}>
        Go
      </Button>
    </HStack>
  )
}

export default SearchBar
