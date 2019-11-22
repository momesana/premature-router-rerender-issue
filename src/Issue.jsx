import React from "react";
import { useSelector } from "react-redux";
import { getIssue } from "./selectors";
import styled from "styled-components";

const Title = styled.h1`
  text-transform: uppercase;
`;

export default function Issue() {
  const issue = useSelector(getIssue);

  return (
    <>
      <Title>{issue.name}</Title>
      <div>{issue.description}</div>
    </>
  );
}
