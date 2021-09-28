import { Component } from 'react';
import './App.css';
import TOC from './components/TOC';
import Subject from './components/Subject';
import Content from './components/Content';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      subject:{title:'WEB', sub:'World Wide Web!'}
    }
  }
  render(){
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}>  
        </Subject>
        <Subject title="REACT" sub="this is amazing!!"></Subject>
        <TOC></TOC>
        <Content title="HTML" content="HTML is HyperText Markup Lanaguage. "></Content>
      </div>
    );
  }
}

export default App;
