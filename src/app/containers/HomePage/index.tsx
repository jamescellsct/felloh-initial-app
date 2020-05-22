import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { ReactComponent as LogoIcon } from './assets/logo-purple.svg';
import { ReactComponent as CalmIcon } from './assets/logo-calm.svg';
import { ReactComponent as FooterIcon } from './assets/footer.svg';
import { SubTitle } from '../../components/Shared/SubTitle';
import { Title } from '../../components/Shared/Title';
import { P } from '../../components/Shared/P';
import './styles.css';

const Container = styled.div`
  /* Adapt the colors based on primary prop */
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TopContainer = styled.div`
  /* Adapt the colors based on primary prop */
  background-color: #d1c2fa;
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const BottomContainer = styled.div`
  /* Adapt the colors based on primary prop */
  background-color: #fff;
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
          <Title>Campaign name here</Title>
          <SubTitle>I'd like to donate...</SubTitle>
        </TopContainer>
        <BottomContainer>
          <CalmIcon />
          <P>
            Join our mission to divert $1 billion of costs to great social
            purpose.
          </P>
          <FooterIcon />
        </BottomContainer>
      </Container>
    </>
  );
}
