import React, { useEffect, useState } from 'react';
import './Home.css'
import HomeCategory from './HomeCategory';

const Home = () => {

    const [category, setCategory] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/room-categories')
            .then(res => res.json())
            .then(data => setCategory(data))
    })


    return (
        <div>

            <div className="hero mt-28 mb-28">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="data:image/jpeg;base64,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" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut M<br></br> assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>
            {/* hero section  */}


            {/* slider section  */}
            <div>
                <div className="carousel w-full slider">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://img.freepik.com/free-photo/empty-light-pink-wall-ai-generated-image_587448-1460.jpg?size=626&ext=jpg&ga=GA1.1.1426710312.1687867090&semt=ais_ai_generated" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://img.freepik.com/free-photo/flowers-primroses-beautiful-blue-background-macro-ai-generated-image_587448-1341.jpg?size=626&ext=jpg&ga=GA1.1.1426710312.1687867090&semt=ais_ai_generated" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://img.freepik.com/free-photo/light-airy-shadow-wall-light-gray-blue-ai-generated-image_587448-1479.jpg?size=626&ext=jpg&ga=GA1.1.1426710312.1687867090&semt=ais_ai_generated" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://img.freepik.com/free-photo/80s-blur-branding-brochure-contemporary-effect-fluid-futuristic-gradient-grain-grunge_272375-2948.jpg?size=626&ext=jpg&ga=GA1.1.1426710312.1687867090&semt=ais_ai_generated" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                {
                    category.map(catagory => <HomeCategory
                        key={catagory.id}
                        catagory={catagory}
                    ></HomeCategory>)
                }
            </div>
        </div>
    );
};

export default Home;