import React, { Component } from 'react'
import { 
  Form, 
  FormGroup, 
  FormControl, 
  ControlLabel, 
  Button 
} from 'react-bootstrap'

export default class Gift extends Component {
  state = { person: '', present: '' };

  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <ControlLabel>Person</ControlLabel>
            <FormControl  
              className='input-person' 
              onChange={event => this.setState({ person: event.target.value })}
            />
          </FormGroup>
        </Form>
      </div>
    )
  }
}