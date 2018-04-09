import React from 'react';
import { Container, Image, Name } from './user.theme';

const User = ({ name, avatar }) => (
  <Container>
    { avatar
      && <Image src={avatar} alt={`${name}'s avatar`} />
    }
    <Name>{ name }</Name>
  </Container>
);

export default User;
