import React from 'react';
import { blog } from '../Data';


const Blog = () => {
  return (
    <section className="blog" id="blog">
      <h1 className="heading">
        our <span>blog</span>
      </h1>
      <div className="box-container">
        {blog.map((item, index) => (
          <div className="box" key={index}>
            
            <div className="image">
              <img src={item.img} alt="" />
            </div>

            <div className="content">
            <a href="#" className="title"> tasty and refreshing spices</a>
            <span>by admin / 25st december, 2023 </span>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, reiciendis 
            facere cupiditate, quis quae assumenda soluta sint nobis itaque sed harum enim 
            inventore id debitis eos! Fugiat excepturi porro distinctio.</p>

            <a href="#" className='btn'>read more</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog