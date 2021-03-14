import { useEffect, useState, Dispatch, SetStateAction } from 'react';
import Cookies from 'js-cookie';

type Response<T> = [
    T,
    Dispatch<SetStateAction<T>>
]

function usePersistedState<T>(key: string, initialState: T): Response<T>{
    // console.log(initialState);
    // const [state, setState] = useState(initialState)
    // console.log(state);
    // const [state, setState] = useState(teste);

    
    // useEffect(() => {
    //     const teste = localStorage.getItem(key);
    // }, []);

    const [state, setState] = useState(() => {
        // const storageValue = localStorage.getItem(key);
        const storageValue = Cookies.get(key);
        // console.log('key: '+storageValue);

        if (storageValue) {
            // console.log('aqui');
            // console.log('t: '+JSON.parse(storageValue));
            return JSON.parse(storageValue);
            
        } else {
            // console.log('aqui-2');
            return initialState;
        }
    });
    
    useEffect(() => {
        // localStorage.setItem(key, JSON.stringify(state));
        // Cookies.set(key, String(state));
        // Cookies.set(key, String(JSON.stringify(state)));
        Cookies.set(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState];
}

export default usePersistedState;