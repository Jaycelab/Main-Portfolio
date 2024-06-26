import Link from "next/link";
import { FaGithub, FaInstagram, FaTwitter, FaShare } from "react-icons/fa";

{
  /*social paths*/
}
const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaInstagram />, path: "" },
  { icon: <FaTwitter />, path: "" },
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
