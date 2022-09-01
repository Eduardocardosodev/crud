import styled from 'styled-components';

export const Container = styled.div`

display: flex;
    justify-content: center;

    div{
        width: 250px;
    
        border: 3px solid #000000;
        border-radius: 5px;
        margin: 10px;
        padding: 5px;
        cursor: pointer;
    }

  
  h2 {
    display: inline;
  }
  
  h3 {
    margin-top: 15px;
  }
  
  div:hover {
    background-color: aqua;
  }

`