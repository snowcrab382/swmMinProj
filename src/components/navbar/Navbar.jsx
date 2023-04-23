import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #fff;
  height: 2rem;
  padding 0.5rem 3rem;
  display: flex;
`;

const NavTabFont = styled.p`
  font-family: 'MiniProjFont';
  font-weight: ${props =>
    props.selectedPath === props.currPath ? 'bold' : 'normal'};
  color: ${props =>
    props.selectedPath === props.currPath ? '#a9a0fc' : '#d3d2e2'};
  margin: 0 1.5rem 0 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: ${props =>
    props.selectedPath === props.currPath ? '0.2rem solid #a9a0fc' : 'none'};
`;

const NavLogOut = styled.div`
  padding: 0.2rem 1.5rem;
  border-radius: 1rem;
  background-color: #a9a0fc;
  font-family: 'MiniProjFont';
  font-weight: normal;
  color: white;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const NavigateDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClickLogOut = () => {
    navigate('/');
  };

  return (
    <Nav>
      <NavigateDiv onClick={() => navigate('/my-story')}>
        <NavTabFont selectedPath={'/my-story'} currPath={location.pathname}>
          나의 이야기
        </NavTabFont>
      </NavigateDiv>
      <NavigateDiv onClick={() => navigate('/others-story')}>
        <NavTabFont selectedPath={'/others-story'} currPath={location.pathname}>
          다른 사람의 이야기
        </NavTabFont>
      </NavigateDiv>
      <NavLogOut onClick={handleClickLogOut}>떠나기</NavLogOut>
    </Nav>
  );
}
