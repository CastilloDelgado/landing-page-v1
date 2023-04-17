import React from "react";
import Layout from "./commons/Layout";
import Welcome from "./commons/Welcome";
import Customers from "./commons/Customers";
import OurValues from "./commons/OurValues";
import ContactForm from "./commons/ContactForm";

const Home = () => {
  return (
    <Layout>
      <Welcome />

      <Customers />

      <OurValues />

      <ContactForm />
    </Layout>
  );
};

export default Home;
