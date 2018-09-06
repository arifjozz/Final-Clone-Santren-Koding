import React, { Component } from 'react';
import Navbar from './Navbar'
export default class Sign extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <br/>
        
        <br/>
        <br/>

            <div className="container my-1">
                <div className="row">
                    <div className="col"><br/><center><h1>Login</h1></center><div id="firebaseui_container" lang="en"><div className="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-phone-sign-in-start"><form onsubmit="return false;"><div className="firebaseui-card-header"><h1 className="firebaseui-title">Enter your phone number</h1></div><div className="firebaseui-card-content"><div className="firebaseui-relative-wrapper"><div className="firebaseui-phone-number"><button className="firebaseui-id-country-selector firebaseui-country-selector mdl-button mdl-js-button" data-upgraded=",MaterialButton"><span className="firebaseui-flag firebaseui-country-selector-flag firebaseui-id-country-selector-flag firebaseui-flag-US"></span><span className="firebaseui-id-country-selector-code">‎+1</span></button><div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label firebaseui-textfield firebaseui-phone-input-wrapper is-upgraded" data-upgraded=",MaterialTextfield"><label className="mdl-textfield__label firebaseui-label" for="phoneNumber">Phone number</label><input type="tel" name="phoneNumber" className="mdl-textfield__input firebaseui-input firebaseui-id-phone-number" value="" /></div></div><div className="firebaseui-error-wrapper"><p className="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-phone-number-error firebaseui-id-phone-number-error"></p></div><div className="firebaseui-recaptcha-wrapper"><div className="firebaseui-recaptcha-container"><div><div style={{width: '304px', height: '78px'}}><div><iframe src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LcMZR0UAAAAALgPMcgHwga7gY5p8QMg1Hj-bmUv&amp;co=aHR0cHM6Ly9zYW50cmVua29kaW5nLm9yZzo0NDM.&amp;hl=en&amp;v=v1535045166622&amp;size=normal&amp;cb=p1bmduhv7cf1" width="304" height="78" role="presentation" name="a-2ocnngrz92" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe></div>
                    <textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response" style={{width: '250px', height: '40px', border: '1px solid #c1c1c1', margin: '10px 25px', padding: '0px', resize: 'none',  display: 'none'}}></textarea></div></div></div>
                    <div className="firebaseui-error-wrapper firebaseui-recaptcha-error-wrapper">
                    <p className="firebaseui-error firebaseui-hidden firebaseui-id-recaptcha-error"></p></div></div></div></div>
                    <div className="firebaseui-card-actions">
                    <div className="firebaseui-form-actions">
                    <button className="firebaseui-id-secondary-link firebaseui-button mdl-button mdl-js-button mdl-button--primary" data-upgraded=",MaterialButton">Cancel</button>
                    <button type="submit" className="firebaseui-id-submit firebaseui-button mdl-button mdl-js-button mdl-button--raised mdl-button--colored" data-upgraded=",MaterialButton">Verify</button></div></div>
                    <div className="firebaseui-card-footer">
                    <p className="firebaseui-tos">By tapping Verify, an SMS may be sent. Message &amp; data rates may apply.</p>
                    </div></form></div></div></div></div></div></div>
    )
  }
}
