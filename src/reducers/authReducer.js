
// const state = {
//   name: 'Estudiante',
//   logged: true
// }

// const loginAction = {
//   type: types.login,
//   payload: {
//     name: 'Estudiante',
//     rol: 'Estudiante'
//   }
// }
import { types } from "../types/types";

const insialState = {
  checking: true,
  // username
}


export const authReducer = ( state = insialState, action) => {
  switch (action.type) {
    // case types.login:
    //   return {
    //     ...action.payload,
    //     logged: true
    //   }
    // case types.logout:
    //   return {
    //     logged: false
    //   }
  
    default:
      return state;
  }
}