import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <>
        <label htmlFor="name" data-testid="name-input">
          Nome:
          <input type="text" />
        </label>
        <br />
        <label htmlFor="textarea" data-testid="description-input">
          Descricao:
          <textarea type="textarea" />
        </label>
        <br />
        <label htmlFor="number" data-testid="attr1-input">
          Attr01:
          <input type="number" />
        </label>
        <br />
        <label htmlFor="number" data-testid="attr2-input">
          Attr02:
          <input type="number" />
        </label>
        <br />
        <label htmlFor="number" data-testid="attr3-input">
          Attr03:
          <input type="number" />
        </label>
        <br />
        <label data-testid="image-input">
          imagem:
          <input />
        </label>
        <br />
        <select data-testid="rare-input">
          Raridade:
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <br />
        <label>
          SuperTrybeTrunfo:
          <input data-testid="trunfo-input" type="checkbox" />
        </label>
        <br />
        <button data-testid="save-button" type="button">Salvar</button>
      </>
    );
  }
}
export default Form;
