import axios from 'axios';
import React, { Component } from 'react';
import Dropdown from './Dropdown';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
    };
  }

  getLocationData = val => {
    return val.map(loc => {
      return {
        key: loc.id,
        name: loc.name,
        residents: loc.residents,
      };
    });
  };

  componentDidMount() {
    let self = this;
    axios.get(`https://rickandmortyapi.com/api/location`).then(resp => {
      console.log(resp);

      if (resp.status === 200) {
        self.setState({ locations: resp.data && resp.data.results });
      }
    });
  }

  render() {
    const getLocation = this.getLocationData(this.state.locations);
    console.log('GL: ', getLocation);
    return (
      <div>
        HOME
        <Dropdown location={getLocation} label="locations" />
      </div>
    );
  }
}

export default Home;
