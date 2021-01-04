import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const DataContext = createContext();


export const DataProvider = ({children}) => {

    const [data, setData] = useState('');

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(res=>setData(res.data))
        .catch(err=>console.log(err));
    },[]);
    return (
        <DataContext.Provider value={[data, setData]}>
            {children}
        </DataContext.Provider>
    )
}
