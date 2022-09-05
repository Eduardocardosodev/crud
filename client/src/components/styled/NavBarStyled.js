import styled from 'styled-components';

export const Container = styled.div`

    background-color: grey;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img{
        margin-left: 30px;
    }

    ul{
        display: flex;
        align-items: center;
        list-style: none;
    }

    li{
        background-color: blueviolet;
        padding: 10px 20px;
        color: white;
        border: none;
        border-radius: 5px;

        text-decoration: 0;
        
        font-weight: bold;

        cursor: pointer;

        transition: .3s ease;

        margin-right: 30px;

    }

    button{
        cursor: pointer;
    }
    a{
        text-decoration: none;
        color: white;
    }

`