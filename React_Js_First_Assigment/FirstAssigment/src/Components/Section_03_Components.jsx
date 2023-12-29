import codingImage from "../assets/img/bg-showcase-2.jpg";
const Section_03_Components = () => {
  return (
    <div className="Section_03_Main">
      <div className="Section_03_Image">
        <img style={{width: "100%", height: "100%"}} src={codingImage} alt="" />
      </div>
      <div className="Section_03_Right">
      <div style={{marginLeft: "35px"}}>
        <h1>Updated For Bootstrap 5</h1>
        <br />
        <p>Newly improved,and full of great utility classes, Bootstrap 5 is leading the way in
            <br />
            mobile responsive web development!All of the themes on Start Bootstrap are now 
            <br />
            using Bootstrap 5!
        </p>
      </div>
      </div>
    </div>
  );
};

export { Section_03_Components };
