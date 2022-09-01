import React, { useState } from 'react'
import FormDialog from '../dialog/Dialog';
import { Container } from '../styled/ListContainerStyled';


export default function ListContainers(props) {

    const [open, setOpen] = useState(false);


  return (

    <>
    <FormDialog 
        open={open}
        setOpen={setOpen}
        clientName={props.clientName}
        type={props.type}
        numContainer={props.numContainer}
        status={props.status}
        category={props.category}
        setListCard={props.setListCard}
        listCard={props.listCard}
        id={props.id}/>

        <Container onClick={() => setOpen(true)}>
            <div>
                <h2>Nome: {props.clientName}</h2>
                <h3>Numero do Container: {props.numContainer}</h3>
                <h3>Tipo: {props.type}</h3>
                <h3>Status: {props.status}</h3>
                <h3>Categoria: {props.category}</h3>
            </div>
        </Container>
    </>
  )
}
