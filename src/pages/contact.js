import "../css/contact.scss"
import {FaGithub} from "react-icons/fa";
import {AiFillLinkedin, AiOutlineInstagram, AiOutlineTwitter} from "react-icons/ai";
import {SiRedbubble} from "react-icons/si";
import "../css/mail-box.css";

function Contact() {
    return (
  <>
    <div id="contact">
  <h2 className="socials">
      ───────────────────────────     Get in Touch       ────────────────────────────
  </h2>

  <div class="effect varrius">
    <div class="buttons">
      <a href="https://github.com/Drugjudy" class="fb" title="Join us on Facebook"><i class="fa fa-facebook" aria-hidden="true"><FaGithub /></i></a>
      <a href="https://www.linkedin.com/in/krish-kaushal-759160239/" class="tw" title="Join us on Twitter"><i class="fa fa-twitter" aria-hidden="true"> <AiFillLinkedin /> </i></a>
      <a href="https://www.instagram.com/_drugjudy_/?hl=en" class="g-plus" title="Join us on Google+"><i class="fa fa-google-plus" aria-hidden="true"><AiOutlineInstagram /></i></a>
      <a href="https://twitter.com/krishk24336752" class="dribbble" title="Join us on Dribbble"><i class="fa fa-dribbble" aria-hidden="true"> <AiOutlineTwitter /> </i></a>
      <a href="https://www.redbubble.com/people/Drugstore91/shop?asc=u&ref=account-nav-dropdown" class="vimeo" title="Join us on Vimeo"><i class="fa fa-vimeo" aria-hidden="true"><SiRedbubble /></i></a>
    </div>
  </div>

</div>
  		<header>CONTACT ME</header>

<form id="form" class="topBefore">
		  <input id="name" type="text" placeholder="NAME" />
		  <input id="email" type="text" placeholder="E-MAIL" />
		  <textarea id="message" type="text" placeholder="MESSAGE"></textarea>
  <input id="submit" type="submit" value="GO!" />
</form>
</>

    )
}

export default Contact;