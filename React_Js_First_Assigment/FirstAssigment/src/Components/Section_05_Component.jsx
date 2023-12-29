import Marget from "../assets/img/testimonials-1.jpg";
import Fred from "../assets/img/testimonials-2.jpg";
import Sarah from "../assets/img/testimonials-3.jpg";

const Section_05_Component = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>
        What people are saying...
      </h1>
      <div className="Section_05_main">
        <div style={{ marginTop: "50px" }}>
          <br />
          <div className="margret">
            <img
              style={{ width: "150px", borderRadius: "50%" }}
              src={Marget}
              alt=""
            />
            <h1>Margert E.</h1>
            <br />
            <p>"This is fantastic! Thanks so much guys!"</p>
          </div>
        </div>
        <div style={{ marginTop: "50px" }}>
          <br />
          <div className="margret">
            <img
              style={{ width: "150px", borderRadius: "50%" }}
              src={Fred}
              alt=""
            />
            <h1>Fred S.</h1>
            <br />
            <p>
              "Bootstrap is amazing.l've been using it
              <br />
              to create lots of super nice landing
              <br />
              pages"
            </p>
          </div>
        </div>
        <div style={{ marginTop: "50px" }}>
          <br />
          <div className="margret">
            <img
              style={{ width: "150px", borderRadius: "50%" }}
              src={Sarah}
              alt=""
            />
            <h1>Sarah W.</h1>
            <br />
            <p>
              "Thanks so much for making these free
              <br />
              resources available to us!"
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export { Section_05_Component };
