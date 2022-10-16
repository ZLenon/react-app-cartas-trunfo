import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <br />
        <label htmlFor="nameCard">
          Nome :-
          <input
            id="nameCard" // id igual o Htmlfor serve para o css depois
            data-testid="name-input" // requisito pede isso para passar no test
            placeholder="Nome da carta aqui" // msg opaca para auxiliar o usuario
            name="cardName" // nome igual o value
            value={ cardName } // value entre chave, mesmo nome do NAME
            type="text" // tipo indica que vai ser digitado um texto
            onChange={ onInputChange } // função acima do render no component pai
          />
        </label>
        <br />
        <label htmlFor="cardDescription">
          Descrição :-
          <textarea
            id="cardDescription"
            data-testid="description-input"
            placeholder="Descrição da carta"
            name="cardDescription"
            value={ cardDescription }
            cols="15"
            rows="2"
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="numberAtt1">
          Attr01 :-
          <input
            id="numberAtt1"
            data-testid="attr1-input"
            placeholder="01 - 99"
            name="cardAttr1"
            value={ cardAttr1 }
            type="number"
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="numberAtt2">
          Attr02 :-
          <input
            id="numberAtt2"
            data-testid="attr2-input"
            placeholder="01 - 99"
            name="cardAttr2"
            value={ cardAttr2 }
            type="number"
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="numberAtt3">
          Attr03 :-
          <input
            id="numberAtt3"
            data-testid="attr3-input"
            placeholder="01 - 99"
            name="cardAttr3"
            value={ cardAttr3 }
            type="number"
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="imgName">
          IMG-Name :-
          <input
            id="imgName"
            data-testid="image-input"
            placeholder="Nome da Imagem"
            name="cardImage"
            value={ cardImage }
            type="text"
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="optRarity">
          Raridade :-
          <select
            id="optRarity"
            data-testid="rare-input"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <br />
        { hasTrunfo ? (<p>Você já tem um Super Trunfo em seu baralho</p>
        ) : (
          <label htmlFor="checkSuper">
            Super Trybe Trunfo :-
            <input
              id="checkSuper"
              data-testid="trunfo-input"
              name="cardTrunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
              type="checkbox"
            />
          </label>)}
        <br />
        <br />
        <button
          data-testid="save-button"
          id="buttonSave"
          type="button"
          onClick={ onSaveButtonClick }
          disabled={ isSaveButtonDisabled }
        >
          Salvar
        </button>
      </form>
    );
  }
}
Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
export default Form;
