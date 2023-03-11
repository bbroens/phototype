import "./activity.scss";
export interface IActivity {
  activity_id: number;
  profile_pic: string;
  name: string;
  event: string;
}

type Props = {
  profile_pic: string;
  name: string;
  event: string;
};

const Activity = ({ profile_pic, name, event }: Props) => {
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
