import React from 'react'

export default function Blog() {
  return (
    <div className='container mt-5'>
      <div className="row d-flex justify-content-center">
        <div className="col-md-4 pe-md-5 text-md-start text-center">
          <h4>
            Main Heading Of The Blog 
          </h4>
          <div className='rounded-circle m-md-0 m-auto' style={{height:"150px",width:"150px"}} ><img className='w-100 h-100 rounded-circle object-fit-fill' src={require("../assets/card-2.jpg")} alt=""/></div>
          <p className='mt-2'><i><b>Author:</b>  John Johnny</i></p>
        </div>
        <div className=" offset-md-2 col-md-6">
          <p>
             <b>Blog Description:</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, sed dolor nostrum modi cum quam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, non reprehenderit maiores officiis delectus voluptatem inventore libero repellendus numquam praesentium ducimus voluptate eius ea beatae harum illo nesciunt! Provident, mollitia molestias accusantium corrupti adipisci perferendis similique non sequi expedita dolorum.
          </p>
        </div>
        <h4>Blog Title 1</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptates minus at, libero rem labore eius
           natus vero ipsa. Aliquam esse assumenda at veniam sequi debitis autem optio, voluptate quae 
           quaerat, ex, ea itaque cumque iusto cum nam pariatur hic dignissimos. Tempora eaque sint omnis, 
           porro nulla provident? Minima vero rerum labore sequi veritatis neque magni impedit mollitia
            recusandae nulla facere rem optio corporis, et deserunt officiis, nam itaque quos perspiciatis!
             Ratione excepturi sequi et ut impedit quasi quis, ex nisi minima incidunt. Voluptatem perferendis
              totam veritatis asperiores eligendi, itaque cumque porro, iste modi eaque numquam hic ducimus.
               Neque recusandae vitae quam unde? Eius neque repellendus rem sequi unde necessitatibus deleniti,
                ea molestiae nisi voluptates cupiditate labore consequuntur reprehenderit animi magnam itaque
                 sapiente esse libero culpa nostrum doloremque, maiores aliquam ab? Nam, dolores inventore
                  mollitia temporibus quos facilis alias voluptatem minus nobis a fuga et quidem ratione non,
                   sequi ad harum tenetur necessitatibus sunt veniam autem accusamus facere? Qui, voluptatum ad
                    consectetur facilis, reprehenderit praesentium consequatur ratione laboriosam ipsam 
                    voluptate impedit esse corporis, numquam reiciendis incidunt. Recusandae dolores praesentium
                     quia adipisci quae magnam est, laudantium ex quidem beatae, deleniti quam mollitia, autem 
                     voluptate voluptatem cupiditate error minima voluptatibus vitae. Atque.</p>
        <div style={{ maxWidth: "400px", maxHeight: "400px" }} className='text-center'>
          <img className='w-100' src={require("../assets/md-1.jpg")} alt="" />
          <small><i>Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam doloribus modi odio itaque! Voluptate, aspernatur quidem debitis eveniet iste ullam!</i></small>
        </div>
        <h4>Blog Title 2</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptates minus at, libero rem labore eius
           natus vero ipsa. Aliquam esse assumenda at veniam sequi debitis autem optio, voluptate quae 
           quaerat, ex, ea itaque cumque iusto cum nam pariatur hic dignissimos. Tempora eaque sint omnis, 
           porro nulla provident? Minima vero rerum labore sequi veritatis neque magni impedit mollitia
            recusandae nulla facere rem optio corporis, et deserunt officiis, nam itaque quos perspiciatis!
             Ratione excepturi sequi et ut impedit quasi quis, ex nisi minima incidunt. Voluptatem perferendis
              totam veritatis asperiores eligendi, itaque cumque porro, iste modi eaque numquam hic ducimus.
               Neque recusandae vitae quam unde? Eius neque repellendus rem sequi unde necessitatibus deleniti,
                ea molestiae nisi voluptates cupiditate labore consequuntur reprehenderit animi magnam itaque
                 sapiente esse libero culpa nostrum doloremque, maiores aliquam ab? Nam, dolores inventore
                  mollitia temporibus quos facilis alias voluptatem minus nobis a fuga et quidem ratione non,
                   sequi ad harum tenetur necessitatibus sunt veniam autem accusamus facere? Qui, voluptatum ad
                    consectetur facilis, reprehenderit praesentium consequatur ratione laboriosam ipsam 
                    voluptate impedit esse corporis, numquam reiciendis incidunt. Recusandae dolores praesentium
                     quia adipisci quae magnam est, laudantium ex quidem beatae, deleniti quam mollitia, autem 
                     voluptate voluptatem cupiditate error minima voluptatibus vitae. Atque.</p>
</div>
    </div>
  )
}
