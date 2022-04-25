import { fetchSinToken } from "../helpers/fetch"

export const startLogin = ( username, password ) => {
  return async () => {
    console.log( username, password )
    // const data ={
    //   username,
    //   password
    // }
    // auth es el enpoint
    const resp = await fetchSinToken( '/auth', { username, password}, 'POST' );
    // const resp = await fetchSinToken( '', { username, password}, 'GET' );

    console.log(resp);
    // const body = await resp.text();
    // console.log(body);

    //TODO

  }
  
}
