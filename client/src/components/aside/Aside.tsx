import "./aside.scss";

const Aside = () => {
  return (
    <aside>
      <div className="asidecontainer">
        <section className="events">events</section>
        <section className="activity">activity</section>
        <section className="profilestats">
          <div className="statsContainer">icon</div>
          <div className="stats">stats</div>
        </section>
      </div>
    </aside>
  );
};

export default Aside;
