import React from "react";
import { Colors, Separator } from "../../../styles/globalStyles";
import {
  Card,
  CardHeader,
  CardSummary,
  CardTitle,
  Tag,
  Tags,
} from "./portfolioStyles";
import { AiOutlineFolder, AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";

export const PortfolioCard = ({ data }) => {
  return (
    <Card>
      <CardHeader>
        <AiOutlineFolder
          style={{ marginRight: "auto" }}
          size={50}
          color={Colors.teal}
        />
        <a
          style={{ display: data.links.gitHub == "" && "none" }}
          href={data.links.gitHub}
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub size={25} color={Colors.white} />
        </a>
        <a href={data.links.project} target="_blank" rel="noreferrer">
          <BiLinkExternal size={25} color={Colors.white} />
        </a>
      </CardHeader>
      <Separator gap={"50px"} />
      <CardTitle inconsolata>{data.title}</CardTitle>
      <Separator />
      <CardSummary smaller>{data.summary}</CardSummary>
      <Separator gap={"40px"} />
      <Tags>
        {data.tags &&
          data.tags.map((tag, index) => <Tag key={index}>{tag}</Tag>)}
      </Tags>
    </Card>
  );
};
