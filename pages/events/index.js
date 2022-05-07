import { Fragment } from "react";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";
import { getAllEvents } from "../../dummy-data";
import { useRouter } from "next/router";

const AllEventPage = () => {
  const router = useRouter();
  const events = getAllEvents();

  const findEventHandler = (years, month) => {
    const fullPath = `/events/${month}/${years}`;
    router.push(fullPath);
  };
  return (
    <Fragment>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={events}></EventList>
    </Fragment>
  );
};

export default AllEventPage;
