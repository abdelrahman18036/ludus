import React from 'react'
import phone from '../../assets/images/box-icon/phone.png'
import email from '../../assets/images/box-icon/email.png'
import address from '../../assets/images/box-icon/address.png'

import "../../assets/styles/style.css"
function Information() {
  return (
    <div className="tf-section-2 widget-box-icon">
    <div className="themesflat-container">
        <div className="row">
            <div className="col-md-12">
                <div className="heading-section-1">
                    <h2 className="tf-title pb-20">Information</h2>
                    <p className="pb-40">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
            </div>
            <div data-wow-delay="0s" className="wow fadeInUp col-md-4">
                <div className="box-icon-item">
                    <img src={address} alt="alt" />
                    <div className="title"><a href="/">Office address</a></div>
                    <p>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
                </div>
            </div>
            <div data-wow-delay="0.1s" className="wow fadeInUp col-md-4">
                <div className="box-icon-item">
                    <img src={email} alt="alt" />
                    <div className="title"><a href="/">Email</a></div>
                    <p>TeamX@gmail.com
                    TeamX@support.com</p>
                </div>
            </div>
            <div data-wow-delay="0.2s" className="wow fadeInUp col-md-4">
                <div className="box-icon-item">
                    <img src={phone} alt="alt" />
                    <div className="title"><a href="/">Phone number</a></div>
                    <p>(316) 555-0116 <br />
                        (219) 555-0114</p>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Information