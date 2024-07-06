import Link from "next/link";
import { FaGithub, FaInstagram, FaTwitter, FaShare } from "react-icons/fa";

{
  /*social paths*/
}
const socials = [
  { icon: <FaGithub />, path: "https://www.github.com/Jaycelab" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/Jaycelab" },
  { icon: <FaTwitter />, path: "https://www.twitter.com/Jaycelab" },
  { icon: <FaShare />, path: "" },
];

const Links = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <Link key={index} href={social.path} className={iconStyles}>
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Links;
