import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
  const session = await locals.auth();

  // If the user is not logged in, redirect to the sign-in page
  if (!session) {
    throw redirect(303, '/auth/signin');
  }

  // If the user is logged in, return the session data to the page
  return {
    user: session.user
  };
};