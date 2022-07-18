import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;
`;

const LogoContainer = styled.div`
 padding: 1rem;
`;

const ImgRounded = styled.img`
  border-radius: 50%;
  width: 50px;
`;

export { StyledHeader, ImgRounded, LogoContainer };
