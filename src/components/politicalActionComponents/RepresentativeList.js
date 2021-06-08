import React, { Component } from 'react';
import Representative from './Representative';

export default class RepresentativeList extends Component {
  state = {
    representatives: null,
  }

  getReps = (zip) => {
    const authToken = process.env.REACT_APP_AUTH_TOKEN
    fetch(`https://www.googleapis.com/civicinfo/v2/representatives/?address=${zip}&key=${authToken}`)
      .then(response => response.json())
      .then(data => {
       this.setState({representatives: data['officials']})
      })
  }

  onSearch = (event) => {
    event.preventDefault();
    const searchValue = event.target[0].value;
    const searchValueNum = Number(searchValue);
    this.getReps(searchValueNum);
  }

  render() {
    return (
      <React.Fragment >  
        <div>
          <form onSubmit={this.onSearch}>
            <input
              type="number"
              placeholder="1234567"
            />
            <button
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
        {this.state.representatives ? (
          <div className="representatives">
            {this.state.representatives.slice(2, 5).map(representative => (
              <Representative 
                key={representative.name}
                name={representative.name}
                urls={representative.urls}
                phones={representative.phones}
              />
            ))}
          </div>) : ('')
        }
       </React.Fragment>
    )
  }
}
