import '../css/title.css';
import Button from 'react-bootstrap/Button'
import '../css/button.css';
import '../css/captions.css';

function Title() {
    return(
        <>
     <div className='aline-text'>
  <h4 className='hello-title'> Hey there, I am 
    </h4>
    
            <h1 className='name-title'>
      KRISH KAUSHAL
  </h1>
  <h3 className='website-title'>
    I build amazing websites!
  </h3>
  <article className='title-about'>
    I’m a FullStack web developer. Focused on building products and websites for users to be an experince. I also do other bunch of techy things as hobbie like <span>indie game devlopmenet, graphic desgining and sometimes bug bounty/pentesting</span>. I love to learn new things and I am always open to learn new technologies.

  </article>
      
<div className='place-btn'>
   <a href="#contact">
  <div class="button" id="button-2">
    <div id="slide"></div>
   <a>Contact me</a>
  </div></a>
  <a href="#work">
   <div class="button" id="button-2">
    <div id="slide"></div>
   <a>My work</a> 
  </div> </a>
  </div> 
     </div>
      <div id='about' className='work-idea'>
dkjfkdjkfjfk
    </div>
    </>
    )
}



export default Title;
