import { Modal } from '@mui/material';
import styled from 'styled-components';
import { ReactComponent as CloseIcon } from '../../../assets/images/close.svg';
import { ReactComponent as CheckIcon } from '../../../assets/images/check.svg';

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
  width: 20rem;
  height: 20rem;
  background-color: #fef5d4;

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

const CheckIconWrapper = styled.div`
  position: absolute;
  bottom: 0.5rem;
  right: 0.8rem;
  &:hover {
    cursor: pointer;
  }
`;

export default function DeletePostModal({
  deletePostModalOpen,
  handleDeletePostModalClose,
}) {
  const handleCheckIconClick = () => {
    //todo : 포스트 삭제하는 API 붙여야 합니다.
    console.log('삭제');
  };
  return (
    <CenteredModal
      open={deletePostModalOpen}
      onClose={handleDeletePostModalClose}
    >
      <PostItWrapper>
        <CloseIconWrapper onClick={() => handleDeletePostModalClose()}>
          <CloseIcon style={{ width: '1.5rem', height: '1.5rem' }} />
        </CloseIconWrapper>
        <p>정말 삭제하시겠습니까?</p>
        <CheckIconWrapper onClick={handleCheckIconClick}>
          <CheckIcon style={{ width: '2rem', height: '2rem' }} />
        </CheckIconWrapper>
      </PostItWrapper>
    </CenteredModal>
  );
}
