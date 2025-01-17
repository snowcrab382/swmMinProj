import { Modal } from '@mui/material';
import styled from 'styled-components';
import { ReactComponent as CloseIcon } from '../../../assets/images/close.svg';
import { ReactComponent as CheckIcon } from '../../../assets/images/check.svg';
import { doc, deleteDoc } from "firebase/firestore";
import {db} from '../../../firebase';
import "firebase/compat/firestore";

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
    //고유id를 입력받아 삭제
    // db.collection("posts").doc("고유id").delete().then(() => {
    //   console.log("Document successfully deleted!")});
    
    //오늘의 일기를 게시하는 느낌의 사이트이기 때문에 매일 특정 시간에 작성된 모든 데이터를 삭제하는 작업을 하는 건 어떤가요?
    //아래의 로직은 posts 컬렉션의 모든 documents를 삭제하는 코드입니다.
    console.log(db.collection("posts").get().then((idList)=>{
      idList.forEach((doc)=>{
        console.log(doc.ref.delete())
      })
    }));
    console.log('삭제');
    handleDeletePostModalClose();
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