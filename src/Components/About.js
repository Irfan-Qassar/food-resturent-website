import React from 'react';
import AboutImg from "../assets/images/about.jpg"

const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="heading">
        <span>about </span> us
      </h1>
      <div className="row">
        <div className="image">
          <img src={AboutImg} alt="" />
        </div>
        <div className="content">
          <h3>What Makes Our Food Special?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
            quisquam sunt quas reprehenderit modi doloribus voluptatibus libero
            eligendi quam nostrum, exercitationem, in tempora minus aliquam
            itaque quia doloremque maxime maiores. in tempora minus aliquam
            itaque quia doloremque maxime maiores.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
            numquam cum suscipit possimus pariatur exercitationem dolor facere
            nisi consequatur et rerum, accusantium ducimus ab aliquid ipsam
            perspiciatis velit dicta eum!
          </p>
          <a href="#" className="btn">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export default About