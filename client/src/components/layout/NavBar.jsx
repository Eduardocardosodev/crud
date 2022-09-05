import React from 'react'
import { Link } from 'react-router-dom';
import { Container } from '../styled/NavBarStyled';


export default function NavBar() {
  return (
    <Container>
        <div>
            <img src="" alt="SITE" />
        </div>

        <div>
            <ul>
                <li>
                    <Link to='/listContainers'>Containers</Link>
                </li>
                <li>
                    <Link to='/'>Criar</Link>
                </li>
            </ul>
        </div>
    </Container>
  )
}
