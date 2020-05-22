import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { ReactComponent as LogoIcon } from './assets/logo-purple.svg';

const Container = styled.div`
  /* Adapt the colors based on primary prop */
  background-color: #fff;
  width: 100%;
  display: flex;
`;

const TopContainer = styled.div`
  /* Adapt the colors based on primary prop */
  background-color: #d1c2fa;
  padding: 20px;
  width: 100%;
  display: flex;
`;

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Felloh!</title>
        <meta name="description" content="Felloh! homepage" />
      </Helmet>
      <Container>
        <TopContainer>
          <LogoIcon />
        </TopContainer>
      </Container>
    </>
  );
}
