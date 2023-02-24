import React from 'react';
import InputForm from "./InputForm";

const InputData = (props) => {
    const InputFormData = (formData) => {
        const inputData = {
            ...formData,
            id : Math.random().toString(),
        }
        props.onUserData(inputData);
    };
    return(
        <InputForm onInputFormData={InputFormData}/>
    )
}

export default InputData;