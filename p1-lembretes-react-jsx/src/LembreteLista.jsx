import React from "react";

class LembreteLista extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visivel: true,
      favorito: false
    };
  }

  remover = () => {
    this.setState({ visivel: false });//função que quando chamada (clique no icone trash 
    // do componente), altera "visivel" para false e re-renderiza o estado fazendo com que
    //aquele componente deixe de ser mostrado na tela (apesar de constar no array bilhetes) 
  };

  alternarFavorito = () => {
    this.setState((state) => ({ favorito: !state.favorito })); // "Inverte o valor de
    // 'favorito' do lembrete atual. Chamado ao clicar no ícone de estrela/paperclip."

  };

  render() {
    const { visivel, favorito } = this.state;
    const { mostrarFavoritos, children } = this.props; //this.props contem o que foi passado
    // pelo App (pai) do estado da variável mostrarFavoritos e children vindos do App 

    // Se o filtro de favoritos estiver ativo e o bilhete estiver marcado como não 
    // favorito (!favorito) OU se o bilhete tiver sido removido (clicando no icone trash)
    // (!visivel), então retorna null e não será renderizado.
    if (!visivel || (mostrarFavoritos && !favorito)) return null;

    return (
      <div
        className="d-flex border pt-3 pb-3 px-3 rounded-3 mb-3 ms-3 me-3"
        style={{ backgroundColor: "#fdefd2ff" }}
      >
        <h6 className="mb-0 flex-grow-1 text-center">{children}</h6>

        <button
          className={`btn btn-sm me-1 ${favorito ? "btn-outline-success" : "btn-warning"}`}
          onClick={this.alternarFavorito} //chama a função para alterar o estado
          // favorito/não favorito do bilhete.
        >
          {favorito ? (
            <i className="fa-classic fa-star"></i>
          ) : (
            <i className="fa-solid fa-paperclip"></i>
          )}
        </button>

        {/* oculta (não remove do array) o lembrete da tela alterando a variável
        'visivel' para false.*/}
        <button className="btn btn-sm btn-outline-danger" onClick={this.remover}>
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    );
  }
}

export default LembreteLista;