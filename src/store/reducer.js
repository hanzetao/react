import {DA,LIST,CLOUD,NEW_SONG,ORIGNAL_SONG,GET_DISC} from '../actionTypes/actionType'
const defaultState={img:[],list:[],cloud:[],new:[],orignal:[],disc:[]}

export default (state=defaultState,action)=>{
    //轮播图片
    if(action.type===DA){
        // console.log(action);
            let newState=JSON.parse(JSON.stringify(state))
            newState.img=action.data.banners
            return newState
    }
    if(action.type===LIST){
        // console.log(action);
            let newState=JSON.parse(JSON.stringify(state))
            newState.list=action.data.result
            return newState
    }
    //音乐飙升榜
    if(action.type===CLOUD){
        console.log(action);
            let newState=JSON.parse(JSON.stringify(state))
            newState.cloud=action.data.playlist.tracks
            return newState
    }//新歌
    if(action.type===NEW_SONG){
        // console.log(action);
            let newState=JSON.parse(JSON.stringify(state))
            newState.new=action.data.playlist.tracks
            return newState
    }
    //原创
    if(action.type===ORIGNAL_SONG){
        console.log(action);
            let newState=JSON.parse(JSON.stringify(state))
            newState.orignal=action.data.playlist.tracks
            return newState
    }
        //新碟上架
        if(action.type===GET_DISC){
            // console.log(action);
                let newState=JSON.parse(JSON.stringify(state))
                newState.disc=action.data.albums
                return newState
        }
    // console.log(newState.img);
    return state
}