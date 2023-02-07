import { Box, Flex, HStack, Icon, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { ImLocation, ImSearch } from "react-icons/im";
import style from "./style.module.css"


const Search = () => {
    const [location, setLocation] = useState([]);
    const [text, setText] = useState("")
    const [city, setCity] = useState([])

    useEffect(() => {
        getLocation();
    }, [])

    const getLocation = () => {
        fetch("https://ipinfo.io/json?token=db6d7228bf661a")
            .then(res => res.json())
            .then(res => setLocation(res))
    }
    const searchLocation = (text) => {
        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${text}&cnt=5&appid=9fd53c959b42bbce7645a5188edb5103`)
            .then(res => res.json())
    }

    const getCity = async (q) => {
        const url = `https://venomous-plough-7848.vercel.app/api/search/stays?q=${q}`;
        let res = await fetch(url);
        res = await res.json();
        console.log(res, city)
        setCity(res.sr);
    }
    const doubleFunct = (e) => {
        e.preventDefault();
        setText(e.target.value);
        if (text.length >= 2) {
            getCity(text)
        } else {
            setCity([]);
        }
    }

    function Clicked(cities, e) {
        e.preventDefault()
        console.log(cities)
        setText(cities)
        getCity(city)
        setText("")
        if (text.length >= 2) {
            getCity(text)
        } else {
            setCity([]);
        }

    }


    return (
        <div>
            <Box className={style.hstack}>

                <InputGroup className={style.input}>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<ImLocation />}
                    />
                    <Input type='text' value={text} onChange={doubleFunct} placeholder={`${location.city},${location.region}`} />
                    <InputRightElement onClick={() => searchLocation(text)} children={<ImSearch />} />

                </InputGroup>
                <Box className={style.suggestions}  >
                    {city?.map((el) => (
                        <Flex style={{ gap: "10px", overflow: "auto" }} onClick={(e) => Clicked(el.regionNames.shortName, e)}
                            _hover={{ bg: "rgba(0,177,255,0.2)" }} cursor='pointer' p='10px 10px' borderRadius='10px'>
                            <Icon as={ImLocation} />
                            <h5>{el?.regionNames?.shortName}</h5>

                        </Flex>
                    ))}</Box>


            </Box>

        </div>
    )
}

export default Search