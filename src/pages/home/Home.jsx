import { useState } from 'react';
import styled from 'styled-components';
import { LoginModal } from '../../components/modals/login-modal';
import homeBackgroundImg from '../../assets/images/home_background.png';
import { Button, Typography } from '@mui/material';

const HomeDiv = styled.div`
  background-image: url(${homeBackgroundImg});
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: left;
  height: 100vh;
  overflow: hidden;
`;

const TextContainer = styled.div`
  padding: 0 5rem 0 0;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) and (max-width: 1200px) {
    transform: scale(0.7);
    padding: 0;
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export default function Home() {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const handleClickLoginBtn = () => {
    setLoginModalOpen(true);
  };
  return (
    <HomeDiv>
      <div
        style={{
          padding: '1rem 2rem 0 0',
          display: 'flex',
          flexDirection: 'row-reverse',
        }}
      >
        <Button onClick={handleClickLoginBtn} variant="contained">
          로그인
        </Button>
      </div>
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'row-reverse',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            padding: '0 5rem 0 0',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <TextContainer>
            <Typography
              variant="body1"
              style={{ fontSize: '7rem', fontFamily: 'MiniProjFont' }}
            >
              당신의 오늘
            </Typography>
            <Typography
              variant="body1"
              style={{ fontSize: '7rem', fontFamily: 'MiniProjFont' }}
            >
              하루는
            </Typography>
            <Typography
              variant="body1"
              style={{ fontSize: '7rem', fontFamily: 'MiniProjFont' }}
            >
              어땠나요?
            </Typography>
          </TextContainer>
        </div>
      </div>
      <LoginModal
        loginModalOpen={loginModalOpen}
        handleLoginModalClose={() => setLoginModalOpen(false)}
      />
    </HomeDiv>
  );
}
