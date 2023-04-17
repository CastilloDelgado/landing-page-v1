import React from "react";
import Layout from "./commons/Layout";
import Welcome from "./commons/Welcome";
import Customers from "./commons/Customers";
import OurValues from "./commons/OurValues";
import EmailForm from "./commons/EmailForm";

const Home = () => {
  return (
    <Layout>
      <Welcome />

      <Customers />

      <OurValues />

      <EmailForm />
    </Layout>
  );
};

export default Home;
