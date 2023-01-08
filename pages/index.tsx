import { useAuth0 } from '@auth0/auth0-react';
import styles from '../styles/Home.module.css'

export default function Home() {
  const {
      isAuthenticated,
      loginWithRedirect,
      logout,
      user
  } = useAuth0();

  return (
    <div className={styles.container}>
      <h1>
          Welcome to Home
      </h1>
      {isAuthenticated ? (
          <div>
              <p>{user?.name}でログイン中</p>
              <button onClick={() => logout()}>ログアウト</button>
          </div>
      ) : (
        <div>
            <button onClick={() => loginWithRedirect()}>ログイン</button>
        </div>
      )}
    </div>
  )
}