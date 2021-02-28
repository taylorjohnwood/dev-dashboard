import React from 'react'
import CalendarWidget from '../Widgets/CalendarWidget/CalendarWidget';
import PullRequestWidget from '../Widgets/PullRequestWidget/PullRequestWidget';
import StoryOverviewWidget from '../Widgets/StoryOverviewWidget/StoryOverviewWidget';
import CleanCodeWidget from '../Widgets/CleanCodeQuoteWidget/CleanCodeWidget';

/**
 * The Core Container is the central component of the dashboard. All widgets
 * in the dashboard are placed inside this container.
 */
export const CoreContainer = () => {
	const topThreeWidgetStyle = {
		margin: "10px",
		width: "33%"
	}
	return (
		<div className="CoreContainer" style={{ height: "90vh" }}>
			<div className="topThree" style={{ overflow: "auto", display: "flex", height: "70%" }}>
				<div style={topThreeWidgetStyle} className="PullRequest-Widget">
					<PullRequestWidget />
				</div>
				<div style={topThreeWidgetStyle} className="Calendar-Widget">
					<CalendarWidget />
				</div>
				<div style={topThreeWidgetStyle} className="ActivityLog-Widget">
					<StoryOverviewWidget />
				</div>
			</div>
			<div style={{ height: "30%", padding: "10px" }} className="cleanCodeQuote">
				<CleanCodeWidget />
			</div>
		</div>
	)
}
