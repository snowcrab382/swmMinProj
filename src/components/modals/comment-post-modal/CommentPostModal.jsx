import { useState, useEffect } from 'react';
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
  const [postCommentList, setPostCommentList] = useState([]);

  useEffect(() => {
    //todo: 이 포스트에 등록된 댓글들을 불러와서 postCommentLIst와 같은 곳에 저장해야 합니다.
    console.log('hi');
  }, []);

  const handleCommentChange = event => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    console.log(`Submitting comment: ${comment}`);
    // todo: 포스트에 댓글을 등록하는 기능을 붙여야 합니다.
    setComment('');
  };

  const handleModalCloseControl = () => {
    setComment('');
    handleCommentPostModalClose();
  };

  const exampleComment = [
    { userId: 1, commentContent: '예시 코멘트입니다1' },
    { userId: 2, commentContent: '예시 코멘트 입니다2' },
    { userId: 3, commentContent: '예시 코멘트 입니다3' },
    { userId: 4, commentContent: '예시 코멘트 입니다4' },
    { userId: 5, commentContent: '예시 코멘트 입니다5' },
    { userId: 6, commentContent: '예시 코멘트 입니다6' },
    { userId: 7, commentContent: '예시 코멘트 입니다7' },
    { userId: 8, commentContent: '예시 코멘트 입니다8' },
    { userId: 9, commentContent: '예시 코멘트 입니다9' },
    { userId: 10, commentContent: '예시 코멘트 입니다10' },
    { userId: 11, commentContent: '예시 코멘트 입니다11' },
  ];

  return (
    <CenteredModal
      open={commentPostModalOpen}
      onClose={handleModalCloseControl}
    >
      <PostItWrapper>
        <CloseIconWrapper onClick={() => handleModalCloseControl()}>
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
          {/* todo: 여기가 해당 포스트 댓글을 불러와서 보여줄 공간입니다.*/}
          {/* firebase에 저장된 댓글을 가져와서 아래와 같이 javascript map기능 사용해서 <p>태그 안에 넣어주시면 됩니다</p>*/}
          {/* 댓글을 가져오는 상황은 새롭게 댓글을 입력했을 때나, 처음 모달창이 올라오는 상황입니다.*/}
          {/* 일단 useState로 postCommentList라는 변수 선언해두었고 useEffect공간 마련해두었으니 필요하시면 이용하시면 됩니다.*/}
          {exampleComment.map(comment => (
            <p>{comment.commentContent}</p>
          ))}
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
