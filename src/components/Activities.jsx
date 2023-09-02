import React from "react";

const Activities = () => {
  return (
    <div>
      <section id="activities__part">
        <div className="container">
          <div className="heading">
            <h2>Recent Activities</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac a,
              eget tellus et, viverra mauris dignissim morbi in.
            </p>
          </div>
          <div className="cards">
            <div className="card">
              <img src="/src/assets/activities-1.png" alt="activities-1" />
              <div className="card-details">
                <p>
                  <span>Released: 24 May 2020</span>
                </p>
                <h4>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac
                  a, eget tellus et, viverra mauris dignissim morbi in...
                </p>
                <a href="#">Read more</a>
              </div>
            </div>
            <div className="card">
              <img src="/src/assets/activities-2.png" alt="activities-1" />
              <div className="card-details">
                <p>
                  <span>Released: 24 May 2020</span>
                </p>
                <h4>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac
                  a, eget tellus et, viverra mauris dignissim morbi in...
                </p>
                <a href="#">Read more</a>
              </div>
            </div>
            <div className="card">
              <img src="/src/assets/activities-3.png" alt="activities-1" />
              <div className="card-details">
                <p>
                  <span>Released: 24 May 2020</span>
                </p>
                <h4>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac
                  a, eget tellus et, viverra mauris dignissim morbi in...
                </p>
                <a href="#">Read more</a>
              </div>
            </div>
          </div>
          <button className="btn">view all</button>
        </div>
      </section>
    </div>
  );
};

export default Activities;
