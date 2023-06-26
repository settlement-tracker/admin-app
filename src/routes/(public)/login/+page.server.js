import { PUBLIC_API_URL } from '$env/static/public';
import axios from 'axios';

export const actions = {
  logout: async ({ cookies }) => {

    cookies.set('connect.sid', '', {})


  },
  login: async ({ cookies, request }) => {

    const data = await request.formData();
    const username = data.get('username');
    const password = data.get('password');

    console.log('username: ', username);
    console.log(PUBLIC_API_URL);
    try {
      // const response = await fetch(`${PUBLIC_API_URL}login`,
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json"
      //     },
      //     body: JSON.stringify({
      //       username: username,
      //       password: password
      //     }),
      //     credentials: 'include'
      //   }
      // );
      const response = await axios.post(`${PUBLIC_API_URL}login`, {
        username,
        password
      })

      if (response.status === 403) {
        return {
          status: 403,
          message: 'Invalid username or password',
          username,
          password
        }
      }

      const cookieToSet = response.headers['set-cookie'][0];
      // 'connect.sid=s%3AZabu_7pZd282TDA5oiENJbIQtb74hTWj.wE%2FuXASxhG%2Bxknj77xXDKgP4zOT6U3l%2F0LaaDF4YRHw; Path=/; Expires=Wed, 28 Jun 2023 10:58:52 GMT; HttpOnly'
      const cookieValue = cookieToSet.split(';')[0];
      cookies.set('connect.sid', cookieValue, {
        path: '/',
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 2 // 2days
      })

      return {
        status: 200,
        message: 'Login successful',
        username,
        password
      }



    } catch (e) {
      console.error(e)
      // if ((e).message === 'Request failed with status code 403') {
      //   return {
      //     status: 403,
      //     message: 'Invalid username or password',
      //     username,
      //     password
      //   }
      // }
      // else {

      return {
        status: 500,
        message: 'Internal server error',
        username,
        password
      }
    }
    // }



  }


}