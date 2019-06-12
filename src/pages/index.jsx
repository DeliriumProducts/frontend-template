import { Layout, Menu, Breadcrumb, Typography } from 'antd';
import styled from '@emotion/styled';
import { THEME_VARIABLES } from '../config/env.js';
import { keyframes } from '@emotion/core';

const Container = styled.div`
  text-align: center;
`;

const Header = styled.header`
  min-height: 100vh;
  display: flex;
  background-color: #282c34;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const LogoAnimation = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;

const Text = styled.h2`
  color: white;
  font-family: 'Josefin Sans';
`;

const Paragraph = styled.p`
  color: white;
  font-family: 'Josefin Sans';
`;

const Logo = styled.img`
  animation: ${LogoAnimation} 2s ease infinite;
  height: 40vmin;
  pointer-events: none;
`;

const StyledA = styled.a`
  text-decoration: none;
  color: rgb(217, 66, 53);
`;

export default () => (
  <Container>
    <Header>
      <Logo src="/static/dplogo.png" alt="dp-logo" />
      <Text>
        <StyledA href="https://deliriumproducts.me">Delirium Products!</StyledA>{' '}
        frontend template.
      </Text>
      <Paragraph>
        Edit <code>src/pages/index.jsx</code> and save to reload.
      </Paragraph>
    </Header>
  </Container>
);
