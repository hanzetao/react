import React,{ Component }  from 'react';
import store from '../../store/index'
import { BrowserRouter as Router, Route ,Link,Switch} from 'react-router-dom';

import Carousels from '../../components/TodoList/Carousel/index';
import List from '../../components/TodoList/List/index';
import Disc from '../../components/TodoList/Disc/index';
import Bs from '../../components/TodoList/Bs/index';
import Xg from '../../components/TodoList/Xg/index';
import Yc from '../../components/TodoList/Yc/index';

import  Album from './album';
import  Anchor from './anchor';
// import  Lists from './list';
import  Singer from './singer';
import  Song from './song';
import  Index from './index';


import './index.css';
      class App extends Component{
        constructor(props){
          super(props);
            this.state=store.getState()
         
            this.storeChange=this.storeChange.bind(this)
            store.subscribe(this.storeChange)
          }
          storeChange(){
            this.setState(store.getState())
              //  console.log(this.props)
        }
        render() {
          return(
              <div id='bod'>

                                          <div  className="Start">
                                          <Router>
                                          <div>
                                              <ul className="menu">
                                            
                                                    <li> <Link to="/">发现音乐</Link></li>  
                                                    <li> <Link to="/lists">我的音乐</Link></li>  
                                                    <li> <Link to="/song ">朋友</Link></li>  
                                                    <li> <Link to="/anchor">商城</Link></li>  
                                                    <li> <Link to="/singer">音乐人</Link></li>  
                                                    <li> <Link to="/album">下载客户端</Link></li>  
                                              </ul>
                                              
                                              <Switch>
                                              <Route  path="/list" component={Lists}/>
                                              <Route  path="/song" component={Song}/>
                                              <Route  path="/anchor" component={Anchor}/>
                                              <Route  path="/singer" component={Singer}/>
                                              <Route  path="/album" component={Album}/>
                                              <Route children={()=>{return <h3>404</h3>}}/>
                                              </Switch>
                                          
                                          </div>

                                            </Router>
                                          </div>
                    <Carousels />
                    <List />
                    <Disc />
                    <div className='lists'>
                        <div className='bd'>
                          榜单
                        </div>
                        <div className='gedan'>
                        <Bs />
                        <Xg  />
                        <Yc />
                        </div>
                    </div>
              </div>
          )
        }
    }
    class Lists extends Component{
      render() {
          return (
              <div>   阿的算法的司法岁的法大赛阿斯副 </div>
          );
      }
  
  }
export default App;