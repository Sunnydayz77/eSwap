import React, { Component } from 'react';
import Layout from '../components/shared/Layout'
import { getItems, getUserByID} from '../services/items';
import FormCheckInput from 'react-bootstrap/FormCheckInput';
import Item from './Item';

export class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          search: '',
          items: [],
          filteredList: [],
          clicked:false
        }
    }

    onSearch = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const items = await getItems()
        const filteredList = items.filter((item) => {
            return item.name.toLowerCase() === this.state.search.toLowerCase()
        })
        this.setState({
          filteredList: filteredList,
          clicked:true
      });
        const getUserName = await getUserByID('5e7156b1b477bf3888a5ac3e')


    }

    getUsername = async (id) => {

        const user = await getUserByID(id);
    }


    render() {
        const filteredList = this.state.filteredList.map((item, index) => {
            return (
                <div key={index}>
                    <div className="main-search-item">
                      <h4>{item.name}</h4>
                      <p>Description: {item.description}</p>
                      <p>Link: {item.link}</p>
                      <p>User Id: {item.user_id}</p>
                      <img src={item.link} alt="img link" width="400px" height="350px" />
                      <br></br>
                    </div>
                </div>
            )
        })
      
        const items = this.props.items.map((item, index) => {
            return (
                <div key={index}>
                    <div className="main-search-item">
                      <h4>{item.name}</h4>
                      <p>Description: {item.description}</p>
                      <p>Link: {item.link}</p>
                      <p>User Id: {item.user_id}</p>
                      <img src={item.link} alt="img link" width="400px" height="350px" />
                      <br></br>
                  </div>
                </div>
            )
        });
      
        return (
            <>
                <form onSubmit={this.handleSubmit} className="item-search">
                    <input type="text" onChange={this.onSearch} value={this.state.value} name="search" id="" placeholder="Search" />
                    <button type="submit">Submit</button>
                </form>
                <div className="items">
                    {filteredList.length !== 0 && this.state.clicked ? filteredList : 
                      filteredList.length !== 0 && this.state.clicked === false ? items : 
                      'No Items Match Your Search'}
                </div>
            </>
        )
    }
}

export default SearchPage;
