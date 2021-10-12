import React from 'react';
import { FaBars } from 'react-icons/fa';
import { TouchOpacity } from '../../../../../../components/TouchOpacity';

import { Container, Li, Ul, Button } from './styles';

export function Nav(): JSX.Element {
  return (
    <Container>
      <Ul>
        <Li>
          <a href="/">Contact</a>
        </Li>
        <Li>
          <a href="/">Register</a>
        </Li>
        <Li>
          <TouchOpacity>Log in</TouchOpacity>
        </Li>
      </Ul>
      <Button>
        <FaBars />
      </Button>
    </Container>
  );
}
