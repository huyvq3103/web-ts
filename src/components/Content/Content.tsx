import React, { useState } from "react";
import { Layout, Row, Col, Card, Button, Modal } from "antd";
import styled from "styled-components";

const { Content } = Layout;

const StyledContent = styled(Content)`
  margin: 54px 16px;
  padding: 24px;
  padding-bottom: 128px;
  background-color: #fff;
  margin-bottom: 128px;
`;

const ProductCard = styled(Card)`
  margin: 12px;
`;

const products = [
  {
    id: 1,
    name: "Sách Văn Lớp 11",
    price: 200000,
    image:
      "https://metaisach.com/wp-content/uploads/2019/01/sach-giao-khoa-ngu-van-lop-11.jpg",
  },
  {
    id: 2,
    name: "Sách Toán Lớp 10",
    price: 200000,
    image:
      "https://metaisach.com/wp-content/uploads/2019/01/sach-giao-khoa-ngu-van-lop-11.jpg",
  },
  {
    id: 3,
    name: "Sách Tiếng Anh Lớp 9",
    price: 100000,
    image:
      "https://metaisach.com/wp-content/uploads/2019/01/sach-giao-khoa-ngu-van-lop-11.jpg",
  },
  {
    id: 4,
    name: "Sách Tiếng Anh Lớp 9",
    price: 100000,
    image:
      "https://metaisach.com/wp-content/uploads/2019/01/sach-giao-khoa-ngu-van-lop-11.jpg",
  },
  {
    id: 5,
    name: "Sách Tiếng Anh Lớp 9",
    price: 100000,
    image:
      "https://metaisach.com/wp-content/uploads/2019/01/sach-giao-khoa-ngu-van-lop-11.jpg",
  },
  {
    id: 6,
    name: "Sách Tiếng Anh Lớp 9",
    price: 100000,
    image:
      "https://metaisach.com/wp-content/uploads/2019/01/sach-giao-khoa-ngu-van-lop-11.jpg",
  },
  {
    id: 7,
    name: "Sách Tiếng Anh Lớp 9",
    price: 100000,
    image:
      "https://metaisach.com/wp-content/uploads/2019/01/sach-giao-khoa-ngu-van-lop-11.jpg",
  },
  {
    id: 8,
    name: "Sách Tiếng Anh Lớp 9",
    price: 100000,
    image:
      "https://metaisach.com/wp-content/uploads/2019/01/sach-giao-khoa-ngu-van-lop-11.jpg",
  },
];

const Shop: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState<{
    id: number;
    name: string;
    price: number;
    image: string;
  }>({
    id: 0,
    name: "",
    price: 0,
    image: "",
  });
  console.log("data", data);
  const showModal = (product: any) => {
    setData(product);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <StyledContent>
      <img
        src="https://toigingiuvedep.vn/wp-content/uploads/2021/08/background-sach-danh-cho-may-tinh.jpg"
        alt=""
        width={"100%"}
        height={400}
      />
      <div className="site-layout-content">
        <h1>Sản phẩm mới nhất</h1>
        <p>Các sản phẩm mới nhất sẽ được hiển thị ở đây</p>
      </div>
      <Row gutter={16}>
        {products.map((product) => (
          <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
            <ProductCard
              cover={<img alt={product.name} src={product.image} />}
              hoverable
            >
              <Card.Meta title={product.name} description={product.price} />
              <Button type="primary" onClick={() => showModal(product)}>
                Open Modal
              </Button>
            </ProductCard>
            <Modal
              title="Basic Modal"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <p>{data.id}</p>
              <p>{data.name}</p>
              <img style={{ width: 300 }} src={data.image} alt="image" />
              <p>{data.price}</p>
            </Modal>
          </Col>
        ))}
      </Row>
    </StyledContent>
  );
};

export default Shop;
