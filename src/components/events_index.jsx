import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { readEvents } from '../actions/index';

class EventsIndex extends React.Component {
  componentDidMount(){
    this.props.readEvents()
  }

  renderEvents(){
    return _.map(this.props.events, event => {
      return (
        <tr key={event.id}>
          <td>{event.id}</td>
          <td>{event.title}</td>
          <td>{event.body}</td>
        </tr>
      )
    })
  }

  render(){
    return(
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>

        <tbody>
          {this.renderEvents()}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = (state) => {
  return { events: state.events };
}

const mapDispatchToProps = (dispatch) => {
  return(
    {
      readEvents: () => {dispatch(readEvents())},
    }
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);
