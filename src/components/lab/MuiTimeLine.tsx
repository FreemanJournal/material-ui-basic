import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import React from "react";

export default function MuiTimeLine() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent color={"text.secondary"}>
          09.30 AM
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Slot A</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color={"text.secondary"}>
          10.00 AM
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Slot b</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color={"text.secondary"}>
          10.30 AM
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
        </TimelineSeparator>
        <TimelineContent>Slot c</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
