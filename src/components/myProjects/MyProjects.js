import "./MyProjects.css"


const MyProjects = () => {
    return (
        <div className="sub-section-2">
            <div className='project-with-title-container'>
                <div className="project-with-title-wrapper">
                    <div className="title-and-project-flex">
                        <div className="title-background-container">
                            <div className="project-title-container">
                                <div className='my-projects-title'><span>&#9733;&nbsp;</span> My Projects</div>
                            </div>
                        </div>
                        <div className="project-right-container">
                            <div className="project-right-wrapper">
                                <div className="project-container">
                                    <div className="project-wrapper">
                                        <div className="project-card">
                                            {/* <img className="project-image" alt="Project One Image"></img> */}
                                            <h3>Project One</h3>
                                            <p class="subtext">This is my project and some text about it. I enjoyed making this project.</p>
                                            <hr />
                                            <a href="https://recordshopprojecttwo-app.herokuapp.com/" className="button" >View Here</a>
                                        </div>
                                        <div className="project-card">
                                            {/* <img className="project-image" alt="Project Two Image"></img> */}
                                            <h3>Project Two</h3>
                                            <p className="subtext">This is my project and some text about it. I enjoyed making this project.</p>
                                            <hr />
                                            <a href="https://ashleyealbertson1.github.io/Weather-App/" className="button" >View Here</a>
                                        </div>
                                        <div className="project-card">
                                            {/* <img className="project-image" alt="Project Three Image"></img> */}
                                            <h3>Project Three</h3>
                                            <p className="subtext">This is my project and some text about it. I enjoyed making this project.</p>
                                            <hr />
                                            <a href="https://ashleyealbertson1.github.io/Weather-App/" className="button" >View Here</a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MyProjects