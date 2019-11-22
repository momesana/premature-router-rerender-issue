import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIssues } from "./selectors";

const IssueList = styled.ul`
  border: 2px solid #ccc;
  padding: 0;
`;

const StyledIssueListItem = styled.li`
  list-style-type: none;
  margin: 0;
  font-weight: bold;
  text-transform: capitalize;
  background-color: ${({ isOdd }) => (isOdd ? "#eee" : "#hhh")};
  padding: 0.75rem 0.5rem;
`;

export default function(props) {
  const issues = useSelector(getIssues);

  return (
    <IssueList>
      {issues.map(({ id, name }, idx) => (
        <StyledIssueListItem key={id} isOdd={idx % 2}>
          <Link to={`/issues/${id}`}>{name}</Link>
        </StyledIssueListItem>
      ))}
    </IssueList>
  );
}
