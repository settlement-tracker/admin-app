import { PUBLIC_API_URL } from '$env/static/public';
import { PRIVATE_API_KEY } from '$env/static/private';
import axios from 'axios';


export const load = async ({ params, cookies }) => {

  const sessionId = cookies.get('connect.sid');
  // const cookieValue = sessionId.split(';')[0];

  debugger
  const users = await axios.get(`${PUBLIC_API_URL}users`, {
    headers: {
      cookie: sessionId
    },
    // headers: {
    //   "api-key": PRIVATE_API_KEY
    // },
    withCredentials: true,
  })
  console.log(users)
  debugger
  return { data: users.data }

}