import React from 'react'
import NavBar from '../NavBar/NavBar'
import logo from "../../assets/images/logo/logo.png"
import "../../assets/styles/style.css"
function Maintenance() {
  return (
    <div>
          <div id="wrapper  maintain ">
            <div className="relative">

              <a href="/" className=''>
                <img src={logo} alt=""  className='w190 absolute z-1 logoMainImg' />
              </a>
            </div>

          <div className="widget-bg-line">
                            <div className="wraper">
                                <div className="bg-grid-line y top ">
                                    <div className="bg-line" />
                                </div>
                                <div className="bg-grid-line x left ">
                                    <div className="bg-line" />
                                </div>
                                <div className="bg-grid-line y bottom ">
                                    <div className="bg-line" />
                                </div>
                                <div className="bg-grid-line x right ">
                                    <div className="bg-line" />
                                </div>
                           
                            </div>
              </div>
            
            <div className="maintenance-page ">


              <div className="flex flex-column gap30">

              <div className="relative text-center items-center justify-center">

                      <div className="maintenance  text-center ">
                        <p className='maintain-h'>WebSite Is Under </p>
                        <h1 className='pt-2'>
                          Maintenance
                        </h1>
                      </div>


                      <p className='p-0 m-0 maintain-q'>We’re sorry our staff is still working on the issue for better experience </p>

                      <div className="btn-container  mb-5">

                      </div>
                          <div className="box-button">
                                <a href="/" className="tf-button style-1 active w216 h50 ">Go Home<i className="icon-arrow-up-right2 ml-3" /></a>
                                
                                <a href="/" className="tf-button  style-1 w216  h50 ">Back To Home<i className="icon-arrow-up-right2 ml-3" /></a>
                          </div>
                          
              </div>
              <div className="widget-social  flex justify-center">
                              <ul className="flex">
                                  <li><a href="/" className="icon-facebook" /></li>
                                  <li><a href="/" className="icon-twitter" /></li>
                                  <li><a href="/" className="icon-vt" /></li>
                                  <li><a href="/" className="icon-tiktok" /></li>
                                  <li><a href="/" className="icon-youtube" /></li>
                              </ul>
                  </div>
              </div>

          </div>
                       
        </div>

    </div>
  )
}

export default Maintenance