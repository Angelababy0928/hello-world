/**
 * Created by Administrator on 2017/3/29.
 */
// import {containerLink} from './container/reducers';
// import {combineReducers} from 'redux';
//
//
// function teacherLoginData(state = {}, action) {
//     switch(action.type){
//         case "teacher_login_data":
//             return action.json;
//             break;
//         default:
//             return state
//     }
// }
// let totalReducer=combineReducers({
//     teacherLoginData,
//     containerLink
// });
// export default totalReducer






export function containerLink(state = {}, action) {
    switch(action.type){
        case "left_link_right":
            console.log(state);
            console.log({linkIndex:action.json,...state});
            return {...state,linkIndex:action.json};
            break;
        default:
            return state
    }
}