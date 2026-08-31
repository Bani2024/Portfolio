import emailjs from "emailjs-com";
import { useEffect, useRef } from "react";
import { FaArrowRight, FaCode, FaGithub, FaJava, FaJs, FaPencilRuler, FaReact, FaServer } from "react-icons/fa";
import { SiFigma, SiMysql, SiNodedotjs, SiPython } from "react-icons/si";
import avi from '../Assets/img1.png';
import images from '../Assets/me.png';
import project from '../Assets/Prism Analytics.png';
import trendmart from '../Assets/Void_Protocol visualization.png';
import Footer from "../Footer/Footer.jsx";
import Header from '../Header/Header.jsx';
import './Body.css';

const Body = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    "service_cfjsaop",
    "template_3upqruq",
    formRef.current,
    "UTKH2xUOdmflq4zm8"
  )
  .then(() => {
    alert("Message sent successfully");
  })
  .catch((error) => {
    console.error(error);
    alert("Failed to send message");
  });
};

  useEffect(() => {
  const elements = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    const trigger = window.innerHeight * 0.85;

    elements.forEach((el) => {
      const top = el.getBoundingClientRect().top;

      if (top < trigger) {
        el.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  return () => window.removeEventListener("scroll", revealOnScroll);
}, []);
    return (
        <div className="home" id="home">
          
            
            <Header />
            <main>
               <div className="container">
                <div className="home-container reveal">
                     <div className="home1">
                       <h4 >● Full-Stack Developer</h4>
                     </div>
                      <div className="hero">
  <h1 className="hero-title">
    Crafting Digital <br />
    <span className="highlight">Experiences</span> <br />
    Through Code
  </h1>
</div>
                       
                     <div className="home3">
                      <h2>Specialized in building scalable, neon-infused systems <br />that bridge the gap between human and machine.</h2>

                     </div>
                     <div className="home4">
                        <div className="btn1">
                            <button><a href="#contact">INITIALIZE PROJECT ●</a></button>
                        </div>
                        <div className="btn2">
                            <button><a href="https://github.com/Bani2024">VIEW PROJECTS</a></button>
                        </div>
                     </div>
                </div>
                <div className="frame-container">
                  <div className="frame-wrapper">
                   

                    <img src={images} alt="Frame" className="frame-image" />
                     </div>
                </div>
               </div>

                    

                <div className="skill-container reveal" id ="skills" >
  <div className="main-section" >

    <div className="main-head">
      <div className="leftside-head">
        <div className="head1">
          <h4>SKILL MATRIX</h4> 
        </div>
        <div className="head2">
          <h2>Core Infrastructure</h2>
        </div>
      </div>

      
    </div>

    <div className="main-body">

      {/* CARD 1 */}
      <div className="card">
        <div className="icon">
      <FaCode />
    </div>
        <h3>Frontend Engineering</h3>
        <div className="tags">
          <span>React</span>
          <span>HTML5</span>
          <span>CSS3</span>
        </div>
        <div className="progress">
          <div className="bar" style={{width: "94%"}}></div>
        </div>
        <div className="percent">94%</div>
      </div>

      {/* CARD 2 */}
      <div className="card">
        <div className="icon purple">
      <FaServer />
    </div>
        <h3>Backend Dev</h3>
        <div className="tags">
          <span>Node.js</span>
          <span>Flask</span>
          <span>Mysql</span>
        </div>
        <div className="progress purple">
          <div className="bar" style={{width: "88%"}}></div>
        </div>
        <div className="percent">88%</div>
      </div>

      {/* CARD 3 */}
      <div className="card">
        <div className="icon">
      <FaPencilRuler />
    </div>
        <h3>Programming</h3>
        <div className="tags">
          <span>Java</span>
          <span>Python</span>
          <span>JavaScipt</span>
        </div>
        <div className="progress">
          <div className="bar" style={{width: "82%"}}></div>
        </div>
        <div className="percent">82%</div>
      </div>

    </div>
  </div>
</div>

<div className="deploy " id="projects">
  <div className="deploy-main reveal">
    
    <div className="deploy-head">
      <h2>DEPLOYMENTS</h2>
    </div>

    <div className="deploy-grid">

      {/* CARD 1 */}
      <div className="deploy-card">
        <img src={project} alt="" />

        <div className="overlay"></div>

        <div className="card-content">
          <span className="tag">WEB APPLICATION</span>
          <h3>TrendMart</h3>
          <p>
             Intelligent sales prediction system leveraging Machine Learning to 
    forecast future demand from historical data, combined with a dynamic 
    React.js dashboard for real-time visualization and insights.
          </p>
          <FaArrowRight 
  className="arrow" 
  onClick={() => window.open( "https://github.com/Bani2024/Curator" , "_blank")} 
/>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="deploy-card">
        <img src={trendmart} alt="" />

        <div className="overlay"></div>

        <div className="card-content right">
          <span className="tag purple">AI HEALTHCARE</span>
          <h3>AVI.AI</h3>
          <p>
            AI-based system assisting visually impaired users by detecting allergens and predicting food safety.
          </p>
          <FaArrowRight 
  className="arrow" 
  onClick={() => window.open("https://github.com/Bani2024/avi.ai", "_blank")} 
/>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="deploy-card large">
        <img src={avi} alt="" />

        <div className="overlay"></div>

        <div className="card-content bottom">
          <span className="tag blue">FINTECH MODULE</span>
          <h3>SkillMore</h3>
          <p>
            Interactive course booking platform with real-time availability, user-friendly navigation, and efficient enrollment management.
          </p>
          <FaArrowRight 
  className="arrow" 
  onClick={() => window.open("https://github.com/Bani2024/Course-Booking-Website", "_blank")} 
/>
        </div>
      </div>

    </div>
  </div>
</div>




<div className="core-dev" id="techStack">
  <div className="core-container reveal">

    <h2 className="core-title">Core Development</h2>

    <div className="core-grid">

      <div className="core-item">
        <SiPython />
        <p>PYTHON</p>
      </div>

      <div className="core-item">
        <FaJs />
        <p>JAVASCRIPT</p>
      </div>

      <div className="core-item">
        <FaJava />
        <p>JAVA</p>
      </div>

      <div className="core-item">
        <SiMysql />
        <p>MYSQL</p>
      </div>

      <div className="core-item">
        <FaReact />
        <p>REACT</p>
      </div>

      <div className="core-item">
        <SiNodedotjs />
        <p>NODE.JS</p>
      </div>

      <div className="core-item">
        <SiFigma />
        <p>Figma</p>
      </div>

      <div className="core-item">
        <FaGithub />
        <p>GITHUB</p>
      </div>

    </div>
  </div>
</div>


<div className="connection-section " id="contact">
  <div className="connection-container reveal">

    {/* LEFT SIDE */}
    <div className="connection-left">
      <h2>Systems Defined by Purpose</h2>

      <p>
        
        Every line of code serves a purpose, and every pixel is placed with strategic intent.
      </p>

      <div className="contact-info">
        <div className="info-item">
          <span>@</span>
          <p>sarbanibhattacharjee61@gmail.com</p>
        </div>

        <div className="info-item">
          <span>◎</span>
          <p>+91-83920-85817</p>
        </div>
      </div>
    </div>

    {/* RIGHT SIDE FORM */}
    <div className="connection-right">
      <h3>Initialize Connection</h3>

      <form ref={formRef} onSubmit={sendEmail} className="connection-form">

        <div className="input-group">
          <label>PROTOCOL NAME</label>
          <input type="text" name="user_name" placeholder="ID: USER_IDENTIFIER" />
        </div>

        <div className="input-group">
          <label>COMMUNICATION CHANNEL</label>
          <input type="email" placeholder="EMAIL: PROTOCOL@CHANNEL.COM" />
        </div>

        <div className="input-group">
          <label>REQUEST DATA</label>
          <textarea name="message" placeholder="DESCRIBE YOUR VISION..."></textarea>
        </div>

        <button type="submit" className="send-btn">
          SEND TRANSMISSION →
        </button>

      </form>
    </div>

  </div>
</div>


            </main>
             <Footer /> 
        </div>
    );
};

export default Body;

