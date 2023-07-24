import React from 'react'
import HelmetMeta from "../Components/ReusableComponents/HelmetMeta";
import HoriLine from '../Components/ReusableComponents/HoriLine';
import ContactUs from '../Components/SubComponents/ContactUs/ContactUs';
const ContactUsPage = () => {
  return (
    <>
      <HelmetMeta title={"Cake Website - Contact Us"} />
      <ContactUs />
     <HoriLine/>
    </>
  );
}

export default ContactUsPage