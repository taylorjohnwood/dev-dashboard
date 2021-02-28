import { Box, Typography } from '@material-ui/core'
import { createOAuthAppAuth } from '@octokit/auth-oauth-app';
import React from 'react'
import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
	authStrategy: createOAuthAppAuth,
	auth: {
		appId: "1a90f402b77ae117d0d5",
		privateKey: "6e2e77fac9acd5dba28c4197aa481106a2e76696"
	},
})

const PullRequestWidget = () => {

	const widgetStyle = {
		backgroundColor: "lightBlue",
		height: "100%",
		padding: "5px"
	}

	console.log(octokit.pulls.get(
		{
			owner: "taylorjohnwood",
			repo: "dev-dashboard"
		}
	))

	return (
		<Box style={widgetStyle}>
			<Typography variant="h5">
				Pull Requests
			</Typography>
		</Box>
	)
}

export default PullRequestWidget
