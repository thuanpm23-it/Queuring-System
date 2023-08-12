import React from "react";
import "../List/style.css";
import MenuPage from "../../../layout/Menu";
import Header from "../../../layout/Header";
import SearchIcon from "../../../assets/images/fi_search.svg";
import AddIcon from "../../../assets/images/add-square.svg";
import { CaretRightOutlined, CaretLeftOutlined } from "@ant-design/icons";
import { Col, Input, Row } from "antd";

const ServiceList = () => {
  const breadcrumbPaths = [
    { label: "Dịch vụ" },
    { label: "Danh sách dịch vụ" },
  ];
  return (
    <Row className="main__wrapper">
      <MenuPage />
      <Col span={20} className="main__bg">
        <Header breadcrumbPaths={breadcrumbPaths} />
        <Col span={24} className="ms-30">
          <div>
            <span className="title__text">Quản lý dịch vụ</span>
          </div>
          <div className="d-flex mt-15 mb-10">
            <div className="device__list__box">
              <label className="device__list__label">
                Trạng thái hoạt động
              </label>
              <br />
              <select className="device__list__select">
                <option value="">Tất cả</option>
                <option value="1">Lựa chọn 1</option>
                <option value="2">Lựa chọn 2</option>
                <option value="3">Lựa chọn 3</option>
              </select>
            </div>
            <div className="device__list__box ms-20">
              <label className="device__list__label">Chọn thời gian</label>
              <br />
              <div className="d-flex items-center">
                <Input type="date" className="date__input" />
                <CaretRightOutlined className="date__icon" />
                <Input type="date" className="date__input" />
              </div>
            </div>
            <div className="device__list__box ms-190">
              <label className="device__list__label">Từ khóa</label>
              <br />
              <Input
                placeholder="Nhập từ khóa"
                className="device__list__select pe-35"
              />
              <img src={SearchIcon} className="search__icon" alt="" />
            </div>
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Mã dịch vụ</th>
                  <th>Tên dịch vụ</th>
                  <th>Mô tả</th>
                  <th>Trạng hoạt động</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>KIO_01</td>
                  <td>Kiosk</td>
                  <td>Mô tả dịch vụ</td>
                  <td>Hoạt động</td>
                  <td>
                    <a href="/#">Chi tiết</a>
                  </td>

                  <td>
                    <a href="/#">Cập nhật</a>
                  </td>
                </tr>
                <tr>
                  <td>KIO_01</td>
                  <td>Kiosk</td>
                  <td>Mô tả dịch vụ</td>
                  <td>Hoạt động</td>
                  <td>
                    <a href="/#">Chi tiết</a>
                  </td>

                  <td>
                    <a href="/#">Cập nhật</a>
                  </td>
                </tr>
                <tr>
                  <td>KIO_01</td>
                  <td>Kiosk</td>
                  <td>Mô tả dịch vụ</td>
                  <td>Hoạt động</td>
                  <td>
                    <a href="/#">Chi tiết</a>
                  </td>

                  <td>
                    <a href="/#">Cập nhật</a>
                  </td>
                </tr>
                <tr>
                  <td>KIO_01</td>
                  <td>Kiosk</td>
                  <td>Mô tả dịch vụ</td>
                  <td>Hoạt động</td>
                  <td>
                    <a href="/#">Chi tiết</a>
                  </td>

                  <td>
                    <a href="/#">Cập nhật</a>
                  </td>
                </tr>
                <tr>
                  <td>KIO_01</td>
                  <td>Kiosk</td>
                  <td>Mô tả dịch vụ</td>
                  <td>Hoạt động</td>
                  <td>
                    <a href="/#">Chi tiết</a>
                  </td>

                  <td>
                    <a href="/#">Cập nhật</a>
                  </td>
                </tr>
                <tr>
                  <td>KIO_01</td>
                  <td>Kiosk</td>
                  <td>Mô tả dịch vụ</td>
                  <td>Hoạt động</td>
                  <td>
                    <a href="/#">Chi tiết</a>
                  </td>

                  <td>
                    <a href="/#">Cập nhật</a>
                  </td>
                </tr>
                <tr>
                  <td>KIO_01</td>
                  <td>Kiosk</td>
                  <td>Mô tả dịch vụ</td>
                  <td>Hoạt động</td>
                  <td>
                    <a href="/#">Chi tiết</a>
                  </td>

                  <td>
                    <a href="/#">Cập nhật</a>
                  </td>
                </tr>
                <tr>
                  <td>KIO_01</td>
                  <td>Kiosk</td>
                  <td>Mô tả dịch vụ</td>
                  <td>Hoạt động</td>
                  <td>
                    <a href="/#">Chi tiết</a>
                  </td>

                  <td>
                    <a href="/#">Cập nhật</a>
                  </td>
                </tr>
                <tr>
                  <td>KIO_01</td>
                  <td>Kiosk</td>
                  <td>Mô tả dịch vụ</td>
                  <td>
                    <span className="word__svg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="9"
                        viewBox="0 0 8 9"
                        fill="none"
                      >
                        <circle cx="4" cy="4.5" r="4" fill="#34CD26" />
                      </svg>
                    </span>
                    <span className="ms-5">Hoạt động</span>
                  </td>
                  <td>
                    <a href="/#">Chi tiết</a>
                  </td>

                  <td>
                    <a href="/#">Cập nhật</a>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="add__border">
              <img src={AddIcon} alt="Add Icon" />
              <p className="add__text">
                Thêm <br /> dịch vụ
              </p>
            </div>
          </div>
          <div className="pagination mt-15">
            <a href="/#">
              <CaretLeftOutlined />
            </a>
            <a href="/#" className="active">
              1
            </a>
            <a href="/#">2</a>
            <a href="/#">3</a>
            <a href="/#">4</a>
            <a href="/#">...</a>
            <a href="/#">10</a>
            <a href="/#">
              <CaretRightOutlined />
            </a>
          </div>
        </Col>
      </Col>
    </Row>
  );
};

export default ServiceList;
