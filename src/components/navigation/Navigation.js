import "./Navigation.css"

const Navigation = () => {
    return (
        <nav>
            <div className="nav-bar">
                <div className="nav-bar-left">
                    <div className="logo">
                        <div className="logo-container">
                            {/* <div className="star-logo-container"> */}
                            <div className="star-logo">
                                <span>&#9733;&nbsp;</span>
                            </div>
                            <div className="name-hello-world-logo">
                                <p>ashley albertson</p>
                                <p>"hello, world!"</p>
                            </div>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
                <div className="nav-bar-right">
                    <div className="nav-selections-container">
                        <div className="nav-selections"> ABOUT ME</div>
                        <div className="nav-selections"> MY PROJECTS</div>
                        <div className="nav-selections"> CONTACT ME</div>
                        <div className="nav-selections"> MY RESUME</div>
                    </div>
                </div>

                {/* <div className="hello-world-container">
                    <div className="hello-world-box">
                        <div className="hello-word-text">"hello, world!"</div>
                    </div>
                </div> */}
            </div>

        </nav>
    )
};

export default Navigation