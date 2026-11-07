import './Content.css'

function Content() {
    return(
        <>
        <div className='box_house'>
           
                 <div className='first_box'>
                <div className='text_box'>
                    <h1>Find Your Dream Home</h1>
                    <p>Explore our curated selection of exquisite properties meticulously tailored to your unique dream home vision</p>
                    <button>Sign up</button>
                </div>
                <div className='image_box'></div>
            </div>
            <div className='two_box'>
                <div className='input_box'>
                    <input type='text' className='input_location' placeholder='Location' />
                    <input type='text' className='input_type' placeholder='Type' />
                    <input type='text' className='input_price' placeholder='Price Range' />
                </div>
                <button>Sign Up</button>
            </div>
            </div>
           
           <div className='statistics'>
                <div className='statistics_left'>
                    <img src='./images/luxury.png' />
                </div>
                <div className='statistics_right'>
                    <h1>We Help You To Find Your Dream Home</h1>
                    <p>From cozy cottages to luxurious estates, our dedicated team guides you through every step of the journey, ensuring your dream home becomes a reality</p>
                    <div className='ratings'>
                        <div>
                            <h1>8K+</h1>
                            <p>Houses Available</p>
                        </div>
                        <div>
                            <h1>6K+</h1>
                            <p>Houses Sold</p>
                        </div>
                        <div>
                            <h1>2K+</h1>
                            <p>Trusted Agents</p>
                        </div>
                    </div>
                </div>
           </div>

        
        </>
    )
}

export default Content