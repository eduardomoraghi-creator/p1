import React, { Component } from "react";
import Lembretes from "./componentes/Lembretes";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";

export default class App extends Component {
  state = { texto: "", lembretes: [] };

  handleChange = (event) => {
    this.setState({ texto: event.target.value });
  };

  handleClick = () => {
    const texto = this.state.texto.trim();
    if (texto === "") return;
    this.setState((prevState) => ({
      lembretes: [...prevState.lembretes, texto],
      texto: "",
    }));
  };

  handleRemove = (index) => {
    this.setState({
      lembretes: this.state.lembretes.filter((_, i) => i !== index),
    });
  };

  render() {
    return (
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <h3 className="text-center mb-4">Meus Lembretes</h3>

            <div className="d-flex mb-3">
              <input
                type="text"
                id="lembrete"
                className="form-control"
                placeholder="Escreva aqui seu lembrete..."
                value={this.state.texto}
                onChange={this.handleChange}
              />
              <Button
                variant="primary"
                className="ms-2"
                onClick={this.handleClick}
              >
                Gravar
              </Button>
            </div>
          </Col>
        </Row>

        {/* Lista de lembretes */}
        <Lembretes
          lembretes={this.state.lembretes}
          handleRemove={this.handleRemove}
        />
      </Container>
    );
  }
}
