
import React,{ Component }  from 'react';
import 'antd/dist/antd.css';
import './index.css';
import store from '../../../store/index'

import {OriginalSong} from '../../../store/actionCreators' 
      class Yc extends Component{
        constructor(props){
          super(props);
          this.state = {
            orignal:[],
            orid:0
          };
          this.storeChange=this.storeChange.bind(this)
          store.subscribe(this.storeChange)
        }
        storeChange(){
          this.setState(store.getState())
            //  console.log(this.props)
      }
        componentDidMount(){
          const action=OriginalSong()
          store.dispatch(action);
      }
        render() {
          return(
           <div className='Yc'>

           <ul>
           <li className='yinyue' >云音乐飙升版</li>
           {
            this.state.orignal.map((item)=>{
              // {console.log(item)}
              this.state.orid+=1
             return (this.state.orid<18&&<li>{item.name}</li>)
            })
       }
           </ul>
           </div>
          )
        }
      }
      

export default Yc;