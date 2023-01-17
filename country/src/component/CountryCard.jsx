import { Button, Image, Text, useDisclosure, VStack } from '@chakra-ui/react'
import React from 'react'
import style from "./CountryCard.module.css"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

function CountryCard({img,name,capital,population,continent, nativename,subregion,currency,language,border}) {
    // console.log("edscasv", nativename,subregion,currency,language,border)
    const { isOpen, onOpen, onClose } = useDisclosure()

    function Onclick(){

    }

  return (
    <div>
        
<VStack className={style.vstack}>

<Image src={img} className={style.img} alt="country"/>
<Text className={style.name} >{name}</Text>
<Text>Population:-{population}</Text>
<Text>Region:-{continent}</Text>
<Text>Capital:-{capital}</Text>


<Button onClick={onOpen}>More Details</Button>

  <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
       

<Text>{nativename}</Text>
<Text>{subregion}</Text>
<Text>{currency}</Text>
<Text>{language}</Text>
<Text>{border}</Text>



          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
           
          </ModalFooter>
        </ModalContent>
      </Modal>
      </VStack>
    </div>
  )
}

export default CountryCard