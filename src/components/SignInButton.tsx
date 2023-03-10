import { signIn, signOut, useSession } from 'next-auth/react'

export function SignInButton() {
  const { data: session, status } = useSession()

  console.log(status)

  if (session) {
    return (
      <>
        Signed in as {session?.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }

  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}
