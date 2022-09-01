import React from 'react';
import { useState } from 'react';
import Axios from 'axios';

export default function CreateContainer() {

    const [values, setValues] = useState();
    const [itemContainer, setItemContainer] = useState();

    const handleChangeValues = (values) => {
        setValues((prevValues) => ({
            ...prevValues,
            [values.target.name]: [values.target.value]
        }))
    }

    const handleClickButton = () => {
        Axios.post("http://localhost:3001/createContainer", {
            clientName: values.clientName,
            numContainer: values.numContainer,
            type: values.type,
            status: values.status,
            category: values.category,
        }).then(() => {
            setItemContainer([
                ...itemContainer,
                {
                    clientName: values.clientName,
                    numContainer: values.numContainer,
                    type: values.type,
                    status: values.status,
                    category: values.category,
                }
            ])
        })
    }


  return (
    <div>
        <form>
            <input 
            type="text" 
            name="clientName" 
            placeholder='Nome'
            onChange={handleChangeValues} />

            <input 
            type="text" 
            name="numContainer" 
            placeholder='Numero do Container'
            onChange={handleChangeValues} />

            <input 
            type="text" 
            name="type" 
            placeholder='Tipo' 
            onChange={handleChangeValues}/>

            <input 
            type="text" 
            name="status" 
            placeholder='Status' 
            onChange={handleChangeValues}/>

            <input 
            type="text" 
            name="category" 
            placeholder='Categoria' 
            onChange={handleChangeValues}/>

            <button onClick={() => handleClickButton()}>Criar</button>
        </form>


    </div>
  )
}
