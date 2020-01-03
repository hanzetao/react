
import React,{ Component }  from 'react';
import 'antd/dist/antd.css';
import './index.css';
import store from '../../../store/index'

import {NewSong} from '../../../store/actionCreators' 
      class Xg extends Component{
        constructor(props){
          super(props);
          this.state = {
            new:[{imageUrl:'asdf'}],
            newid:0
          };
          this.storeChange=this.storeChange.bind(this)
          store.subscribe(this.storeChange)
        }
        storeChange(){
          this.setState(store.getState())
            //  console.log(this.props)
      }
        componentDidMount(){
          const action=NewSong()
          store.dispatch(action);
      }
        render() {
          return(
           <div className='xg'>
           <ul>
           {
             
            this.state.new.map((item)=>{
              // {console.log(item)}
              this.state.newid+=1
             return (this.state.newid<220&&<li>{item.name}</li>)
            })
       }
           </ul>
           </div>
          )
        }
      }
      

export default Xg;