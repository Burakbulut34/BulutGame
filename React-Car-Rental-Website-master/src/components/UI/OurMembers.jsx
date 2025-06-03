import React from "react";
import "../../styles/our-member.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import ava01 from "../../assets/all-images/burakgame/Burak.jpg";

const OUR__MEMBERS = [
  {
    name: "Burak Bulut",
    experience: "2 yıllık deneyim",
    ghUrl: "https://github.com/Burakbulut34",
    instUrl: "https://www.instagram.com/bura.kbulut34/",
    linkedinUrl: "https://www.linkedin.com/in/burak-bulut-371797364/",
    imgUrl: ava01,
  },

  
];

const OurMembers = () => {
  return (
    <>
      {OUR__MEMBERS.map((item, index) => (
        <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
         <center>
         <div className="single__member">
            <div className="single__member-img">
              <img src={item.imgUrl} alt="" className="w-100" />

              <div className="single__member-social">
                <a href={item.ghUrl}>
                  <i class="ri-github-line"></i>
               </a>
                <a href={item.linkedinUrl}>
                  <i class="ri-linkedin-line"></i>
                </a>
                <a href={item.instUrl}>
                  <i class="ri-instagram-line"></i>
                </a>
              </div>
            </div>

            <h6 className="text-center mb-0 mt-3"><a href="/brkblt" style={{textDecoration:"none", color:"black", cursor:"pointer"}}>{item.name}</a> </h6>
            <p className="section__description text-center">
              {item.experience}
            </p>
          </div>
         </center>
        </Col>
      ))}
    </>
  );
};

export default OurMembers;
