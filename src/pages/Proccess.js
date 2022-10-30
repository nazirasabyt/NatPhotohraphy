import React, { Fragment } from "react";
import Footer from "../components/layout/Footer";
import NavBar from "../components/layout/Navbar";

const Proccess = () => {
  return (
    <Fragment>
      <NavBar />
      <div className="experience">
        <div className="experience__container">
          <div className="experience__description">
            {" "}
            <h1>The Experience</h1>
            <p>
              Most of my experiences take about one hour. A desert session might
              take up to one and a half hour because of the traveling between
              locations. In-home newborn sessions take about an hour to one and
              a half hour because I like to give mums time to feed or change
              nappies if required and I don&apos;t want to rush that at all!
            </p>
            <p>
              I take a more natural and authentic approach to photographs so I
              want you to wear clothes that you are comfortable in and that look
              timeless. Props are quite trendy but with any trend they pass and
              so the photos start looking dated very quickly. I encourage that
              you don&apos;t bring any props but if you would like to include
              the kids&apos; favorite toys or an heirloom blanket, feel free to
              bring those along!
            </p>
          </div>

          <div className="experience__steps">
            <div className="experience__steps-item">
              <img />
              <h3>Step 1</h3>
              <p>
                Reach out through message or call to set up date, time and
                location for shoot
              </p>
            </div>
            <div className="experience__steps-item">
              <img />
              <h3>Step 2</h3>
              <p>
                Fill out the booking form and pay 50% retainer to confirm
                booking
              </p>
            </div>
            <div className="experience__steps-item">
              <img />
              <h3>Step 3</h3>
              <p>Pay the remaining 50% amount on the photoshoot day</p>
            </div>
            <div className="experience__steps-item">
              <img />
              <h3>Step 4</h3>
              <p>
                Selection of photos within a week. Get edited photos within 2
                weeks of selection
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default Proccess;
