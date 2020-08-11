import React from "react";

import { Container, Main, LeftSide, RightSide, Repos } from "./styles";
import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";

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
        <RightSide>
          <Repos>
            <h2>Random repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <RepoCard
                  key={n}
                  username={"gab618"}
                  reponame={"bolao-cblol-frontend"}
                  description={
                    "Uma plataforma para palpitar os resultados do CBLOL com os amigos"
                  }
                  language={n % 3 === 0 ? "JavaScript" : "TypeScript"}
                  stars={7}
                  forks={4}
                />
              ))}
            </div>
          </Repos>
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
