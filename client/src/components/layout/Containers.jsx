import React, { useEffect, useState } from 'react'
import FormDialog from '../dialog/Dialog';
import ListContainers from '../pages/ListContainers';
import Axios from 'axios';

export default function Containers(props) {

    const [open, setOpen] = useState(false);

    const [listContainer, setListContainer] = useState()

    console.log(listContainer)
    useEffect(() => {
        Axios.get("http://localhost:3001/getContainer").then((response) => {
            setListContainer(response.data)
        })
    }, [])
  return (

    <div>
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

            {typeof listContainer != "undefined" &&
            listContainer.map((values) => {
                return <ListContainers 
                    key={values.idCreateContainer}
                    listCard={listContainer}
                    setListCard={setListContainer}
                    id={values.idCreateContainer}
                    clientName={values.clientName}
                    numContainer={values.numContainer}
                    type={values.type}
                    status={values.status}
                    category={values.category}/>
            })}

    </div>
  )
}
