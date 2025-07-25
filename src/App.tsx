import "./index.css";
import { motion } from "framer-motion";
import aryanImage from "./assets/aryan.png"; 

const App = () => {
  return (
    <div className="main-container">
      <motion.div
        className="card"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={aryanImage} alt="Aryan" className="profile-pic" />

        <h1 className="title">Muhammad Aryan Afzal</h1>
        <h2 className="tagline">
          AI & ML Enthusiast | Full-Stack Developer | Django, SQL, Python
        </h2>

        <p className="about-text">
          I'm an aspiring Full-Stack Developer passionate about building
          scalable and user-friendly web applications. With hands-on experience
          in Django, SQL, and front-end technologies like HTML, CSS, and
          JavaScript, I enjoy developing solutions that are both efficient and
          intuitive.
          <br />
          <br />
          My focus is on real-time, responsive apps—like a resume builder using
          Django + SQL Server. I strive to write clean, maintainable code and
          continually learn modern practices. My goal is to contribute to
          impactful tech projects and evolve into a well-rounded developer.
        </p>

        <a
          href="https://www.linkedin.com/in/muhammadaryanafzal"
          className="button"
          target="_blank"
        >
          Visit LinkedIn
        </a>
      </motion.div>
    </div>
  );
};

export default App;
