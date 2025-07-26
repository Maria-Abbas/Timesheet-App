

import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      // NOTE: keep the second param to satisfy some next-auth typings
      async authorize(credentials) {
        if (!credentials) return null;

        const { email, password } = credentials;

        if (email === "maria@gmail.com" && password === "1234") {
          // id as string to match NextAuth's default User type
          return { id: "1", name: "Maria Abbas", email };
        }

        return null;
      },
    }),
  ],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
