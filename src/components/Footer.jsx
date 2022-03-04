import React from "react";

import { LinkedIn, Facebook, WhatsApp, Instagram } from "@material-ui/icons"

const Footer = () => {
    return (
        <div className="footercontainer">
            <div className="footerleft">
                <p className="copyright">&#169; 2022 by Mukesh Buwade</p>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <p className="copyright">Proudly created with &hearts;</p>
                    {/* <FavoriteIcon/> */}
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
                <div>
                    <p className="footerHeading">Follow</p>
                    <div className="iconBox">
                        <LinkedIn />
                        <Facebook />
                        <Instagram />
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Footer