import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const propriedades = this.props;
    return (
      <form className="form-header">
        <div>
          <label htmlFor="name">Inclui o texto: </label>
          <input
            name="searchText" type="text" value={propriedades.searchText}
            onChange={propriedades.onSearchTextChange} id="name"
          />
        </div>
        <div>
          <label htmlFor="bookmark">Mostrar somente favoritos</label>
          <input
            name="bookmarkedOnly" type="checkbox" checked={propriedades.bookmarkedOnly}
            onChange={propriedades.onBookmarkedChange} id="bookmark"
          />
        </div>
        <div>
          <label htmlFor="genero">Filtrar por gênero: </label>
          <select
            id="genero" name="selectedGenre" onChange={propriedades.onSelectedGenreChange}
            value={propriedades.selectedGenre}
          >
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </div>
      </form>
    );
  }
}

export default SearchBar;
