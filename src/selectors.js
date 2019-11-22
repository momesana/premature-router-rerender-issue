export const getIssues = state => state.issues;

const issueIdRegex = /.*\/issues\/(\d+)\/?/;

export const getIssue = state => {
  const { pathname } = state.router.location;
  const match = pathname.match(issueIdRegex);
  
  if (!match) {
    throw Error("pathname doesn't specify an id");
  }

  const issueId = match[1]
  return state.issues[issueId];
};
