import { Box, Typography } from '@material-ui/core'
import React from 'react'

const PullRequestWidget = () => {

	const widgetStyle = {
		backgroundColor: "lightBlue",
		height: "100%",
		padding: "5px"
	}

	return (
		<Box style={widgetStyle}>
			<Typography variant="h5">
				Pull Requests
			</Typography>
		</Box>
	)
}

export default PullRequestWidget
