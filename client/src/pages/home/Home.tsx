import "./home.scss";
import Share from "../../components/cards/share/Share";
import Posts from "../../components/posts/Posts";

const Home = () => {
  return (
    <main>
      <Share />
      <Posts />
    </main>
  );
};

export default Home;
