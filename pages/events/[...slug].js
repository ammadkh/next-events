import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";

const FilteredEvents = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [year, month] = slug;
  const events = getFilteredEvents({ month: +month, year: +year });
  return (
    <div>
      <h3>Filtered Events</h3>
      <EventList items={events}></EventList>
    </div>
  );
};

export default FilteredEvents;
