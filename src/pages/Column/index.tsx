import Button from "../../components/Button";

// import MealItem from "/MItem";
import { Col, Row } from "antd";
import Wrapper from "./styles";
import Container from "../../components/Container";
import Shop from "../../components/Content/Content";

const Column = () => (
  <Wrapper>
    <Container>
      <Row style={{ marginTop: 22 }}>
        {["Toán 12", "Vật lý 12", "Tin học văn phòng", "Văn 12"].map((o, i) => (
          <Col span={6} key={i} style={{ padding: 10 }}>
            <div
              style={{
                backgroundColor: "#2E2E2E",
                color: "#ffffff",
                height: 144,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                {o}
              </div>
              <hr style={{ width: 56 }} />
            </div>
          </Col>
        ))}
      </Row>
      <Row style={{ marginTop: 25 }}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((o, i) => (
          <Col span={6} key={i}></Col>
        ))}
      </Row>
      <div style={{ margin: "30px 0 60px 0" }}>
        <Button />
        <Shop />
      </div>
    </Container>
  </Wrapper>
);

export default Column;
