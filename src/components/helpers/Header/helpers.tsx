import React from 'react'
import { useState } from 'react';
import { searchAnime } from '../../../services/ApiServices';
import { useDisclosure } from '@chakra-ui/react';
import { Anime } from '../../../types/interface';

const helpers = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [height, setHeight] = useState('0px');
    const [isClicked, setClicked] = useState<boolean>(false);
    const [searchResult, setsearchResult] = useState<Anime[]>()
    const [query, setQuery] = useState<string>('');
    const { isOpen, onOpen, onClose } = useDisclosure();


    const search = async () => {
        setLoading(true);
        const res = await searchAnime(query);
        setsearchResult(res)
        setLoading(false);
    }
    
    function handleHamburger() {
        setClicked(isClicked ? false : true);
        setHeight(height == '0px' ? '300px' : '0px')
    }
    
    const handleClose = () => {
        setsearchResult([]); // clear the query state variable
        onClose(); // call the original onClose function
    };
    
    const handleOpen = () =>{
        setsearchResult([]); // clear the query state variable
        onOpen(); // 
    }
    const handleClickSearch = ()=>{
        setsearchResult([]); 
    }

    
    const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            setsearchResult([]);
            const inputElement = event.target as HTMLInputElement;
            console.log(inputElement.value)
            setQuery(inputElement.value);
        }
    };


  return{
    search,
    handleHamburger,
    handleClose,
    handleOpen,
    handleClickSearch,
    setQuery,
    setsearchResult,
    handleSearch,
    onClose,
    height,
    isClicked,
    loading,
    searchResult,
    isOpen,
    query,
    onOpen
  }
}

export default helpers