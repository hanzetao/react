import React,{ Component }  from 'react';
import store from '../../store/index'
import { BrowserRouter as Router, Route ,Link,Switch,HashRouter} from 'react-router-dom';

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
              <div className='b0od'>

                                          <div  className="Start">
                                          <HashRouter>
                                          <div>
                                         
                                              <ul className="menu">
                                                     <li className='wang'><Link to="/">网易云音乐</Link></li>
                                                    <li> <Link to="/fd">发现音乐</Link></li>  
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
                                              <Route children={()=>{return <h1>404</h1>}}/>
                                              </Switch>
                                          
                                          </div>

                                            </HashRouter>
                                          </div>
                                          <div className='boo'>
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
                                              <Index />
                                              </div>
                                          </div>
                                    </div>
              </div>
          )
        }
    }
    class Index extends Component{
      render() {
          return (
            <div className='bod'>
            <div className="g-ft ">
            <div className="m-ft">
            <div className="wrap f-cb">
            <div className="copy">
            <p className="link" id="music-link">
            <div>服务条款</div>
            <div>隐私政策</div>
            <div>儿童隐私政策</div>
            <div>版权投诉指引</div>
            <div>意见反馈</div></p>
            <p className="right s-fc3">
            <span className="sep span">网易公司版权所有©1997-2020</span><span className="span">杭州乐读科技有限公司运营：</span>浙网文[2018]3506-263号
            </p>
            <p className="contact s-fc3">
            <span className="a">违法和不良信息举报电话：0571-89853516</span>
            <span className="b">举报邮箱：</span><a className="alink" href="mailto:ncm5990@163.com">ncm5990@163.com</a>
            </p>
            <p className="right s-fc3">
            <span className="sep span">粤B2-20090191-18</span><a  rel="noopener noreferrer" target="_blank" className="alink s-fc3">工业和信息化部备案管理系统网站</a>
            </p>
            </div>
        
            </div>
            </div>
            </div>
      </div>
          );
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