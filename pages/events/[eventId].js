import React, { Fragment } from "react";
import { useRouter } from "next/router";

import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import { getEventById } from "../../dummy-data";

const EventId = () => {
  const route = useRouter();
  const eventId = route.query.eventId;
  const event = getEventById(eventId);
  if (!event) {
    <p>No Event Found!</p>;
  }
  return (
    <Fragment>
      <EventSummary></EventSummary>
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      ></EventLogistics>
      <EventContent>
        <p>{event?.description}</p>
      </EventContent>
    </Fragment>
  );
};

export default EventId;
