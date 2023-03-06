import { SignInButton } from '../components/SignInButton'

export default function Home() {
  return (
    <div
      style={{
        maxWidth: 1120,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <SignInButton />
    </div>
  )
}
