import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../dummy-data";

const Home = () => {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={featuredEvents}></EventList>
    </div>
  );
};

export default Home;
