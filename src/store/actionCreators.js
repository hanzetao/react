import {DA,LIST,CLOUD,NEW_SONG,ORIGNAL_SONG,GET_DISC} from '../actionTypes/actionType'
import axios from 'axios'

export const getListAction=(data)=>({
    type:DA,
    data
})
export const getTodoList=()=>{
    return(dispatch)=>{
        fetch('http://119.3.153.161:3000/banner').then(res=>res.json(),err=>{
        }).then(data=>{
            const action=getListAction(data)
            dispatch(action)
        })
    }
} 
export const getLists=(data)=>({
    type:LIST,
    data
})
export const getList=()=>{
    return(dispatch)=>{
        fetch('http://119.3.153.161:3000/personalized?limit=8').then(res=>res.json(),err=>{
        }).then(data=>{
            const action=getLists(data)
            dispatch(action)
        })
    }
} 

//音乐飙升榜
export const getCloud=(data)=>({
    type:CLOUD,
    data
})
export const CloudMusic=()=>{

    return(dispatch)=>{
        fetch('http://119.3.153.161:3000/top/list?idx=1').then(res=>res.json(),err=>{
        }).then(data=>{
            const action=getCloud(data)
            dispatch(action)
        })
    }
} 
//新歌榜
export const getNew=(data)=>({
    type:NEW_SONG,
    data
})
export const NewSong=()=>{
    
    return(dispatch)=>{
        fetch('http://119.3.153.161:3000/top/list?idx=2').then(res=>res.json(),err=>{
        }).then(data=>{
            const action=getNew(data)
            dispatch(action)
        })
    }


} 
//原创歌曲
export const getOriginal=(data)=>({
    type:ORIGNAL_SONG,
    data
})
export const OriginalSong=()=>{

    return(dispatch)=>{
        fetch('http://119.3.153.161:3000/top/list?idx=3').then(res=>res.json(),err=>{
        }).then(data=>{
            const action=getOriginal(data)
            dispatch(action)
        })
    }
} 
//新碟上架
export const getDiscs=(data)=>({
    type:GET_DISC,
    data
})
export const GetDisc=()=>{
    return(dispatch)=>{
        fetch('http://119.3.153.161:3000/top/album?offset=0&limit=5').then(res=>res.json(),err=>{
        }).then(data=>{
            const action=getDiscs(data)
            dispatch(action)
        })
    }

} 