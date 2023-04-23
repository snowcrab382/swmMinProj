import styled from 'styled-components';
import contentBackgroundImg from '../../assets/images/contents_background.jpg';

const MyBackgroundDivWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  &::before {
    content: '';
    background-image: url(${contentBackgroundImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.5;
    z-index: -1;
  }
`;

export default function MainBackgroundDiv({ children }) {
  return <MyBackgroundDivWrapper>{children}</MyBackgroundDivWrapper>;
}
