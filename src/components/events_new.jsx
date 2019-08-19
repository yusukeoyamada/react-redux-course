import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import RaisedBotton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import { postEvent } from '../actions/index';

class EventsNew extends React.Component {
  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  renderField(field){
    const { input, label, type, meta: {touched, error } } = field
    return (
      <TextField
        hintText={label}
        floatingLabelText={label}
        type={type}
        errorText={touched && error}
        {...input}
        fullWidth={true}
      />
    )
  }

  async onSubmit(values){
    await this.props.postEvent(values)
    this.props.history.push('/')
  }

  render(){
    const { handleSubmit, pristine, submitting, invalid } = this.props
    const style = { margin: 12 }

    return(
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div>
          <Field label="Title" name="title" type="text" component={this.renderField} />
        </div>
        <div>
          <Field label="Body" name="body" type="text" component={this.renderField} />
        </div>
        <RaisedBotton label="Submit" type="submit" style={style} disabled={pristine || submitting || invalid} />
        <RaisedBotton label="Cancel" style={style} containerElement={<Link to="/" />} />
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return(
    {
      postEvent: (values) => {dispatch(postEvent(values))},
    }
  )
}

const validate = values => {
  const errors = {}

  if (!values.title) errors.title = "Enter a title, please."
  if (!values.body) errors.body = "Enter a body, please."

  return errors;
}

export default connect(null, mapDispatchToProps)(
  reduxForm({validate, form: 'eventNewForm'})(EventsNew)
);
