import React, { Component } from 'react'
import { 
  Form, 
  FormGroup, 
  FormControl, 
  FormLabel, 
  Button 
} from 'react-bootstrap'

export default class Gift extends Component {
  state = { person: '', present: '' };

  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <FormLabel>Person</FormLabel>
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