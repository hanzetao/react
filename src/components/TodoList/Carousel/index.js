import React,{ Component }  from 'react';
import 'antd/dist/antd.css';
import './index.css';
import store from '../../../store/index'
import { Carousel } from 'antd'; 
import {adsd,getTodoList} from '../../../store/actionCreators' 
      class App extends Component{
        constructor(props){
          super(props);
          this.state = {
            img:[{imageUrl:'asdf'}]
          };
          this.storeChange=this.storeChange.bind(this)
          store.subscribe(this.storeChange)
        }
        storeChange(){
          this.setState(store.getState())
            //  console.log(this.props)
      }
        componentDidMount(){
          const action=getTodoList()
          store.dispatch(action);
      }
        render() {
          return(
           <div id='container'>
              
           <Carousel autoplay>
           {
            this.state.img.map((item)=>{
              return(                <div>
                    <img  calssName='tup' src={item.imageUrl} />
                </div>)
            })
        }
         </Carousel>
           </div>
          )
        }
      }
      

export default App;