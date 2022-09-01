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
        margin-right: 30px;
        cursor: pointer;
    }

    button{
        cursor: pointer;
    }

`