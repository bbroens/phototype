import "./aside.scss";
import Event, { ICommunityEvent } from "../event/Event";
import Activity, { IActivity } from "../activity/Activity";
import { dummyCommunityEvents, dummyRecentActivity } from "../../dummydata";

//? DUMMY DATA
let communityEventArray: ICommunityEvent[] = [];
let activityArray: IActivity[] = [];

if (import.meta.env.VITE_USE_DUMMY_DATA === "true") {
  communityEventArray = dummyCommunityEvents;
  activityArray = dummyRecentActivity;
}

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
