import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { CommentPostModal } from '../modals/comment-post-modal';
import { DeletePostModal } from '../modals/delete_post_modal';
import { ReactComponent as DeleteIcon } from '../../assets/images/delete.svg';
import { ReactComponent as CommentIcon } from '../../assets/images/comment.svg';

const PostItWrapper = styled.div`
  position: relative;
  display: flex;
  margin: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 12rem;
  height: 12rem;
  background-color: ${props =>
    props.currPath === '/my-story' ? '#ffd6aa' : '#fef5d4'};

  border-radius: 0.5rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
  padding: 1.25rem;
  font-family: 'MiniProjFont';
  font-size: 1rem;
  color: #333;
  text-align: center;

  &:hover {
    transform: scale(1.01);
  }
`;

const DeleteIconWrapper = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  display: ${props => (props.currPath === '/my-story' ? 'block' : 'none')};
  &:hover {
    cursor: pointer;
  }
`;

const CommentIconWrapper = styled.div`
  position: absolute;
  bottom: 0.5rem;
  right: 0.8rem;
  &:hover {
    cursor: pointer;
  }
`;

export default function PostIt({ children }) {
  const [commentModalOpen, setCommentModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <PostItWrapper currPath={location.pathname}>
        <DeleteIconWrapper
          onClick={() => setDeleteModalOpen(true)}
          currPath={location.pathname}
        >
          <DeleteIcon style={{ width: '1.3rem', height: '1.3rem' }} />
        </DeleteIconWrapper>
        {children}
        {/* <CommentIconWrapper onClick={() => setCommentModalOpen(true)}>
          <CommentIcon style={{ width: '1.5rem', height: '1.5rem' }} />
        </CommentIconWrapper> */}
      </PostItWrapper>
      <CommentPostModal
        commentPostModalOpen={commentModalOpen}
        handleCommentPostModalClose={() => setCommentModalOpen(false)}
        postContents={children}
      />
      <DeletePostModal
        deletePostModalOpen={deleteModalOpen}
        handleDeletePostModalClose={() => setDeleteModalOpen(false)}
      />
    </>
  );
}
