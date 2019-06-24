export default class gotService {

  constructor() {
    this._apiBase = 'https://www.anapioficeandfire.com/api/';
  }

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
  };

  getAllCharacters = async () => {
    const result = await this.getResource(`/characters?page=5&pageSize=10`);
    return result.map(this._transformCharacter);
  };

  getCharacter = async (id) => {
    const result = await this.getResource(`/characters/${id}`);
    return this._transformCharacter(result);
  };

  getAllBooks = async () => {
    const result = await this.getResource(`/books`);
    return result.map(this._transformBook);
  };

  getBook = async (id) => {
    const result = await this.getResource(`/books/${id}`);
    return this._transformBook(result);
  };

  getAllHouses = async () => {
    const result = await this.getResource(`/houses`);
    return result.map(this._transformHoses);
  };

  getHouse = async (id) => {
    const result = await this.getResource(`/houses/${id}`);
    return this._transformHoses(result);
  };

  _setId = (url) => {
    return url.substring(url.lastIndexOf('/') + 1)
  }

  isSet = (data) => {
    if (data) return data
    else return 'no data ;('
  }

  _transformCharacter = (char) => {
    return {
        id: this._setId(char.url),
        name: this.isSet(char.name),
        gender: this.isSet(char.gender),
        born: this.isSet(char.born),
        died: this.isSet(char.died),
        culture: this.isSet(char.culture)
    }
  }

  _transformHoses = (house) => {
    return {
      id: this._setId(house.url),
      name: this.isSet(house.name),
      region: this.isSet(house.region),
      words: this.isSet(house.words),
      titles: this.isSet(house.titles),
      overlord: this.isSet(house.overlord),
      ancentralWeapons: this.isSet(house.ancentralWeapons)
    }
  }

  _transformBook = (book) => {
    return {
      id: this._setId(book.url),
      name: this.isSet(book.name),
      numberOfPages: this.isSet(book.numberOfPages),
      publiser: this.isSet(book.publiser),
      released: this.isSet(book.released)
    }
  }
}
