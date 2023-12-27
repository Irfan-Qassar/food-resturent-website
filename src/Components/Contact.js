import React from 'react'

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h1 className="heading">
        <span>contact</span> us
      </h1>

      <div className="row">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28020.001347740923!2d77.377001!3d28.614768!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce58d77270487%3A0x114b1a3ce35c3e93!2sNavix%20Consultancy%20Services!5e0!3m2!1sen!2sin!4v1685425439154!5m2!1sen!2sin"
    
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>

        <form>
          <h3>get in touch</h3>
          <div className="inputBox">
            <span className="fas fa-user"></span>
            <input type="text" placeholder="name" />
          </div>
          <div className="inputBox">
            <span className="fas fa-envelope"></span>
            <input type="email" placeholder="email" />
          </div>
          <div className="inputBox">
            <span className="fas fa-phone"></span>
            <input type="number" placeholder="number" />
          </div>
          <input type="submit" value="contact now" className='btn' />
        </form>
      </div>
    </section>
  );
}

export default Contact