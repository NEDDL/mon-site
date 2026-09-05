import React from "react";
import { Colors, Paragraph, Separator } from "../../../styles/globalStyles";
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
        {data.links.gitHub && <a
          href={data.links.gitHub}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${data.title} on GitHub`}
        >
          <AiFillGithub size={25} color={Colors.white} />
        </a>}
        {data.links.project && <a href={data.links.project} target="_blank" rel="noreferrer" aria-label={`Visit ${data.title}`}>
          <BiLinkExternal size={25} color={Colors.white} />
        </a>}
      </CardHeader>
      <Separator gap={"24px"} />
      <CardTitle as="h3" inconsolata>{data.title}</CardTitle>
      <Paragraph smaller darker>{data.status}</Paragraph>
      <Separator />
      <CardSummary smaller>{data.summary}</CardSummary>
      {data.outcome && <>
        <Separator gap={"16px"} />
        <Paragraph smaller bold>{data.outcome}</Paragraph>
      </>}
      <Separator gap={"40px"} />
      <Tags>
        {data.tags &&
          data.tags.map((tag, index) => <Tag key={index}>{tag}</Tag>)}
      </Tags>
    </Card>
  );
};
