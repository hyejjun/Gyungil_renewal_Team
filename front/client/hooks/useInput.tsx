import {useState} from 'react';

const useInput = (defaultValue) => {
    const [value, setValue] = useState<string>(defaultValue);           
    
    const onChange = e => {
        const value = {...e.target.value};
        setValue(value);
    }
    
    return{ value, onChange };
}

export default useInput