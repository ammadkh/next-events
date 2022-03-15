import Image from "next/image";
import AddressIcon from "../icons/address-icon";
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import classes from "./event-item.module.css";

const EventItem = ({ item }) => {
  const readableDate = item.date.toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numerical",
  });
  const readableAddress = item.location.replace(",", "\n");
  return (
    <li className={classes.item}>
      <div className={classes.img}>
        <Image
          layout="fill"
          objectFit="cover"
          src={"/" + item.image}
          alt={item.description}
        />
      </div>
      <div className={classes.content}>
        <div>
          <h2>{item.title}</h2>
          <div className={classes.date}>
            {DateIcon()}
            <time>{readableDate}</time>
          </div>
          <div className={classes.address}>
            {AddressIcon()}
            <address>{readableAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={`/events/${item.id}`}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
