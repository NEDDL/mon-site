import Navbar from "./navbar/navbar";

const SiteLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default SiteLayout;
