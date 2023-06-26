import { redirect } from '@sveltejs/kit';
const unProtectedRoutes = [
  '/',
  '/login',
];

export const handle = async ({ event, request, resolve }) => {

  const sessionId = event.cookies.get('connect.sid');
  if (!sessionId && !unProtectedRoutes.includes(event.url.pathname)) {
    throw redirect(303, '/login');
  }

  if (sessionId && request) {

    request.headers.cookie = `connect.sid=${sessionId}`;
  }






  return resolve(event);
}