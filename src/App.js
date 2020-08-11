import React, { Component } from 'react';
import './App.scss';
import Picture from './components/Picture/Picture';
import HeaderText from './components/HeaderText/HeaderText';
import Annotation from './components/Annotation/Annotation';
import TextContent from './components/TextContent/TextContent';
import ListInfo from './components/ListInfo/ListInfo';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      annotation: [
        { id: 1, keyWord: 'ABOUT ME' },
        { id: 2, keyWord: 'EDUCATION' },
      ],
      textcontent:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, non, dolorem, cumque distinctio' +
        'mafni quam expedita velit laborum sunt amet facere tempora ut aliquam ad asperiores voluptatem dolorum! Quasi.',
      listcontent: [
        {
          id: 1,
          head: 1990,
          contenthead: 'I was born in Katowice',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente exercitationem, titam, dolores iste dolore est aut modi.',
        },
        {
          id: 2,
          head: 2005,
          contenthead: 'Secondary school specializing in artistic',
          content:
            'Eos, explicabo, nam, tenetur et ab eius deserunt aspernatur ipsum ducimus quibusdam quis voluptatibus.',
        },
        {
          id: 3,
          head: 2009,
          contenthead: 'First level fraduation in Graphic Design',
          content:
            'Aspernatur, mollitia, quos maxime eius suscripit sed beatae ducimus quaerat quibusdam perferendis? Iusto, quibusdam asperiores unde epellat.',
        },
        {
          id: 4,
          head: 2012,
          contenthead: 'Second level graduation inGraphic Design',
          content: 'Ducimus,aliquam tempore autem itaque et accusantinum!',
        },
      ],
    };
  }

  render() {
    return (
      <main className="app">
        <div className="allelement">
          <Picture />
          <HeaderText />
          <hr className="line" />
          <Annotation annotations={this.state.annotation[0]} />
          <TextContent textcontent={this.state.textcontent} />
          <Annotation annotations={this.state.annotation[1]} />
          <ListInfo listcontent={this.state.listcontent} />
        </div>
      </main>
    );
  }
}

export default App;
