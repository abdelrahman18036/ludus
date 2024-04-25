import React from 'react'
import NavBar from '../NavBar/NavBar'
import '../../assets/styles/style.css'
function Err404() {
return (
    <div>
        <NavBar />
        <div id="wrapper">
            <div className="section-404-page relative">

                    <div className="content flex justify-center items-center">
                        <p>4</p>
                        <span className='tf-color'>0</span>
                        <p>4</p>
                    </div>
                    <h2>Oh No... We Lost This Page</h2>


                    <p className='p-0 m-0'>We searched everywhere but couldn’t find what you’re looking for. </p>
                    <p className='py-3 m-0'> Let’s find a better place for you to go.</p>

                    <div className="btn-container  my-5">

                    </div>
                    <div className="flat-button w-100 ">
                        <a href="/" className="tf-button  h50 ">Go Home<i className="icon-arrow-up-right2 ml-3" /></a>

                    </div>
                        
            </div>

        </div>

    </div>
)
}

export default Err404