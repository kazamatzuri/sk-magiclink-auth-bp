import { SvelteKitAuth } from "@auth/sveltekit"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from '$lib/database';
import NodemailerProvider from '@auth/core/providers/nodemailer';

import {
	
	EMAIL_SERVER_HOST,
	EMAIL_SERVER_PORT,
	EMAIL_SERVER_USER,
	EMAIL_SERVER_PASSWORD,
	EMAIL_FROM
} from '$env/static/private';

export const { handle } = SvelteKitAuth({
    adapter: PrismaAdapter(prisma),
  providers: [
    NodemailerProvider({
        server: {
            host: EMAIL_SERVER_HOST,
            port: Number(EMAIL_SERVER_PORT),
            auth: {
                user: EMAIL_SERVER_USER,
                pass: EMAIL_SERVER_PASSWORD
            }
        },
        from: EMAIL_FROM
    }),
  ],
})