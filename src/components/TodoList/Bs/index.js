
import React,{ Component }  from 'react';
import 'antd/dist/antd.css';
import './index.css';
import store from '../../../store/index'

import {CloudMusic} from '../../../store/actionCreators' 
      class Bs extends Component{
        constructor(props){
          super(props);
          this.state = {
            cloud:[{imageUrl:'asdf'}],
            a:0
          };
          this.storeChange=this.storeChange.bind(this)
          store.subscribe(this.storeChange)
        }
        storeChange(){
          this.setState(store.getState())
            //  console.log(this.props)
      }
        componentDidMount(){
          const action=CloudMusic()
          store.dispatch(action);
      }
        render() {
          return(
           <div className='bs'>
           <ul>
           {
             
                this.state.cloud.map((item)=>{
                  this.state.a+=1
                 return (this.state.a<820&&<li>{item.name}</li>)
                })
           }
              
           </ul>
           </div>
          )
        }
      }
      

export default Bs;