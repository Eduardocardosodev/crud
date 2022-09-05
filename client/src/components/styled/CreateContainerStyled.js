import styled from "styled-components";

export const Form = styled.form`


  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  
  .div-dentro{
    padding: 10px 20px;
    margin-top: 20px;
    border: 3px solid black;
    border-radius: 5px;
  }


    label{
        text-align: center;
        margin-bottom: 20px;
        font-family: fantasy;
    }

    input {
        display: block;
        margin: 10px auto;
        padding: 7px 0;
    }

    button {
        padding: 5px 15px;
        cursor: pointer;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 5px;
        font-weight: bold;

        transition: .3s ease;
    }

    button:hover {
        background-color: green;
    }
`