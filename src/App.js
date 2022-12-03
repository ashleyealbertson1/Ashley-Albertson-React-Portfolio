import Intro from "./components/intro/Intro";
import Navigation from "./components/navigation/Navigation";
import AboutMe from "./components/aboutMe/AboutMe";
import MyProjects from "./components/myProjects/MyProjects";

function App() {
  return (
      <div>
        <Navigation/>
          <Intro/>
          <AboutMe/>
          <MyProjects/>
      </div>
  );
};

export default App;