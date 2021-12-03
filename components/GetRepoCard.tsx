import { FC } from "react";
import getLatestRepos from "../utilities/getLatestRepos";

type props = {
  name: string;
  description: string;
  clone_url: string;
};
const GithubRepoCard: FC<props> = ({ name, description, clone_url }) => {
  return (
    <div className="github-repo">
      <h1>{name}</h1>
      <p>{description}</p>
      <a href={clone_url}>
        <p>View Repository</p>
      </a>
    </div>
  );
};
