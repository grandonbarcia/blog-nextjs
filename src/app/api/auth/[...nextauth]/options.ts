import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { getUser } from '@/server-actions/actions';
import bcrypt from 'bcrypt';

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email:',
          type: 'text',
          placeholder: 'example@gmail.com',
        },
        password: {
          label: 'Password:',
          type: 'password',
          placeholder: 'password',
        },
      },
      async authorize(credentials) {
        // This is where you need to retrieve user data
        // to verify with credentials

        const userDB = await getUser(credentials?.email);

        const passwordMatches = await bcrypt.compare(
          credentials?.password as string,
          userDB?.password as string
        );

        const user = {
          id: userDB.toString(),
          name: 'Brandon Garcia',
          email: userDB.email,
        };

        if (passwordMatches) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
};
