import React from "react";

import { Container, Main, LeftSide, RightSide } from "./styles";
import ProfileData from "../../components/ProfileData";

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username={"gab618"}
            name={"Gabriel"}
            avatarUrl={
              "https://avatars0.githubusercontent.com/u/24815192?s=460&u=48532a8215af22a51335cad56601ffa948b2a89e&v=4"
            }
            followers={3333}
            following={777}
            company={"Panela Craft Inc."}
            location={"São Paulo, Brazil"}
            email={"knuckles4x@gmail.com"}
            blog={"linkedin.com/in/grocha97"}
          />
        </LeftSide>
        <RightSide></RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
