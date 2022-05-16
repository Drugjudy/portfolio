import "../css/skills.css"
import { Row,Col,Container } from "react-bootstrap";
import {SiCplusplus, SiAnaconda, SiDjango, SiKalilinux, SiNextdotjs} from 'react-icons/si';
import {DiPhotoshop,DiUnitySmall} from 'react-icons/di';
import {IoLogoJavascript} from 'react-icons/io';
import {AiFillHtml5} from 'react-icons/ai';
import { FaReact,FaBootstrap,FaPython,FaCss3Alt,FaNodeJs } from 'react-icons/fa';





function Skills() {
    return(
        <div id="skills">
           <section>
  <div class="container reveal fade-left">
    <h2> My skills ────────────────────────────</h2>
  </div>
</section>



<Container className="padding">
  
  <Row>
    <ul>
    <Col><li><a href="https://react-bootstrap.github.io/"><i class="fab fa-facebook" aria-hidden="true"><FaBootstrap /></i></a></li></Col> 
    <Col> <li><a href="https://reactjs.org/"><i class="fab fa-twitter" aria-hidden="true"><FaReact /></i></a></li></Col>
    <Col> <li><a href="https://sass-lang.com/"><i class="fab fa-google-plus-g" aria-hidden="true"><FaCss3Alt /></i></a></li></Col>
    <Col> <li><a href="https://nodejs.org/en/"><i class="fab fa-twitter" aria-hidden="true"><FaNodeJs /></i></a></li></Col>
    <Col> <li><a href="https://www.python.org/"><i class="fab fa-twitter" aria-hidden="true"><FaPython /></i></a></li></Col>
    <Col> <li><a href="https://www.anaconda.com/"><i class="fab fa-twitter" aria-hidden="true"><SiAnaconda /></i></a></li></Col>
    <Col> <li><a href="https://en.wikipedia.org/wiki/C%2B%2Bdjan"><i class="fab fa-twitter" aria-hidden="true"><SiCplusplus /></i></a></li></Col>
    </ul>
    </Row> </Container>
    <Container className="padding1">
    <Row>
      <ul>
    <Col> <li><a href="https://www.djangoproject.com/"><i class="fab fa-twitter" aria-hidden=""><SiDjango /></i></a></li></Col>
    <Col> <li><a href="https://www.kali.org/"><i class="fab fa-twitter" aria-hidden=""><SiKalilinux /></i></a></li></Col>
    <Col> <li><a href="https://nextjs.org/"><i class="fab fa-twitter" aria-hidden=""><SiNextdotjs /></i></a></li></Col>
  <Col> <li><a href="https://en.wikipedia.org/wiki/HTML5"><i class="fab fa-twitter" aria-hidden=""><AiFillHtml5 /></i></a></li></Col>
   <Col> <li><a href="https://en.wikipedia.org/wiki/JavaScript"><i class="fab fa-twitter" aria-hidden=""><IoLogoJavascript /></i></a></li></Col>
     <Col> <li><a href="https://www.adobe.com/in/products/photoshop.html"><i class="fab fa-twitter" aria-hidden=""><DiPhotoshop /></i></a></li></Col>
      <Col> <li><a href="https://unity.com/"><i class="fab fa-twitter" aria-hidden=""><DiUnitySmall /></i></a></li></Col>
    </ul>
  </Row>

</Container>
 


        </div>
    )
}

export default Skills;