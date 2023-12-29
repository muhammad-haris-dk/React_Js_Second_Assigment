import image from "../assets/img/bg-showcase-1.jpg";
const Section_02_Components = () => {
  return (
    <div className="Section_02_center">
      <div className="Section_02_Left">
      <div style={{marginLeft: "35px"}}>
        <h1>Fully Responsive Design</h1>
        <br />
        <p>
          When you use a theme created by Start Bootstrap, you know that the
          theme
          <br />
          will look great on any device,whether it's a phone,tablet, or desktop
          the
          <br />
          page will behave responively!
        </p>
      </div>
      </div>
      <div className="Section_02_Right">
        <img className="Section_02_Image" src={image} alt="" />
      </div>
    </div>
  );
};

export { Section_02_Components };
