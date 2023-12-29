import image from "../assets/img/bg-showcase-3.jpg";

const Section_04_Component = () => {
  return (
    <div className="Section_04_main">
      <div className="Section_04_Left">
        <div  style={{marginLeft: "35px"}}>
        <h1>Easy to Use & Customize</h1>
        <br />
        <p>
          Landing Page is just HTML and CSS with a splash of SCSS for users who
          demand some
          <br />
          deeper customization options. Out of the box,just add your content and
          images,and
          <br />
          your new landing page will be ready to go!
        </p>
        </div>
      </div>
      <div className="Section_04_Right">
        <img style={{ width: "100%", height: "100%" }} src={image} alt="" />
      </div>
    </div>
  );
};

export { Section_04_Component };
