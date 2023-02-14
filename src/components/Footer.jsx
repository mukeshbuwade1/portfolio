import React from "react";

import { LinkedIn, Facebook,  Instagram } from "@material-ui/icons"

const Footer = () => {
    return (
        <div className="footercontainer">
            <div className="footerleft">
                <p className="copyright">&#169; 2022 by Mukesh Buwade</p>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <p className="copyright">Proudly created with &hearts;</p>
                </div>
            </div>
            <div className="footerright">
                <div >
                    <p className="footerHeading">Call</p>
                    <p className="copyright">(+91) 977-067-5479</p>
                </div>
                <div>
                    <p className="footerHeading">Write</p>
                    <p className="copyright">mukesh@newrise.in</p>
                </div>
                <div className="footer_icons">
                    <p className="footerHeading">Follow</p>
                    <div className="iconBox">
                        <a className="social-icon-footer" href="https://www.linkedin.com/in/mukesh-buwade-278476197/" target="_blank" rel="noopener noreferrer"> <LinkedIn /></a>
                        <a className="social-icon-footer" href="javascript:alert('Link is not available');" target="_blank" rel="noopener noreferrer"><Facebook /></a>
                        <a className="social-icon-footer" href="https://instagram.com/mr.mukesh_4?igshid=ZDdkNTZiNTM=" target="_blank" rel="noopener noreferrer"><Instagram /></a>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Footer