import React, {Component} from 'react';
import axios from 'axios';

// Create context
const CategoriesContext = React.createContext();

// Consumer
export const CategoriesConsumer = CategoriesContext.Consumer;

// Provider
class CategoriesProvider extends Component {
  token = 'XXXXXXX';
  state = {
    categories: []
  };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = async () => {
    let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}`;
    let categories = await axios.get(url);
    this.setState({
      categories: categories.data.categories
    });
  }

  render() {
    return (
      <CategoriesContext.Provider
        value={{
          categories: this.state.categories
        }}>
        {this.props.children}
      </CategoriesContext.Provider>
    );
  }
}

export default CategoriesProvider;
