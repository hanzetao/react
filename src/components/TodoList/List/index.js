import React,{ Component }  from 'react';
import { BrowserRouter as Router, Route ,Link,Switch} from 'react-router-dom';
// import Navigation from '../../pages/TodoList';
import store from '../../../store/index'
import {getList} from '../../../store/actionCreators' 
import './index.css';
      
      
      class App extends Component{
        constructor(props){
          super(props);
          this.state = {
            list:[{imageUrl:'asdf'}]
          };
          this.storeChange=this.storeChange.bind(this)
          store.subscribe(this.storeChange)
        }
        storeChange(){
            this.setState(store.getState())
            //    console.log(store.getState())
        }
          componentDidMount(){
            const action=getList()
            store.dispatch(action);
        }
        render() {
          return(
              <div>
              
              <div  className="sda">
                <ul className="men">
                    <li className='da'>热门推荐</li>
                    <li>华语</li>
                    <li>流行</li>
                    <li>摇滚</li>
                    <li>民谣</li>
                    <li>电子</li>
                </ul>
              </div> 
              <div className='Hot'>
                    <div className='song'>
                        <ul>
                        {
      

                            this.state.list.map((item)=>{
                              // console.log(item);
                            return(
                            <li>
                                <div className='tp'><img className='img' src={item.picUrl} /></div>
                                <span className='span'>{item.name}</span>
                            </li>);
                        })
                    }

                        </ul>
                    </div>
                </div>
              </div>
          )
        }
      }
      

export default App;