import { useState } from 'react';
import { Modal, TextField } from '@mui/material';
import styled from 'styled-components';
import { ReactComponent as CloseIcon } from '../../../assets/images/close.svg';
import { ReactComponent as SendIcon } from '../../../assets/images/send.svg';

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
  width: 80%;
  height: 90%;
  background-color: #fef5d4;
  border-radius: 0.5rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
  font-family: 'MiniProjFont';
  font-size: 1rem;
  color: #333;
  text-align: center;
`;

const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: #dad3b9;
  margin: 1rem 0;
`;

const CloseIconWrapper = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  &:hover {
    cursor: pointer;
  }
`;

const SendIconWrapper = styled.div`
  display: felx;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;

const CommentTextField = styled(TextField)`
  width: 100%;
  margin-top: 1rem;
`;

const CharCountWrapper = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  font-size: 0.8rem;
  color: #999;
`;

export default function CommentPostModal({
  commentPostModalOpen,
  handleCommentPostModalClose,
  postContents,
}) {
  const [comment, setComment] = useState('');

  const handleCommentChange = event => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    console.log(`Submitting comment: ${comment}`);
    // add logic to submit comment to server
    setComment('');
  };

  return (
    <CenteredModal
      open={commentPostModalOpen}
      onClose={handleCommentPostModalClose}
    >
      <PostItWrapper>
        <CloseIconWrapper onClick={() => handleCommentPostModalClose()}>
          <CloseIcon style={{ width: '1.5rem', height: '1.5rem' }} />
        </CloseIconWrapper>
        <div style={{ height: '30%', display: 'flex', alignItems: 'center' }}>
          <p>{postContents}</p>
        </div>
        <Divider />
        <div
          style={{
            width: '80%',
            height: '70%',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          {/* add logic to display comments here */}
          <p>스크롤테스트1</p>
          <p>스크롤테스트2</p>
          <p>스크롤테스트3</p>
          <p>스크롤테스트4</p>
          <p>스크롤테스트5</p>
          <p>스크롤테스트6</p>
          <p>스크롤테스트7</p>
          <p>스크롤테스트8</p>
          <p>스크롤테스트9</p>
          <p>스크롤테스트10</p>
          <p>스크롤테스트11</p>
          <p>스크롤테스트12</p>
          <p>스크롤테스트13</p>
        </div>
        <div
          style={{
            width: '40rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <CommentTextField
            placeholder="댓글을 남겨주세요!"
            variant="standard"
            value={comment}
            onChange={handleCommentChange}
            inputProps={{ maxLength: 60 }}
            onKeyPress={event => {
              if (event.key === 'Enter') {
                handleCommentSubmit();
              }
            }}
          />
          <SendIconWrapper onClick={handleCommentSubmit}>
            <SendIcon style={{ width: '2rem', height: '2rem' }} />
          </SendIconWrapper>
        </div>
        <div style={{ height: '1rem' }} />
        <CharCountWrapper>{comment.length}/60</CharCountWrapper>
      </PostItWrapper>
    </CenteredModal>
  );
}
