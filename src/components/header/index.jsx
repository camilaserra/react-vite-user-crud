import { useNavigate } from 'react-router-dom'
import styles from './Header.module.css'

export default function Header({
  logoText = 'CadastroApp',
  buttonText,
  buttonRoute
}) {
  const navigate = useNavigate()

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span>{logoText}</span>
      </div>

      {buttonText && buttonRoute && (
        <button
          className={styles.button}
          onClick={() => navigate(buttonRoute)}
        >
          {buttonText}
        </button>
      )}
    </header>
  )
}
