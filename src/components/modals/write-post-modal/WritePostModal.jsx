import { useState } from 'react';
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
  font-size: 1rem;
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

const InputField = styled.textarea`
  width: 100%;
  height: 10rem;
  margin-top: 1rem;
  background-color: #fef5d4;
  border: none;
  border-radius: 0;
  resize: none;
  font-family: 'MiniProjFont';
  font-size: 1rem;
  color: #333;
  text-align: center;
  &:focus {
    outline: none;
  }
`;

const CharCountWrapper = styled.div`
  position: absolute;
  bottom: 0.2rem;
  right: 0.2rem;
  font-size: 0.8rem;
  color: #999;
`;

export default function WritePostModal({
  writePostModalOpen,
  handleWritePostModalClose,
}) {
  const [postContent, setPostContent] = useState('');
  const handlePostContentChange = event => {
    const value = event.target.value;
    setPostContent(value.slice(0, 100));
  };
  const handleCheckIconClick = () => {
    //todo : API 붙여야함
    console.log(postContent);
  };
  return (
    <CenteredModal
      open={writePostModalOpen}
      onClose={handleWritePostModalClose}
    >
      <PostItWrapper>
        <CloseIconWrapper onClick={() => handleWritePostModalClose()}>
          <CloseIcon style={{ width: '1.5rem', height: '1.5rem' }} />
        </CloseIconWrapper>
        <InputField
          placeholder="당신의 이야기를 들려주세요"
          value={postContent}
          onChange={handlePostContentChange}
        />
        <CharCountWrapper>{postContent.length}/100</CharCountWrapper>
        <CheckIconWrapper onClick={handleCheckIconClick}>
          <CheckIcon style={{ width: '2rem', height: '2rem' }} />
        </CheckIconWrapper>
      </PostItWrapper>
    </CenteredModal>
  );
}
