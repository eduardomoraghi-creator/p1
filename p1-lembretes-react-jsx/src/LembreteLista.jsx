import React from "react";

class LembreteLista extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visivel: true, //controla se o lembrete deve ser exibido ou não (inicializa visível)
      favorito: false // controla se o lembrete está marcado como favorito (inicializa não favorito)
    };
  }

  remover = () => {
    this.setState({ visivel: false });//função que atualiza o state para falso,
    //disparando a renderização e deixando de mostrar o lembrete (bilhete permanece no array)
  };

  alternarFavorito = () => {
    this.setState((state) => ({ favorito: !state.favorito }));
    // Função para chavear o valor entre favorito e não favorito
    // Dispara a re-renderização e servirá para atualizar a visualização do botão (star e papperclip)
  };

  render() {

    if (!this.state.visivel) return null; //se visivel for false retorna null, o que faz com que o 
    //componente bilhete que teve click botão remover (trash) , não seja renderizado na tela 
    //React entende que o componente retornando null, não deve criar nada no DOM .
    //lembrando que não altera o array no App Pai.



    return (
      <div
        className="d-flex border pt-3 pb-3 px-3 rounded-3 mb-3 ms-3 me-3"
        style={{ backgroundColor: "#fdefd2ff" }}>

        {/* recebe texto do lembrete passado pelo App, via props.children */}
        {/* o uso de props.children permite renderizar "qualquer outro componente React" */}
        <h6 className="mb-0 flex-grow-1 text-center">{this.props.children}</h6>

        <button
          className={`btn btn-sm me-1 ${this.state.favorito ? "btn-outline-success" : "btn-warning"}`}
          onClick={this.alternarFavorito}
        >
          {this.state.favorito ? (
            <i className="fa-classic fa-star"></i>
          ) : (
            <i className="fa-solid fa-paperclip"></i>
          )}
        </button>

        <button
          className="btn btn-sm btn-outline-danger"
          onClick={this.remover}  //chama a função remover ao clicar na lixeira (icon trash)
        >
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    );
  }
}

export default LembreteLista;

