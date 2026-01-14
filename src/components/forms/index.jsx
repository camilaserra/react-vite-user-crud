import styles from './UserForm.module.css'
import { useUserForm } from '../../hooks/useUserForm'

export default function UserForm() {
  const {
    form,
    errors,
    handleChange,
    handleSubmit,
    isButtonDisabled
  } = useUserForm()

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor="name" className={styles.label}>
          Nome completo (sem abreviações)
        </label>

        <input
          id="name"
          name="name"
          className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
          value={form.name}
          placeholder='nome completo'
          onChange={handleChange}
        />

        {errors.name && (
          <span className={styles.error}>{errors.name}</span>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="email" className={styles.label}>
          E-mail
        </label>

        <input
          id="email"
          name="email"
          placeholder='ex: tinnova@gmail.com'
          className={styles.input}
          value={form.email}
          onChange={handleChange}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="cpf" className={styles.label}>
          CPF
        </label>

        <input
          id="cpf"
          name="cpf"
          placeholder='ex: 000.000.000-00'
          className={`${styles.input} ${errors.cpf ? styles.inputError : ''}`}
          value={form.cpf}
          onChange={handleChange}
          maxLength={14}
        />

        {errors.cpf && (
          <span className={styles.error}>{errors.cpf}</span>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="phone" className={styles.label}>
          Telefone
        </label>

        <input
          id="phone"
          name="phone"
          placeholder='ex: (00) 00000-0000'
          className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
          value={form.phone}
          onChange={handleChange}
          maxLength={15}
        />

        {errors.phone && (
          <span className={styles.error}>{errors.phone}</span>
        )}
      </div>

      <button
        type="submit"
        className={styles.button}
        disabled={isButtonDisabled}
      >
        Cadastrar
      </button>
    </form>
  )
}
