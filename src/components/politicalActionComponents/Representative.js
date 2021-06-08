import React, { Component } from 'react';

export default class Representative extends Component {
  state = {
    name: '',
    urls: '',
    phones: ''
  }

  componentDidMount() {
    const { name, urls, phones } = this.props;

    this.setState({
      name: name,
      urls: urls,
      phones: phones
    })
  }

  render() {
    return (
      <div className="representative">
        <h2>{this.state.name}</h2>
        <h4>Contact</h4>
        <h5>Website: <a href={this.state.urls} style={{textDecoration: "underline"}}>{this.state.urls}</a></h5>
        <h5>Phone: {this.state.phones}</h5>
      </div>
    )
  }
}
