import React,{ Component }  from 'react';
import { BrowserRouter as Router, Route ,Link,Switch} from 'react-router-dom';
// import Navigation from '../../pages/TodoList';
import store from '../../../store/index'
import {GetDisc} from '../../../store/actionCreators' 
import './index.css';
      
      
      class App extends Component{
        constructor(props){
          super(props);
          this.state = {
            disc:[{picUrl:'adsf'}]
          };
          this.storeChange=this.storeChange.bind(this)
          store.subscribe(this.storeChange)
        }
        storeChange(){
            this.setState(store.getState())
            //    console.log(store.getState())
        }
          componentDidMount(){
            const action=GetDisc()
            store.dispatch(action);
        }
        render() {
          return(
              <div>
              
              <div  className="sda">
                <ul className="men">
                    <li className='da'>新碟上架</li>
                 
                </ul>
              </div> 
              <div className='Hots'>
                    <div className='songs'>
                        <ul>

                       {
                          this.state.disc.map((item)=>{
                            return <div className='discdiv'><img  className='discimg' src={item.picUrl} /><div className='disczi'>{item.company}</div></div>
                              
                            
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