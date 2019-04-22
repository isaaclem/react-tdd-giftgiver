import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import { max_number } from '../helper';
import Gift from './Gift';

class App extends Component {
  state = {
    gifts: []
  };
  
  removeGift = id => {
    const gifts = this.state.gifts.filter(gift => gift.id !== id);
    this.setState({ gifts });
  }

  addGift = () => {
    const { gifts } = this.state;
    const ids = gifts.map(gift => gift.id);
    gifts.push({ id: max_number(ids)+1 });

    this.setState({ gifts }); 
  }

  render() {
    return (
      <div>
        <h2>Gift Giver</h2>
        <div className='gift-list'>
          {
            this.state.gifts.map(gift => {
              return (
                <Gift 
                  key={gift.id} 
                  gift={gift}
                  removeGift={this.removeGift}
                />
              )
            })
          }
        </div>
        <Button className='btn-add' onClick={this.addGift}>Add Gift</Button>
      </div>
    )
  }
}

export default App;