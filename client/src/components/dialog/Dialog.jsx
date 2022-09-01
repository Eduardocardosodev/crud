import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Axios from 'axios'

export default function FormDialog(props) {

    const [editValues, setEditValues] = useState({
        id: props.id,
        clientName: props.clientName,
        numContainer: props.numContainer,
        type: props.type,
        status: props.status,
        category: props.category,
    });

    const handleEdit = () => {
        Axios.put("http://localhost:3001/edit", {
            
            id: editValues.id,
            clientName: editValues.clientName,
            numContainer: editValues.numContainer,
            type: editValues.type,
            status: editValues.status,
            category: editValues.category,
        })
        handleClose();
    }

    const handleDelete = () => {
        Axios.delete(`http://localhost:3001/delete/${editValues.id}`);
        handleClose();
    }

    const handleClose = () => {
        props.setOpen(false)
    }

    const handleChangeValues = values => {
        setEditValues((prevValues) => ({
            ...prevValues,
            [values.target.id]: values.target.value,
        }))
    }
  return (
    <Dialog
    open={props.open}
    onClose={handleClose}
    aria-labelledby="form-dialog-title">
    <DialogTitle id="form-dialog-title">Editar</DialogTitle>
        <DialogContent>

            <TextField 
                autoFocus
                margin="dense"
                id="clientName"
                label="Nome do Cliente"
                defaultValue={props.clientName}
                onChange={handleChangeValues}
                type="text"
                fullWidth/>

            <TextField 
                autoFocus
                margin="dense"
                id="numContainer"
                label="Numero do container"
                defaultValue={props.numContainer}
                onChange={handleChangeValues}
                type="text"
                fullWidth/>

            <TextField 
                autoFocus
                margin="dense"
                id="type"
                label="Tipo"
                defaultValue={props.type}
                onChange={handleChangeValues}
                type="text"
                fullWidth/>

            <TextField 
                autoFocus
                margin="dense"
                id="status"
                label="Status"
                defaultValue={props.status}
                onChange={handleChangeValues}
                type="text"
                fullWidth/>

            <TextField 
                autoFocus
                margin="dense"
                id="category"
                label="Categoria"
                defaultValue={props.category}
                onChange={handleChangeValues}
                type="text"
                fullWidth/>
        </DialogContent>

        <DialogActions>
            <Button>
                <Link to='/createMovements'>Criar Movimentacoes</Link>
            </Button>

            <Button onClick={handleClose} color="primary">
                Cancelar
            </Button>

            <Button onClick={handleDelete} color="primary">
                Excluir
            </Button>

            <Button onClick={handleEdit} color="primary">
                Salvar
            </Button>
        </DialogActions>
    </Dialog>
  )
}
