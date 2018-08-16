import React from "react";
import {Route} from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import ListBooks from "./ListBooks";
import Search from "./Search";
import "./App.css";

class App extends React.Component {
  state = {

    books: [],
    showSearchPage: true
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({books});
    });
  }

  changeShelf = (e, filteredBook) => {
    let books = this.state.books;
    let shelf = e.target.value;
    filteredBook.shelf = e.target.value;
    this.setState({books});

    BooksAPI.update(filteredBook, shelf).then(() => {
      this.setState(state => ({
        books: state.books.filter(b => b.id !== filteredBook.id).concat([filteredBook])
      }));
    });
  };

  render() {
    return (<div className="app">
      <Route exact="exact" path="/" render={() => (<ListBooks books={this.state.books} changeShelf={this.changeShelf}/>)}/>
      <Route path="/search" render={() => (<Search books={this.state.books} changeShelf={this.changeShelf}/>)}/>
    </div>);
  }
}

export default App;
