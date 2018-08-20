import React, {Component} from "react";
import image from './icons/add.svg';

class BookShelf extends Component {
  render() {
    let {filteredBooks} = this.props;

    return (<div className="bookshelf-books">
      <ol className="books-grid">
        {
          filteredBooks.length > 0 && filteredBooks.map(filteredBook => (<li key={filteredBook.id}>
            <div className="book">
              <div className="book-top">
                <img src={filteredBook.imageLinks
                    ? filteredBook.imageLinks.thumbnail
                    : image
} alt="Capa"/>
                <div className="book-shelf-changer">
                  <select name="shelf" onChange={e => this.props.changeShelf(e, filteredBook)} value={filteredBook.shelf}>

                    <option value="currentlyReading">
                      Currently Reading
                    </option>
                    <option value="wantToRead">
                      Want to Read
                    </option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">
                {filteredBook.title}
              </div>
              <div className="book-authors">
                {
                  filteredBook.authors
                    ? filteredBook.authors.join(", ")
                    : ""
                }
              </div>
            </div>
          </li>))
        }
      </ol>
    </div>);
  }
}

export default BookShelf;
