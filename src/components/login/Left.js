import styled from "styled-components";
import Tilt from "react-tilt";

const LoginLeftContainer = styled.div`
  width: 310px;
`;
const LeftImg = styled.img`
  max-width: 100%;
`;

const Left = () => {
  return (
    <Tilt className="Tilt" options={{ max: 25 }}>
      <LoginLeftContainer>
        <LeftImg src="auth.png" alt="Login Image" />
      </LoginLeftContainer>
    </Tilt>
  );
};

export default Left;
