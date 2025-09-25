import React from "react";

class LembreteLista extends React.Component {
  constructor(props) {
    super(props);
    this.state = { //esse state controla o render da tela e não possui o texto do bilhete
	        //que está no array do App; componente pai.
      visivel: true //controla se o lembrete deve ser exibido ou não (inicializa visível)
    };
  }

  remover = () => {
    this.setState({ visivel: false }); //função que atualiza o state para falso,
    //disparando a renderização e deixando de mostrar o lembrete (bilhete permanece no array
    // e não é removido)
  };

  render() {
    const { visivel } = this.state;

    if (!visivel) return null; //se visivel for false retorna null, o que faz com que o 
    //componente selecionado ao clicar no botão remover, não seja renderizado na tela 
    //lembrando que não altera o array no App Pai
    //React entende que o componente retornando null, não deve criar nada no DOM. 

    return (
      <div
        className="d-flex border pt-3 pb-3 px-3 rounded-3 mb-3 ms-3 me-3"
        style={{ backgroundColor: "#fdefd2ff" }}>

        {/* mostra o lembrete passado pelo componente App, via props.children */}
        <h6 className="mb-0 flex-grow-1 text-center">{this.props.children}</h6>     
        <button
          className="btn btn-sm btn-danger ms-2"
          onClick={this.remover} //chama a função remover ao clicar na lixeira (icon trash)
        >
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    );
  }
}

export default LembreteLista;
