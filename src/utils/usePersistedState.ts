import { useEffect, useState, Dispatch, SetStateAction } from 'react';

type Response<T> = [
    T,
    Dispatch<SetStateAction<T>>
]

function usePersistedState<T>(key: string, initialState: T): Response<T>{
    const [state, setState] = useState(initialState)

    // const [state, setState] = useState(teste);

    
    // useEffect(() => {
    //     const teste = localStorage.getItem(key);
    // }, []);

    // const [state, setState] = useState(() => {
    //     const storageValue = localStorage.getItem(key);

    //     if (storageValue) {
    //         return JSON.parse(storageValue);
    //     } else {
    //         return initialState;
    //     }

    // });
    
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState];
}

export default usePersistedState;