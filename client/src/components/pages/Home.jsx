import React from 'react'
import CreateContainer from '../layout/CreateContainer'
import { Container } from '../styled/HomeStyled'

export default function Home() {
  return (
    <div>
        <Container>
            <h1>Criei seu Container</h1>
            <p>Importe ou Exporte seu container conosco</p>
            <CreateContainer />
        </Container>
    </div>
  )
}
