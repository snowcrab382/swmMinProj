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

  const examplePost = [
    { userId: 1, postContent: '예시 셀프 포스트입니다1' },
    { userId: 3, postContent: '예시 셀프 포스트입니다2' },
    { userId: 4, postContent: '예시 셀프 포스트입니다3' },
    { userId: 5, postContent: '예시 셀프 포스트입니다4' },
    { userId: 6, postContent: '예시 셀프 포스트입니다5' },
    { userId: 7, postContent: '예시 셀프 포스트입니다6' },
    { userId: 8, postContent: '예시 셀프 포스트입니다7' },
    { userId: 9, postContent: '예시 셀프 포스트입니다8' },
    { userId: 10, postContent: '예시 셀프 포스트입니다9' },
    { userId: 11, postContent: '예시 셀프 포스트입니다10' },
  ];
  return (
    <MainBackgroundDiv>
      <Navbar />
      <MainContentDiv>
        {/* todo: 여기는 사용자의 포스트를 불러와서 보여줄 공간입니다.*/}
        {/* firebase로부터 포스트를 리스트형태로 받아와 javascript map함수를 사용해*/}
        {/* 포스트 내용을 <PostIt>여기</PostIt> 넣어주시면 됩니다.*/}
        {/* 몇개씩 불러올지는 알아서 해주세요*/}
        {/* 많이 안쓸테니 한번에 불러와도 괜찮을 것 같습니다.*/}
        {examplePost.map(item => (
          <PostIt>{item.postContent}</PostIt>
        ))}
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
