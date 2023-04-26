import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as RefreshPostIcon } from '../../assets/images/refresh_post.svg';
import { ReactComponent as WritePostIcon } from '../../assets/images/write_post.svg';
import { Navbar } from '../../components/navbar';
import { MainBackgroundDiv } from '../../components/main-background-div';
import { PostIt } from '../../components/post-it';
import {db} from '../../firebase';
import "firebase/compat/firestore";
import { WritePostModal } from '../../components/modals/write-post-modal';
import {collection, getDocs, orderBy, query} from "firebase/firestore";

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

const RefreshIconButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 100px;
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
  const [otherPostLists, setOthersPostLists] = useState([]);
  const [changed, setChanged] = useState(false);
  const [writeModalOpen, setWriteModalOpen] = useState(false);

  useEffect(() => {
    const getPosts = async() => {
      const postsCollectionRef = collection(db, "posts");
      const postsData = await getDocs(query(postsCollectionRef, orderBy('timestamp', 'desc')));
      //const postsData = await getDocs(postsCollectionRef);
      setOthersPostLists(postsData.docs.map((doc) => ({id: doc.id, postContent: doc.data()['content'],})))
    }

    getPosts();
    setChanged(false); 
  }, [changed])

  const handleRefreshPostClick =  async() => {
    //todo api 붙여야 함
    // 계획은 15개 한번에 불러오고
    // 새로고침 누르면 다시 랜덤으로 포스트 15개
    // 불러와서 리스트에 저장하는 것이었는데
    // 아무렇게나 바꾸셔도 상관없습니다.
    // 여기서 포스트 리스트 가져와서 useState사용해가지고
    // 리스트 저장하면 됩니다
    window.location.replace("/others-story");
    const postsCollectionRef = collection(db, "posts");//.orderBy("timeStamp", "asc");
    //firestoreDb.collection("ideas").orderBy("timeStamp", Query.Direction.ASCENDING)
    const postsData = await getDocs(query(postsCollectionRef, orderBy('timestamp', 'desc')));
    //const postsData = await getDocs(postsCollectionRef);
    //setOthersPostLists(postsData.docs.map((doc) => ({{postContent: doc.data()['content'], id: doc.id})))
    //postsData.orderBy("timestamp", "asc");
    setOthersPostLists(postsData.docs.map((doc) => ({id: doc.id, postContent: doc.data()['content'],})))
    setChanged(true);
  };
  

  return (
    <MainBackgroundDiv>
      <Navbar />
      <MainContentDiv>
        {/**여기에 다른 사람의 스토리를 올려주시면 됩니다. */}
        {/**아래 코드와 같이 list를 map사용해서 돌면 됩니다.*/}
        {otherPostLists.map(item => (
          <PostIt>
          <p>{item.postContent}</p>
        </PostIt>
        ))}

      </MainContentDiv>
      <WriteIconButton onClick={() => setWriteModalOpen(true)}>
        <WritePostIcon />
      </WriteIconButton>
      <WritePostModal
        writePostModalOpen={writeModalOpen}
        handleWritePostModalClose={() => setWriteModalOpen(false)}
      />
      <RefreshIconButton onClick={handleRefreshPostClick}>
        <RefreshPostIcon />
      </RefreshIconButton>
    </MainBackgroundDiv>
  );
}
