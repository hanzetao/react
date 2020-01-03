import React,{ Component }  from 'react';
import { BrowserRouter as Router, Route ,Link,Switch} from 'react-router-dom';
// import Navigation from '../../pages/TodoList';
import  Album from '../../../pages/Home/album';
import  Anchor from '../../../pages/Home/anchor';
import  List from '../../../pages/Home/list';
import  Singer from '../../../pages/Home/singer';
import  Song from '../../../pages/Home/song';
import  Index from '../../../pages/Home/index';
import './index.css';
      
      
      class App extends Component{
        constructor(props){
          super(props);
          this.state = {
            date:[]
          };

        }
      
        render() {
          return(
              <div  className="Start">
               <Router>
                  <ul className="menu">
                 
                        <li> <Link to="/">发现音乐</Link></li>  
                        <li> <Link to="/list">我的音乐</Link></li>  
                        <li> <Link to="/song ">朋友</Link></li>  
                        <li> <Link to="/anchor">商城</Link></li>  
                        <li> <Link to="/singer">音乐人</Link></li>  
                        <li> <Link to="/album">下载客户端</Link></li>  
                  </ul>
                  <div>
                  <Route exact path="/" component={Index}/>
                  <Route exact path="/list" component={List}/>
                  <Route exact path="/song" component={Song}/>
                  <Route exact path="/anchor" component={Anchor}/>
                  <Route exact path="/singer" component={Singer}/>
                  <Route exact path="/album" component={Album}/>
                  
              </div>
                </Router>
              </div>
          )
        }
      }
      

export default App;