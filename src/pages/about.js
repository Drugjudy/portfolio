import reveal from '../components/caption';
import "../css/about.css";

function About() {
return (
  <>
    <div  id='about'>
      <div>
        <section>
  <div class="container reveal fade-left">
    <h2> About Me ────────────────────────────</h2>
  </div>
</section>
 <article className="about-arc">
I'm a 19 year old first-year student pursuing B.tech-Information Technology and Im a full stack developer. I dont really have that many hobbies except for cooking and outing on weekends. 
I started coding by learning game development at an early age and then explored other fields of computer which intreged me alot like hacking ooo, digital art and of course web development.
I enjoy sports and video games.
    </article></div>
    <div class="profile-pic">
  <img src={require('../images/profile.jpeg')}  alt="profile" />
</div>
   
    </div>

    <div id='work' className='work-idea'>
dkjfkdjkfjfk
    </div>
</>
)
}



export default About;