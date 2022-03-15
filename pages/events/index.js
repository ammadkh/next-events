import { Fragment } from "react";
import EventList from "../../components/events/event-list";
import { getAllEvents } from "../../dummy-data";

const AllEventPage = () => {
  const events = getAllEvents();
  return (
    <Fragment>
      <EventList items={events}></EventList>
    </Fragment>
  );
};

export default AllEventPage;
