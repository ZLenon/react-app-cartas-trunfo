import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      filter: '',
      filterRare: 'todas',
      filCardSuper: false,
      newCard: [],
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => {
      const { cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
      } = this.state;
      const cardAttrmax = 90;
      const cardAttSumMax = 210;
      if (cardName.length > 0 && cardDescription.length > 0
        && cardImage.length > 0 && cardRare.length > 0
        && Number(cardAttr1) <= cardAttrmax && Number(cardAttr1) >= 0
        && Number(cardAttr2) <= cardAttrmax && Number(cardAttr2) >= 0
        && Number(cardAttr3) <= cardAttrmax && Number(cardAttr3) >= 0
        && Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= cardAttSumMax) {
        this.setState({ isSaveButtonDisabled: false });
      } else {
        this.setState({ isSaveButtonDisabled: true });
      }
    });
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      newCard,
    } = this.state;

    const createNewCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState(
      {
        newCard: [...newCard, createNewCard] },
      () => {
        this.hasTrunfo();
        this.setState({
          cardName: '',
          cardDescription: '',
          cardAttr1: '0',
          cardAttr2: '0',
          cardAttr3: '0',
          cardImage: '',
          cardRare: 'normal',
          cardTrunfo: false,
          isSaveButtonDisabled: true,
        });
      },
    );
  };

  hasTrunfo = () => {
    const { newCard } = this.state;
    const hasTrunfo = newCard.some((card) => card.cardTrunfo);
    this.setState({ hasTrunfo });
  };

  removeCard = (card) => {
    const { newCard } = this.state;
    this.setState({
      newCard: newCard.filter((_call, index) => index !== card),
    }, () => { this.hasTrunfo(); });
  };

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      newCard,
      filter,
      filterRare,
      filCardSuper,
    } = this.state;

    let filterName = [];
    if (!filCardSuper) {
      filterName = (filterRare === 'todas')
        ? newCard.filter((card) => card.cardName.includes(filter))
        : newCard.filter((card) => card.cardRare === filterRare)
          .filter((card) => card.cardName.includes(filter));
    } else {
      filterName = newCard.filter((card) => card.cardTrunfo);
    }

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <h4>Cartas</h4>

        <label htmlFor="filter">
          <input
            name="filter"
            type="text"
            id="filter"
            data-testid="name-filter"
            onChange={ this.onInputChange }
            disabled={ filCardSuper }
            placeholder="Nome da cartas"
          />
        </label>

        <label htmlFor="filterRare">
          <select
            name="filterRare"
            value={ filterRare }
            id="filterRare"
            data-testid="rare-filter"
            onChange={ this.onInputChange }
            disabled={ filCardSuper }
            placeholder="Raridade"
          >
            <option key="todas">todas</option>
            <option key="normal">normal</option>
            <option key="raro">raro</option>
            <option key="muito raro">muito raro</option>
          </select>
        </label>

        <label htmlFor="filCardSuper">
          <input
            type="checkbox"
            name="filCardSuper"
            checked={ filCardSuper }
            id="filCardSuper"
            data-testid="trunfo-filter"
            onChange={ this.onInputChange }
          />
          Super Trybe Trunfo
        </label>

        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <h4>Cartas Salvas</h4>

        { filterName.map((card, index) => (
          <div key={ index }>
            <Card
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.cardImage }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }
            />
            <button
              type="submit"
              data-testid="delete-button"
              onClick={ () => this.removeCard(index) }
            >
              Excluir
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
