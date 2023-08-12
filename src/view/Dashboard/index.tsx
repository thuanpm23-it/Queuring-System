import React from "react";
import "../Dashboard/style.css";
import MenuPage from "../../layout/Menu";
import { Col, Row } from "antd";
import Header from "./../../layout/Header/index";

const Dashboard = () => {
  const breadcrumbPaths = [{ label: "Dashboard" }];
  return (
    <Row className="main__wrapper">
      <MenuPage />
      <Col span={20} className="main__bg">
        <Header breadcrumbPaths={breadcrumbPaths} />
        <Row></Row>
      </Col>
    </Row>
  );
};

export default Dashboard;
