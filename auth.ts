import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { UserRole } from '@/generated/prisma/enums';

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 8, // 8 hours
  },

  pages: {
    signIn: '/auth/login',
  },

  providers: [
    Credentials({
      name: 'Credentials',

      credentials: {
        email: {
          label: 'Email',
          type: 'email',
        },

        password: {
          label: 'Password',
          type: 'password',
        },
      },

      async authorize(credentials) {
        const email = String(credentials?.email ?? '')
          .trim()
          .toLowerCase();
        const password = String(credentials?.password ?? '');

        if (!email || !password) {
          return null;
        }

        const isStaff = email.includes('admin');
        const role = isStaff ? UserRole.ADMIN : UserRole.CUSTOMER;

        return {
          id: `demo-${role.toLowerCase()}-${email}`,
          email,
          name: isStaff ? 'Demo Admin' : 'Demo Client',
          role,
        };
      },
    }),
  ],

  callbacks: {
    /**
     * Add custom user information to the JWT.
     */
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }

      return token;
    },

    /**
     * Add custom JWT information to the session.
     */
    async session({ session, token }) {
      if (session.user) {
        session.user.id = String(token.id);
        session.user.role = token.role as UserRole;
      }

      return session;
    },
  },
});
