import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';

import { fetchWeather} from '../actions/index';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state={term: ''};

    // just binding so you can to this.state inside these methods without errors
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();

    // go fetch weather data (by calling actionCreator)
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
  }

  onInputChange(event) {
    // console.log(event.target.value);
    this.setState({term: event.target.value});
  }

  render() {
    console.log("search component")
    return(
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input  
          placeholder="Get a 5-day forecast in your fav cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )

  }

}

// makes sure the action flows down through the reducers
function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

// null because we aren't using the state in this container
export default connect(null, mapDispatchToProps)(SearchBar);
