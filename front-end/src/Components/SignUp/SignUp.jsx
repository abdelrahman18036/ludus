import React from 'react'
import '../../assets/styles/style.css'
function SignUp() {
  return (
    <div>
      <div id="wrapper">
        <div id="page" className="pt-40">
          <div className="tf-section-2 pt-60 widget-box-icon">
            <div className="themesflat-container w920">
              <div className="row">
                <div className="col-md-12">
                  <div className="heading-section-1">
                    <h2 className="tf-title pb-16">Create you account</h2>
                    <p className="pb-40">Let’s get started with your 30 days free trial</p>
                  </div>
                </div>
                <div className="col-12">
                  <div className="widget-login">
                    <form id="commentform" className="comment-form">
                      <fieldset className="name">
                        <label>Name *</label>
                        <input type="text" id="name" placeholder="Your name*" name="name" tabIndex={2}  aria-required="true" required />
                      </fieldset>
                      <fieldset className="email">
                        <label>Email *</label>
                        <input type="email" id="email" placeholder="mail@website.com" name="email" tabIndex={2}  aria-required="true" required />
                      </fieldset>
                      <fieldset className="password">
                        <label>Password *</label>
                        <input className="password-input" type="password" id="password" placeholder="Min. 8 character" name="password" tabIndex={2}  aria-required="true" required />
                        <i className="icon-show password-addon" id="password-addon" />
                      </fieldset>
                      <fieldset className="password">
                        <label>Confirm password *</label>
                        <input className="password-input" type="password" id="password" placeholder="Confirm password " name="password" tabIndex={2}  aria-required="true" required />
                        <i className="icon-show password-addon" id="password-addon" />
                  
                      </fieldset>
                      <div className="btn-submit mb-30">
                        <a href="login.html" className="tf-button style-1 h50 w-100" type="submit">Sign up<i className="icon-arrow-up-right2" /></a>
                      </div>
                    </form>
                    <div className="no-account">Already have an account? <a href="login.html" className="tf-color">Log in</a></div>
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

export default SignUp