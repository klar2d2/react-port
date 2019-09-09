import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'


import Banner from './navigation/Banner'
import Nav from './navigation/Nav'
import './App.css';

class App extends React.Component {
  state = {
    quotes: [{
      title: 'Sleater-Kinney Hire New Touring Drummer Angie Boylan',
      body: 'Boylan of Aye Nako and Freezing Cold stepped in for Janet Weiss, who left the band earlier this year'
    },
    {
      title: 'Frankie Cosmos: Close It Quietly',
      body: 'On her fourth studio album, Greta Kline gamely stares down her middle twenties, that messy period where one’s early projections about the future tend to start unraveling.'
    },
    {
      title: 'Lana Del Rey: Norman Fucking Rockwell',
      body: 'On her elegant and complex fifth album, Lana Del Rey sings exquisitely of freedom and transformation and the wreckage of being alive. It establishes her as one of America’s greatest living songwriters.'
    }]
  }
  render() {
    return (
      <div className="App">
        <Banner />
          <div>
            <Nav quotes={this.state.quotes} />
          </div>
      </div>
    );
  }
}

export default App;
