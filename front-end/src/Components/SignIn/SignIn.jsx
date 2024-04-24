import React from 'react'
import '../../assets/styles/style.css'
function SignIn() {
  return (
    <div>
        <div id="wrapper">
            <div id="page" className="pt-40">
                <div className="tf-section-2 pt-60 widget-box-icon">
                <div className="themesflat-container w920">
                    <div className="row">
                    <div className="col-md-12">
                        <div className="heading-section-1">
                        <h2 className="tf-title pb-16">Login</h2>
                        <p className="pb-40">Get started today by entering just a few details</p>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="widget-login">
                        <form id="commentform" className="comment-form">
                            <fieldset className="email">
                            <label>Email *</label>
                            <input type="email" id="email" placeholder="mail@website.com" name="email" tabIndex={2} defaultValue aria-required="true" required />
                            </fieldset>
                            <fieldset className="password">
                            <label>Password *</label>
                            <input className="password-input" type="password" id="password" placeholder="Min. 8 character" name="password" tabIndex={2} defaultValue aria-required="true" required />
                            <i className="icon-show password-addon" id="password-addon" />
                            </fieldset>
                            <div className="btn-submit mb-30">
                            <a href="market.html" className="tf-button style-1 h50 w-100" type="submit">Login<i className="icon-arrow-up-right2" /></a>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>

    </div>
  )
}

export default SignIn