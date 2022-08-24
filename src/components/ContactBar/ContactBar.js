import { StyledContactBar } from "./ContactBar.styled";

function ContactBar() {
  return (
    <StyledContactBar>
      <a
        href="https://www.facebook.com/duc.doanh.3597/"
        target="_blank"
        rel="noreferrer"
        className="facebook"
      >
        FACEBOOK
      </a>
      <a
        href="https://zalo.me/0367223095"
        target="_blank"
        rel="noreferrer"
        className="youtube"
      >
        ZALO
      </a>
      <a href="" target="_blank" className="twitter">
        TWITTER
      </a>
    </StyledContactBar>
  );
}

export default ContactBar;