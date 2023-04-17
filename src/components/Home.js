import React from "react";
import Layout from "./commons/Layout";
import Welcome from "./commons/Welcome";
import Customers from "./commons/Customers";

const Home = () => {
  return (
    <Layout>
      <Welcome />

      <Customers />
    </Layout>
  );
};

export default Home;
