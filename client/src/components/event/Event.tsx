import "./event.scss";
import { Link } from "react-router-dom";
export interface ICommunityEvent {
  event_id: number;
  date: string;
  name: string;
  location: string;
}

type Props = {
  date: string;
  name: string;
  location: string;
};

const Event = ({ date, name }: Props) => {
  const dateObj = new Date(date);

  return (
    <Link to="/">
      <div className="event">
        <time dateTime={date} className="icon">
          <div>{dateObj.toLocaleString("default", { month: "long" })}</div>
          <span>{dateObj.toLocaleString("default", { day: "numeric" })}</span>
        </time>
        <div className="details">
          <div className="name">{name}</div>
          <div className="location">location</div>
        </div>
      </div>
    </Link>
  );
};

export default Event;
