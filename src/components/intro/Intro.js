import "./Intro.css"
import myPic from "../../img/myPic.jpg"

const Intro = () => {
    return (
        <div>

            <div className="intro-container">
                <div className="intro-content-container">
                    {/* <div className="intro-images-container"> */}
                    <div className="intro-content-wrapper">
                        <div className="intro-left-container">
                            <div className="intro-left-box">

                                <div className="intro-left-wrapper">
                                    <div className="intro-left-content-box">




                                        <div className="name-and-profession-container">
                                            <div className="name-and-profession-text-box">

                                                <p className="name">Ashley Albertson</p>
                                                <p className="profession">FULL STACK SOFTWARE ENGINEER</p>
                                                {/* <p className = "seeking">Seeking Junior / Entry-Level Role</p> */}

                                            </div>

                                        </div>




                                        {/* <div className="block-2"></div> */}


                                        <div className="intro-skills-wrapper">
                                            <div className="intro-skills-block">
                                                <div className="intro-details">
                                                    <div className="intro-skills-img">
                                                        <div className="skills-container">
                                                            <div className="skills">
                                                                <div className="skills-list"><span>&#9733;&nbsp;</span>&nbsp;JavaScript</div>
                                                                <div className="skills-list"><span>&#9733;&nbsp;</span>&nbsp;Node.js</div>
                                                                <div className="skills-list"><span>&#9733;&nbsp;</span>&nbsp;Python</div>
                                                                <div className="skills-list"><span>&#9733;&nbsp;</span>&nbsp;MySQL</div>
                                                                <div className="skills-list"><span>&#9733;&nbsp;</span>&nbsp;API Design</div>
                                                                <div className="skills-list"><span>&#9733;&nbsp;</span>&nbsp;React</div>
                                                                <div className="skills-list"><span>&#9733;&nbsp;</span>&nbsp;MongoDB</div>


                                                                <div className="skills-list"><span>&#9733;&nbsp;</span>&nbsp;CSS</div>
                                                                <div className="skills-list"><span>&#9733;&nbsp;</span>&nbsp;HTML5</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="intro-right-container">

                            <div className="intro-right-wrapper">
                                <div className="bg-2"></div>
                                <div className="my-pic-bg"></div>
                                <img src={myPic} alt="Ashley Albertson Full Stack Developer" className="my-pic" />

                            </div>

                            {/* </div> */}
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
};

export default Intro