import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as WritePostIcon } from '../../assets/images/write_post.svg';
import { Navbar } from '../../components/navbar';
import { MainBackgroundDiv } from '../../components/main-background-div';
import { PostIt } from '../../components/post-it';
import { WritePostModal } from '../../components/modals/write-post-modal';

const WriteIconButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: #a9a0fc;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const MainContentDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default function MyStory() {
  const [writeModalOpen, setWriteModalOpen] = useState(false);
  return (
    <MainBackgroundDiv>
      <Navbar />
      <MainContentDiv>
        <PostIt>안녕하세요1</PostIt>
        <PostIt>안녕하세요2</PostIt>
        <PostIt>안녕하세요3</PostIt>
        <PostIt>안녕하세요4</PostIt>
        <PostIt>안녕하세요5</PostIt>
        <PostIt>안녕하세요6</PostIt>
        <PostIt>안녕하세요7</PostIt>
        <PostIt>안녕하세요8</PostIt>
        <PostIt>안녕하세요9</PostIt>
        <PostIt>안녕하세요10</PostIt>
        <PostIt>안녕하세요11</PostIt>
        <PostIt>안녕하세요12</PostIt>
        <PostIt>안녕하세요13</PostIt>
      </MainContentDiv>
      <WriteIconButton onClick={() => setWriteModalOpen(true)}>
        <WritePostIcon />
      </WriteIconButton>
      <WritePostModal
        writePostModalOpen={writeModalOpen}
        handleWritePostModalClose={() => setWriteModalOpen(false)}
      />
    </MainBackgroundDiv>
  );
}
