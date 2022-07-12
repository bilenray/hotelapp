import React from "react"
import {LoremIpsum} from "react-lorem-ipsum"
import "./header.css"
import image1 from "./images/bedRoom.jpg"
import image2 from "./images/sittingHall.jpg"
import giflogo from './images/hotel1.gif'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHotel} from '@fortawesome/free-solid-svg-icons'

const logo = <FontAwesomeIcon icon={faHotel} />

export default function header(){
    return(
        <div className="mainContainer" >
            <div className="headerR2">
                <div className="part1">
                    <div style={{backgroundColor:"violet"}}>
                        <img src={image1} height="200px" alt="This is picture"></img>
                    </div>
                    <div style={{backgroundColor:"purple"}}>
                        <img src={image2} height="200px" alt="This is picture"></img>
                    </div>
                </div>
                <div className="part2">
                    <img src={giflogo} alt="loading..." />
                </div>
                <div className="part3">
                    <div>A/C Room</div>
                    <p>Lorem ipsum odor amet, consectetuer adipiscing elit.<br/>
                     Primis ultrices iaculis ex potenti quam.<br/> 
                     Odio duis magnis nibh ridiculus; nascetur taciti. 
                     Mauris sed augue odio sem augue sem tempus urna orci.<br/>
                      Faucibus tristique nulla faucibus scelerisque auctor varius dapibus. 
                     </p>
                     <a href="#"><button href="#" className="button1">view more</button></a>
                     <a href="#"><button href="#" className="button2">Online Booking</button></a>                    
                </div>
            </div>
        </div>
    )
}