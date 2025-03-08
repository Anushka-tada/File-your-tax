// section 3 of Home Page

import "./best_website.css";

const Best_Website = () => {
  return (
    <div className="section3 flex lg:flex-nowrap flex-wrap pt-16 mt-20 items-center justify-between gap-20 px-4 lg:px-24 pb-24">
      <img
        src="https://tax2win.in/assets-new/img/new-theme/india-map.svg"
        alt="Tax2win Income Tax"
        title="Tax2win Income Tax"
        width="553"
        height="621"
        className="hidden lg:block"
      />
      <div className="section3-text">
        <h1>Best income tax efiling website in India</h1>
        <p className="text-lg mb-9 mt-4">
          We have changed the way people do tax filing in India. We don’t just
          get your tax return filed within minutes but get you maximum refunds
          in the shortest time.
        </p>
        <div className="section3-boxes flex flex-wrap">
          <div className="section3-box flex items-center gap-3 mb-4">
            <img
              src="https://tax2win.in/assets-new/img/new-theme/rating.svg"
              alt="4.8 Star Service Rating"
              title="4.8 Star Service Rating"
              width="37"
              height="37"
              className="mb-8"
            />
            <div className="box-text">
              <h1>4.8</h1>
              <p>Star Service Rating</p>
            </div>
          </div>

          <div className="section3-box flex items-center gap-3 mb-4">
            <img
              src="https://tax2win.in/assets-new/img/new-theme/rating.svg"
              alt="4.8 Star Service Rating"
              title="4.8 Star Service Rating"
              width="37"
              height="37"
              className="mb-8"
            />
            <div className="box-text">
              <h1>1+ Million</h1>
              <p>Trusted Users</p>
            </div>
          </div>

          <div className="section3-box flex items-center gap-3">
            <img
              src="https://tax2win.in/assets-new/img/new-theme/rating.svg"
              alt="4.8 Star Service Rating"
              title="4.8 Star Service Rating"
              width="37"
              height="37"
              className="mb-8"
            />
            <div className="box-text">
              <h1>Top 25</h1>
              <p>Emerging Startup of Asia</p>
            </div>
          </div>

          <div className="section3-box flex items-center gap-3">
            <img
              src="https://tax2win.in/assets-new/img/new-theme/rating.svg"
              alt="4.8 Star Service Rating"
              title="4.8 Star Service Rating"
              width="37"
              height="37"
              className="mb-8"
            />
            <div className="box-text">
              <h1>Authorized</h1>
              <p>by Income Tax Department</p>
            </div>
          </div>
        </div>

        <div className="read-btn flex gap-2 mt-9">
          <h4 className="read-btn-text">Read More</h4>
          <img
            src="https://tax2win.in/assets-new/img/new-theme/b_ghost_arrow.svg"
            alt="Read More"
          />
        </div>
      </div>
    </div>
  );
};

export default Best_Website;
