import Navbar from "./navbar/navbar";
import Email from "./screenElements/email";
import SocialMenu from "./screenElements/social";

const SiteLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <SocialMenu />
      <Email />
      {children}
    </>
  );
};

export default SiteLayout;
