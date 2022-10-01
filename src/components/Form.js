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
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <>
        <label htmlFor="name-input">
          Nome:
          <input
            data-testid="name-input"
            name="cardName"
            value={ cardName }
            type="text"
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="description-input">
          Descricao:
          <textarea
            data-testid="description-input"
            cols="15"
            rows="15"
            name="cardDescription"
            value={ cardDescription }
            type="textarea"
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="attr1-input">
          Attr01:
          <input
            data-testid="attr1-input"
            name="cardAttr1"
            value={ cardAttr1 }
            type="number"
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="attr2-input">
          Attr02:
          <input
            data-testid="attr2-input"
            name="cardAttr2"
            value={ cardAttr2 }
            type="number"
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="attr3-input">
          Attr03:
          <input
            data-testid="attr3-input"
            name="cardAttr3"
            value={ cardAttr3 }
            type="number"
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="image-input">
          imagem:
          <input
            data-testid="image-input"
            name="cardImage"
            value={ cardImage }
            type="text"
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="rare-input">
          <select
            data-testid="rare-input"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            Raridade:
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <br />
        <label htmlFor="trunfo-input">
          SuperTrybeTrunfo:
          <input
            data-testid="trunfo-input"
            name="cardTrunfo"
            checked={ cardTrunfo }
            type="checkbox"
            onChange={ onInputChange }
          />
        </label>
        <br />
        <button
          data-testid="save-button"
          type="button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </>
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
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
