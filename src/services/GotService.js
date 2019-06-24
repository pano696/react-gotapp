export default class gotService {

  constructor() {
    this._apiBase = 'https://www.anapioficeandfire.com/api/';
    this._noData = 'no data :(';
  }

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
  };

  async getAllCharacters() {
    const result = await this.getResource(`/characters?page=5&pageSize=10`);
    return result.map(this._transformCharacter);
  };

  async getCharacter(id) {
    const result = await this.getResource(`/characters/${id}`);
    return this._transformCharacter(result);
  };

  getAllBooks() {
    return this.getResource(`/books`);
  };

  getBook(id) {
    return this.getResource(`/books/${id}`);
  };

  getAllHouses() {
    return this.getResource(`/houses`);
  };

  getHouse(id) {
    return this.getResource(`/houses/${id}`);
  };

  _transformCharacter(char) {
    const noData = 'no data :('
    return {
        url: char.url ? char.url : noData,
        name: char.name ? char.name : noData,
        gender: char.gender ? char.gender : noData,
        born: char.born ? char.born : noData,
        died: char.died ? char.died : noData,
        culture: char.culture ? char.culture : noData
    }
  }

  _transformHoses(house) {
    const noData = 'no data :('
    return {
      url: house.url ? house.url : noData,
      name: house.name ? house.name : noData,
      region: house.region ? house.region : noData,
      words: house.words ? house.words : noData,
      titles: house.titles ? house.titles : noData,
      overlord: house.overlord ? house.overlord : noData,
      ancentralWeapons: house.ancentralWeapons ? house.ancentralWeapons : noData
    }
  }

  _transformBook(book) {
    const noData = 'no data :('
    return {
      name: book.name ? book.name : noData,
      numberOfPages: book.numberOfPages ? book.numberOfPages : noData,
      publiser: book.publiser ? book.publiser : noData,
      released: book.released ? book.released : noData
    }
  }
}
