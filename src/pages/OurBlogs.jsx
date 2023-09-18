import React from 'react'

export const OurBlogs = () => {

    const cardData = [
        {
          title: "Blog Title 1",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consequuntur!",
          date: "9/12/2024 11:21 PM",
          imageSrc: require("../assets/blog-card-1.png"),
        },
        {
          title: "Blog Title 1",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consequuntur!",
          date: "9/12/2024 11:21 PM",
          imageSrc: require("../assets/blog-card-4.png"),
        },
        {
          title: "Blog Title 1",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consequuntur!",
          date: "9/12/2024 11:21 PM",
          imageSrc: require("../assets/blog-card-3.png"),
        },
        {
          title: "Blog Title 1",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consequuntur!",
          date: "9/12/2024 11:21 PM",
          imageSrc: require("../assets/blog-card-5.png"),
        },

        
        {
          title: "Blog Title 1",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consequuntur!",
          date: "9/12/2024 11:21 PM",
          imageSrc: require("../assets/blog-card-4.png"),
        },
        {
          title: "Blog Title 1",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consequuntur!",
          date: "9/12/2024 11:21 PM",
          imageSrc: require("../assets/blog-card-1.png"),
        },
        {
          title: "Blog Title 1",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consequuntur!",
          date: "9/12/2024 11:21 PM",
          imageSrc: require("../assets/blog-card-5.png"),
        },
        {
          title: "Blog Title 1",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consequuntur!",
          date: "9/12/2024 11:21 PM",
          imageSrc: require("../assets/blog-card-3.png"),
        },
      ];
      
  return (
    <div>

    <div className='container pt-3'>
        <div className='blog_background_img d-flex justify-content-center align-items-center'>
            <h2 className='text-white'>
               Our Blogs
            </h2>
        </div>

        <div className="container">
            <div className="row">
                {cardData.map((card, index) => (
                <div key={index} className="col-12 col-sm-8 col-md-6 col-lg-3">
                    <div className="card border-0">
                   
                      <img width={"100%"} className="card-img img-fluid" src={card.imageSrc} alt={`card image ${index}`} />
                    
                    <div className="card-img-overlay text-white d-flex flex-column justify-content-center px-5">
                        <h5 className="card-title">{card.title}</h5>
                        <p className="card-text fs_14px">{card.description}</p>
                        <p>{card.date}</p>
                    </div>
                    </div>
                </div>
                ))}
            </div>
     </div>

    </div>
    </div>
  )
}
