import "./aside.scss";
import Event, { ICommunityEvent } from "../event/Event";
import Activity, { IActivity } from "../activity/Activity";

const communityEventArray: ICommunityEvent[] = [
  {
    event_id: 1,
    date: "2023-08-05",
    name: "Photo Meetup",
    location: "Zandvoort",
  },
  {
    event_id: 2,
    date: "2023-09-24",
    name: "Dam Gallery",
    location: "Amsterdam",
  },
];

const activityArray: IActivity[] = [
  {
    activity_id: 1,
    profile_pic: "i2.jpg",
    name: "Hanna",
    event: "added a new shot",
  },
  {
    activity_id: 2,
    profile_pic: "i3.jpg",
    name: "Lucas",
    event: "added a new shot",
  },
];

const Aside = () => {
  return (
    <aside>
      <div className="asidecontainer">
        <section className="events">
          <span className="menuTitle">COMMUNITY EVENTS</span>
          {communityEventArray.map((event, index) => {
            return (
              <Event
                key={index}
                date={event.date}
                name={event.name}
                location={event.location}
              />
            );
          })}
        </section>

        <section className="activity">
          <span className="menuTitle">RECENT ACTIVITY</span>
          {activityArray.map((activity, index) => {
            return (
              <Activity
                key={index}
                profile_pic={activity.profile_pic}
                name={activity.name}
                event={activity.event}
              />
            );
          })}
        </section>

        <section className="profilestats">
          <span className="menuTitle">PROFILE STATS</span>
          <div className="statsContainer">
            <div className="user">
              <div className="icon">icon</div>
              <div className="details">details</div>
            </div>
            <div className="stats">
              <div className="followers">followers</div>
              <div className="folowing">following</div>
              <div className="posts">posts</div>
            </div>
          </div>
        </section>
      </div>
    </aside>
  );
};

export default Aside;
