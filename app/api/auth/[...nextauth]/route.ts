import NextAuth, { type NextAuthOptions, type User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "maria@gmail.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<User | null> {
        if (
          credentials?.email === "maria@gmail.com" &&  // check email instead of username
          credentials?.password === "1234"
        ) {
          const user: User = {
            id: "1",                   // id must be string
            name: "Maria Abbas",
            email: "maria@gmail.com",
          };
          return user;
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
