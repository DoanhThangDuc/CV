import { StyledContactBar } from "./ContactBar.styled";

const ContactBarInfo = [
  {
    id: 1,
    href: "https://www.facebook.com/duc.doanh.3597/",
    name: "FACEBOOK",
  },
  {
    id: 2,
    href: "https://zalo.me/0367223095",
    name: "ZALO",
  },
  { id: 3, href: "", name: "TWITTER" },
];
function ContactBar() {
  return (
    <StyledContactBar>
      {ContactBarInfo.map((link) => {
        return (
          <a key={link.id} href={link.href} target="_blank">
            {link.name}
          </a>
        );
      })}
    </StyledContactBar>
  );
}

export default ContactBar;
