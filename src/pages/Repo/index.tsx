import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Breadcrumb,
  Stats,
  RepoIcon,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from "./styles";

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />

        <Link className="username" to={"/gab618"}>
          gab618
        </Link>

        <span>/</span>

        <Link className="reponame" to={"/gab618/bolao-cblol"}>
          bolao-cblol
        </Link>
      </Breadcrumb>

      <p>Uma plataforma para palpitar os resultados do CBLOL com os amigos</p>

      <Stats>
        <li>
          <StarIcon />
          <b>7</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={"https://github.com/gab618/bolao-cblol"}>
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
