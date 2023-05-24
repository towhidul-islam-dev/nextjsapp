import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: '702503081608-eiv00dti64s1se74ta3qk2odejt3s5mj.apps.googleusercontent.com',
      clientSecret: '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',
    }),
  ],
}

export default NextAuth(authOptions)