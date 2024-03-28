import type { NextAuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import { getUser } from '@/server-actions/actions';
import bcrypt from 'bcrypt';

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),

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

        const newPW = 'thisismypassword';

        const passwordMatches = await bcrypt.compare(
          newPW as string,
          userDB?.password as string
        );

        console.log(userDB);
        console.log(credentials.password);
        console.log(passwordMatches);
        console.log(newPW);

        if (passwordMatches) {
          return userDB;
        } else {
          return null;
        }
      },
    }),
  ],
};
