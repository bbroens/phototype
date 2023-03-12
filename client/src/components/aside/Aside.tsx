import React from "react";
import "./aside.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
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
  const { currentUser } = useContext(AuthContext);

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
              <div className="icon">
                <img
                  src={`/${currentUser.profile_img}`}
                  alt="Profile picture"
                />
              </div>
              <div className="details">
                <div className="name">{`${currentUser.firstname} ${currentUser.lastname}`}</div>
                <div className="handle">@{currentUser.handle}</div>
              </div>
            </div>
            <div className="stats">
              <div className="followers">
                <strong>247</strong>
                <br />
                Followers
              </div>
              <div className="folowing">
                <strong>86</strong>
                <br />
                Following
              </div>
              <div className="posts">
                <strong>212</strong>
                <br />
                Posts
              </div>
            </div>
          </div>
        </section>
      </div>
    </aside>
  );
};

export default Aside;
