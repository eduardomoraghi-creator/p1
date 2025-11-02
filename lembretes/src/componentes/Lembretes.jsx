import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Lembretes = ({ lembretes, handleRemove }) => (
  <Container className="mt-4">
    <Row className="g-3 justify-content-center">
      {lembretes.map((item, index) => (
        <Col key={index} xs={12} sm={6} md={4} lg={3}>
          <Card
            className="shadow-sm"
            style={{ backgroundColor: "lightyellow" }}
          >
            <Card.Body className="position-relative">
              <Button
                variant="light"
                size="sm"
                className="position-absolute top-0 end-0 m-2 btn-close"
                aria-label="Close"
                onClick={() => handleRemove(index)}
              ></Button>
              {item}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Lembretes;
