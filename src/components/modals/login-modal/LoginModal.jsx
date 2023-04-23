import { useNavigate } from 'react-router-dom';
import { Modal } from '@mui/material';
import styled from 'styled-components';
import { ReactComponent as CloseIcon } from '../../../assets/images/close.svg';
//import { auth } from '../../../firebase';

const CenteredModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PostItWrapper = styled.div`
  position: relative;
  display: flex;
  margin: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30rem;
  height: 22rem;
  background-color: #a3b6c5;

  border-radius: 0.5rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
  padding: 1.25rem;
  font-family: 'MiniProjFont';
  font-size: 2rem;
  color: #333;
  text-align: center;
`;

const CloseIconWrapper = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  &:hover {
    cursor: pointer;
  }
`;

const LoginBtnWrapper = styled.div`
  position: absolute;
  bottom: 0.5rem;
  right: 0.8rem;
  &:hover {
    cursor: pointer;
  }
`;

const LoginBtnDiv = styled.div`
  padding: 0.2rem 1.5rem;
  border-radius: 1rem;
  background-color: #fff;
  font-family: 'MiniProjFont';
  font-weight: normal;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export default function LoginModal({ loginModalOpen, handleLoginModalClose }) {
  const navigate = useNavigate();
  return (
    <CenteredModal open={loginModalOpen} onClose={handleLoginModalClose}>
      <PostItWrapper>
        <CloseIconWrapper onClick={() => handleLoginModalClose()}>
          <CloseIcon style={{ width: '1.5rem', height: '1.5rem' }} />
        </CloseIconWrapper>
        <p>로그인기능 붙일곳</p>
        {/** here is for id and password input */}
        <LoginBtnWrapper>
          <LoginBtnDiv
            onClick={() => {
              //     /**todo : 여기에 로그인 관련된 기능 붙이시면 됩니다 */
              //     /**아래 코드는 main-story페이지로 이동하는 코드라 */
              //     /**적절한 로직 붙이고 아래 코드 실행해주시면 됩니다.*/
              navigate('/my-story');
            }}
          >
            로그인
          </LoginBtnDiv>
        </LoginBtnWrapper>
      </PostItWrapper>
    </CenteredModal>
  );
}
