import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import ContactItem from './model/ContactItems';
import Contact from './model/Contact';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.contact = new Contact();
    this.state = {
      items: this.contact.items
    };
    this.createItem = this.createItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  createItem(content, number) {
    let item = new ContactItem(content, number);
    let items = this.contact.add(item);
    this.setState({items: items});
  }

  deleteItem(item) {
    let items = this.contact.delete(item);
    this.setState({ items: items });
  }

  render() {
    return (
      <div className="container my-5">
        <div className="row border w-50 mx-auto p-2" id="main-container">
          <Header></Header>
          <Body items={this.state.items} onDeleteItem={this.deleteItem}></Body>
          <Footer createItem={this.createItem}></Footer>
        </div>
      </div>
    );
  } 
}

export default App;
