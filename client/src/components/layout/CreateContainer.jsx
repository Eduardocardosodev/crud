import React from 'react';
import { useState } from 'react';
import Axios from 'axios';
import { Form } from '../styled/CreateContainerStyled';

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
        <Form>
            <div className='div-dentro'>
                <div>
                    <label>Nome do Cliente: </label>
                    <input 
                    type="text" 
                    name="clientName" 
                    placeholder='Jorge'
                    onChange={handleChangeValues} />
                </div>
                <div>
                    <label>Tipo: </label>
                    <input 
                    type="text" 
                    name="type" 
                    placeholder='Ex: 20/40'
                    onChange={handleChangeValues} />
                </div>
                <div>
                    <label>Numero do Container: </label>
                    <input 
                    type="text" 
                    name="numContainer" 
                    placeholder='ABCD1234567'
                    onChange={handleChangeValues} />
                </div>
                <div>
                    <label>Status: </label>
                    <input 
                    type="text" 
                    name="status" 
                    placeholder='Cheio/Vazio'
                    onChange={handleChangeValues} />
                </div>
                <div>
                    <label>Categoria: </label>
                    <input 
                    type="text" 
                    name="category" 
                    placeholder='Importacao/Exportacao'
                    onChange={handleChangeValues} />
                </div>

                <button onClick={() => handleClickButton()}>Registrar</button>
            </div>
        </Form>


    </div>
  )
}
