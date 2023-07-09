import React from 'react';

const HomeCategory = ({ catagory }) => {
    const { title, discreption, img, bed, price, person } = catagory
    return (



            // <div className=" card-compact w-96 bg-base-100 shadow-xl">
            //     <figure><img src={img} alt="Shoes" /></figure>
            //     <div className="card-body">
            //         <h2 className="card-title">{title}</h2>
            //         <p>{discreption}</p>
            //         <div className="card-actions justify-center">
            //             <button className="btn btn-primary">Book Now</button>
            //         </div>
            //     </div>
            // </div>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p>{discreption}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Book Now</button>
    </div>
  </div>
</div>


    );
};

export default HomeCategory;