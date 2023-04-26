import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as RefreshPostIcon } from '../../assets/images/refresh_post.svg';
import { Navbar } from '../../components/navbar';
import { MainBackgroundDiv } from '../../components/main-background-div';
import { PostIt } from '../../components/post-it';
import {db} from '../../firebase';
import "firebase/compat/firestore";

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
  const [otherPostLists, setOthersPostLists] = useState([]);
  const examplePost = [
    { userId: 1, postContent: '예시 포스트입니다1' },
    { userId: 2, postContent: '예시 포스트입니다2' },
    { userId: 3, postContent: '예시 포스트입니다3' },
    { userId: 4, postContent: '예시 포스트입니다4' },
    { userId: 5, postContent: '예시 포스트입니다5' },
    { userId: 6, postContent: '예시 포스트입니다6' },
    { userId: 7, postContent: '예시 포스트입니다7' },
    { userId: 8, postContent: '예시 포스트입니다8' },
    { userId: 9, postContent: '예시 포스트입니다9' },
    { userId: 10, postContent: '예시 포스트입니다10' },
    { userId: 11, postContent: '예시 포스트입니다11' },
  ];
  let data = [
    {userId: 1, postContent: '예시'},
  ];

  const handleRefreshPostClick = () => {
    //todo api 붙여야 함
    // 계획은 15개 한번에 불러오고
    // 새로고침 누르면 다시 랜덤으로 포스트 15개
    // 불러와서 리스트에 저장하는 것이었는데
    // 아무렇게나 바꾸셔도 상관없습니다.
    // 여기서 포스트 리스트 가져와서 useState사용해가지고
    // 리스트 저장하면 됩니다
    db.collection("main").get().then((docs) => {
      docs.forEach()
      setOthersPostLists(otherPostLists => [...otherPostLists, {postContent: doc.data().message}]);
      setOthersPostLists([...otherPostLists, docs.forEach((doc) => {doc.data().message})]);
      /*
      docs.forEach((doc) => {
        setOthersPostLists([...otherPostLists, doc.data().message]);
        console.log(doc.data().message);
        
        setOthersPostLists([...otherPostLists, doc.data().message]);
        */
        
/*
        <PostIt>
          <p>{doc.data().message}</p>
        </PostIt>
  */
        //console.log(doc.data().message)
        //data.push({userId:++cnt, postContent: String(doc.data().message)})
      // arr = Object.keys(docs).map(item => docs[item]);
    }); 


    console.log('hi');
  };
  
  data = [
    {userId:1, postContent:'예시22'},
    {userId:2, postContent:'예시33'},
    
  ]
  let cnt = 1
  
  console.log(1)
  console.log(data)
  console.log(data.length)
  console.log(1)

  db.collection("main").get().then((docs) => {
    docs.forEach((doc) => {
      <PostIt>
        <p>{doc.data().message}</p>
      </PostIt>
      

      //console.log(doc.data().message)
      //data.push({userId:++cnt, postContent: String(doc.data().message)})
    });
    // arr = Object.keys(docs).map(item => docs[item]);
  }); 
  
  console.log(2)
  console.log(data)
  console.log(data.length)
  console.log(2)

  return (
    <MainBackgroundDiv>
      <Navbar />
      <MainContentDiv>
        {/**여기에 다른 사람의 스토리를 올려주시면 됩니다. */}
        {/**아래 코드와 같이 list를 map사용해서 돌면 됩니다.*/}
        {otherPostLists.map(postContent => (
          <PostIt>
          <p>{postContent}</p>
        </PostIt>
        ))}
        {data.map(postItem => (
          <PostIt>
            <p>{postItem.postContent}</p>
          </PostIt>
        ))}
      </MainContentDiv>
      {/* <RefreshIconButton onClick={handleRefreshPostClick}>
        <RefreshPostIcon />
      </RefreshIconButton> */}
    </MainBackgroundDiv>
  );
}
