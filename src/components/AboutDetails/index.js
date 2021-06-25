import React from 'react';
import selfImage from "../../assets/images/self-image.jpg";
import Nav from '../Nav';

function AboutDetails() {
  return (
    <React.Fragment>
        <Nav></Nav>
        <section  className="section-content about-section bg-dark">
            <div id="about" className="container about-container">

                <img  src={selfImage} alt="Mike Shelby" className="about-image round-borders shadow-image-large"></img>
                <div className="about-textbox bg-dark-card round-borders">
                    <div className="about-text">
                        <h3 className="section-title">About Me</h3>
                        <p>
                            As both a web developer and a registered dietitian, I bring with me a unique perspective and approach to the technology field. To be sure, my five years of experience working as a health care professional has given me great insight into an industry replete with poorly designed, inefficient, and unintuitive technological tools. Thanks to my enthusiasm for creating user-friendly technological solutions for both myself and for others, becoming a web developer was a natural progression in my professional journey.
                        </p>
                        <br/>
                        <p>
                            I enjoy using my strong attention to detail, analytical mindset, and problem-solving skills to make applications as simple and efficient to use as possible. Moreover, I would describe myself as a lifelong learner with a continuously evolving skillset, which lends itself well to this ever-changing field. I am eager to bring my unique outlook and experience to a company that shares my appreciation for developing innovative solutions to everyday societal challenges.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    </React.Fragment>
  );
}

export default AboutDetails;