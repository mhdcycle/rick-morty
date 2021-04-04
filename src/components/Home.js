import axios from 'axios';
import React, { Component } from 'react';
import Dropdown from './Dropdown';
import CharacterCard from './Card';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      resident: [],
      character: [],
      locationVal: '',
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

  handleChange = event => {
    let charData = [];
    let self = this;
    axios.get(`https://rickandmortyapi.com/api/location/${event.target.value}`).then(response => {
      if (response.status === 200) {
        return Promise.all(
          response.data &&
            response.data.residents.map(res => {
              axios.get(res).then(response => {
                charData.push(response.data);
                self.setState({ character: charData });
              });
            }),
        );
      }
    });
    self.setState({ locationVal: event.target.value });
  };

  render() {
    const { character, locationVal } = this.state;
    const getLocation = this.getLocationData(this.state.locations);
    return (
      <div>
        <Dropdown
          location={getLocation}
          label="Select Locations"
          handleChange={this.handleChange}
          locationVal={locationVal}
        />
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {character &&
            character.length > 0 &&
            character.map(item => {
              return (
                <CharacterCard
                  name={item.name}
                  status={item.status}
                  image={item.image}
                  id={item.id}
                  gender={item.gender}
                  knownLocation={item.location && item.location.name}
                  species={item.species}
                  type={item.type ? item.type : 'unkown'}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

export default Home;
