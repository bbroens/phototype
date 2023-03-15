import React from "react";
import "./activity.scss";

type ActivityProps = {
  profile_pic: string;
  name: string;
  event: string;
};

const Activity = ({ profile_pic, name, event }: ActivityProps) => {
  return (
    <div className="activityItem">
      <img src={`/${profile_pic}`} alt="Profile picture" />
      <span>
        <strong>{name}</strong> {event}.
      </span>
    </div>
  );
};

export default Activity;
