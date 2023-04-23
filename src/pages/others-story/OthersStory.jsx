import styled from 'styled-components';
import { ReactComponent as RefreshPostIcon } from '../../assets/images/refresh_post.svg';
import { Navbar } from '../../components/navbar';
import { MainBackgroundDiv } from '../../components/main-background-div';
import { PostIt } from '../../components/post-it';

const RefreshIconButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
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

export default function OthersStory() {
  const handleRefreshPostClick = () => {
    //todo api 붙여야 함
    console.log('hi');
  };

  return (
    <MainBackgroundDiv>
      <Navbar />
      <MainContentDiv>
        <PostIt>
          <p>안녕하세요 제 이름은 최윤석 입니다.</p>
        </PostIt>
        <PostIt>
          <p>안녕하세요 제 이름은 최윤석 입니다.</p>
        </PostIt>
        <PostIt>
          <p>안녕하세요 제 이름은 최윤석 입니다.</p>
        </PostIt>
        <PostIt>
          <p>안녕하세요 제 이름은 최윤석 입니다.</p>
        </PostIt>
        <PostIt>
          <p>안녕하세요 제 이름은 최윤석 입니다.</p>
        </PostIt>
        <PostIt>
          <p>안녕하세요 제 이름은 최윤석 입니다.</p>
        </PostIt>
        <PostIt>
          <p>안녕하세요 제 이름은 최윤석 입니다.</p>
        </PostIt>
        <PostIt>
          <p>안녕하세요 제 이름은 최윤석 입니다.</p>
        </PostIt>
        <PostIt>
          <p>안녕하세요 제 이름은 최윤석 입니다.</p>
        </PostIt>
      </MainContentDiv>
      <RefreshIconButton onClick={handleRefreshPostClick}>
        <RefreshPostIcon />
      </RefreshIconButton>
    </MainBackgroundDiv>
  );
}
