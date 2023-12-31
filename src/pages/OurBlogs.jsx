import React, { useState } from 'react'
import { Link } from 'react-router-dom';


export const OurBlogs = () => {
  const [expandedPosts, setExpandedPosts] = useState([]);

  const toggleExpand = (index) => {
    setExpandedPosts((prevExpandedPosts) => {
      const newExpandedPosts = [...prevExpandedPosts];
      newExpandedPosts[index] = !newExpandedPosts[index];
      return newExpandedPosts;
    });
  };

    const cardData = [
        {
          title: "Blog Title 1",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consequuntur!",
          
          imageSrc: require("../assets/md-1.jpg"),
        },
        {
          title: "Blog Title 1",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consequuntur!",
          
          imageSrc: require("../assets/video-2.jpg"),
        },
        {
          title: "Blog Title 1",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consequuntur!",
          
          imageSrc: require("../assets/video-3.jpg"),
        },
        {
          title: "Blog Title 1",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consequuntur!",
          
          imageSrc: require("../assets/contact-us.jpg"),
        },
      ];

      const blogPosts = [
        {
          title: "Understanding Common Cold Symptoms",
          description:
            "Learn about the symptoms of the common cold, including sneezing, runny nose, and congestion. Discover tips for prevention and treatment.",
        },
        {
          title: "Benefits of Regular Exercise for Heart Health",
          description:
            "Explore the positive impact of regular exercise on heart health. Find out how staying active can reduce the risk of cardiovascular diseases.",
        },
        {
          title: "Nutrition Tips for a Balanced Diet",
          description:
            "Discover essential nutrition tips for maintaining a balanced diet. Learn about the importance of including fruits, vegetables, and lean proteins in your meals.",
        },
        {
          title: "Managing Stress for Mental Well-being",
          description:
            "Learn effective strategies for managing stress and promoting mental well-being. Explore relaxation techniques and mindfulness practices.",
        },
      
      ];
      
      
      
      
      
  return (
    <div>

    <div className='container-lg pt-5'>
        <div className='blog_background_img d-flex justify-content-center align-items-end'>
            <h2 className='text-white mb-5'>
            Articles
            </h2>
        </div>

        <div className="container-lg">
            <div className="row my-5">
              <div className='col-md-7 '>
                <div className='d-flex flex-wrap justify-content-center  px-0'>

                {cardData.map((card, index) => (
                  <div key={index} className="col-11  col-sm-6" >
                    <div className="card border-0 h-100 p-2" style={{minHeight:"260px"}}>
                        <img width={"100%"} height={"100%"} className="card-img position-relative rounded-4" src={card.imageSrc} alt={`card image ${index}`} />
                        <div className='position-absolute rounded-4  bg-dark' style={{ opacity: "0.7", top: "7px", right: "7px", left: "7px", bottom: "7px" }}></div>
                     
                      <div className="card-img-overlay text-white d-flex flex-column justify-content-end  px-5 ">
                        <h5 className="card-title">{card.title}</h5>
                        <p className="card-text fs_14px" style={{ opacity: "0.8" }}>{card.description}</p>
                        
                      </div>
                    </div>
                  </div>
                ))}
                </div>
              </div>

              <div className='col-md-5 '>
                <h5 className='fw-bold ms-4'>
                  Recent articles
                </h5>
                <div className='shadow p-4 rounded-5'>

                <div>
                  {blogPosts.map((post, index) => (
                    <div className='p-3 border rounded-4 my-2' key={index} style={{backgroundColor:'#FAFAFA'}}>
                      <h6 className='h-color fw-bold'>{post.title}</h6>
                      <div>
                      <p className='fs_14px cu-color'>
                        {expandedPosts[index]
                          ? <p className='mb-0'>{post.description}</p>
                          : <p className='mb-0'>{post.description.slice(0, 50)}...</p>
                        }
                        <span
                          className='h-color fw-bold'
                          onClick={() => toggleExpand(index)}
                          style={{ cursor: 'pointer', }}
                        >
                          {expandedPosts[index] ? <Link style={{textDecoration:"none"}} to="/Blog">Read More</Link> : 'Read More'}
                        </span>
                      </p>
                    </div>
                    </div>
                  ))}
              </div>

                </div>

              </div>


            </div>
     </div>

    </div>
    </div>
  )
}
