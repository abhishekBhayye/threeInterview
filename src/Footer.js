import React, { Component } from 'react'
import './Footer.css'
import Icon from '@material-ui/icons/Instagram';


export default class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                
                <div className="copyrightSection">
                    <p className="first">Copyright © 2020 Three Ireland (Hutchison) Limited | 28/29 Sir John Rogerson's Quay, Dublin 2 | VAT Registration Number IE6336982T</p>
                    
                    <ul>
                        <li>Terms & Conditions |</li>
                        <li> Privacy Centre |</li>
                        <li>Accessibility |</li>
                        <li>Dispute Resolution |</li>
                        <li>Network Management Policy |</li>
                        <li>Technologies |</li>
                        <li>Unlocking Policy |</li>
                        <li>Code of Practice |</li>
                        <li>Wholesale |</li>
                        <li>Hotline.ie</li>
                    </ul>
                </div>
                
                <div className="socialInformation">
                    <Icon></Icon>
                </div>

            </div>
        )
    }
}
