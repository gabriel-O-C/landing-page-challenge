import React from 'react'
import { Advavntages, Proof } from '../index'

import Teen from '../../assets/teenager.png';
import { Container, Img } from './styles';

const Cta = () => {
  return (
    <>
      <Proof />
      <Container>
        <Advavntages />
        <Img src={Teen} />

      </Container>
    </>
  )
}

export default Cta
