import React from "react";
import "../Detail/style.css";
import { Col, Row } from "antd";
import MenuPage from "../../../layout/Menu";
import Header from "../../../layout/Header";
import BackIcon from "../../../assets/images/back-square.svg";

const NumberDetail = () => {
  const breadcrumbPaths = [
    { label: "Cấp số" },
    { label: "Danh sách cấp số" },
    { label: "Chi tiết" },
  ];
  return (
    <Row className="main__wrapper">
      <MenuPage />
      <Col span={20} className="main__bg">
        <Header breadcrumbPaths={breadcrumbPaths} />
        <Col span={24} className="ms-30">
          <div>
            <span className="title__text">Quản lý cấp số</span>
          </div>
          <div className="device__detail__border mt-10">
            <p className="add__title pt-15 ms-15">Thông tin cấp số</p>
            <div className="d-flex ms-15">
              <div>
                <div>
                  <span className="detail__text__1">Họ Tên:</span>
                  <span className="detail__text__2 ms-89">Nguyễn Thị Dung</span>
                </div>
                <div className="mt-20">
                  <span className="detail__text__1">Tên dịch vụ:</span>
                  <span className="detail__text__2 ms-60">Khám tim mạch</span>
                </div>
                <div className="mt-20">
                  <span className="detail__text__1">Số thứ tự:</span>
                  <span className="detail__text__2 ms-75">2001201</span>
                </div>
                <div className="mt-20">
                  <span className="detail__text__1">Thời gian cấp:</span>
                  <span className="detail__text__2 ms-45">
                    14:35 - 7/11/2021
                  </span>
                </div>
                <div className="mt-20">
                  <span className="detail__text__1">Hạn sử dụng:</span>
                  <span className="detail__text__2 ms-50">
                    18:00 - 7/11/2021
                  </span>
                </div>
              </div>
              <div className="ms-250">
                <div>
                  <span className="detail__text__1">Nguồn cấp:</span>
                  <span className="detail__text__2 ms-80">Kiosk</span>
                </div>
                <div className="mt-20">
                  <span className="detail__text__1">Trạng thái:</span>
                  <span className="detail__text__2 ms-85">Đang chờ</span>
                </div>
                <div className="mt-20">
                  <span className="detail__text__1">Số điện thoại:</span>
                  <span className="detail__text__2 ms-62">0384972384</span>
                </div>
                <div className="mt-20">
                  <span className="detail__text__1">Địa chỉ email:</span>
                  <span className="detail__text__2 ms-65">
                    nguyendung@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="update__border">
            <img src={BackIcon} alt="Add Icon" />
            <p className="add__text">Quay lại</p>
          </div>
        </Col>
      </Col>
    </Row>
  );
};

export default NumberDetail;
