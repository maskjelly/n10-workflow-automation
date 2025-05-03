import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  pages: {
    signIn: "/app/signin",
  },
  callbacks: {
    async jwt({ token, user }) {
      // During sign-in, persist the user ID into the token
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      // Send user ID from token to session
      if (session.user && token.id) {
        session.user.id = token.id as string
      }
      return session
    },
  },
})
