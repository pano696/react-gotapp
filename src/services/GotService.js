export default class gotService {

  constructor() {
    this._apiBase = 'https://www.anapioficeandfire.com/api/';
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
    return {
        url: char.url,
        name: char.name,
        gender: char.gender,
        born: char.born,
        died: char.died,
        culture: char.culture
    }
  }

  _transformHoses(house) {
    return {
      name: house.name,
      region: house.region,
      words: house.words,
      titles: house.titles,
      overlord: house.overlord,
      ancentralWeapons: house.ancentralWeapons
    }
  }

  _transformBook(book) {
    return {
      name: book.name,
      numberOfPages: book.numberOfPages,
      publiser: book.publiser,
      released: book.released
    }
  }
}
