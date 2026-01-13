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
        <input
          className={styles.input}
          name="name"
          placeholder="Nome completo"
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && <span className={styles.error}>{errors.name}</span>}
      </div>

      <div className={styles.field}>
        <input
          className={styles.input}
          name="cpf"
          placeholder="CPF"
          value={form.cpf}
          onChange={handleChange}
          maxLength={14}
        />
        {errors.cpf && <span className={styles.error}>{errors.cpf}</span>}
      </div>

      <div className={styles.field}>
        <input
          className={styles.input}
          name="phone"
          placeholder="Telefone"
          value={form.phone}
          onChange={handleChange}
          maxLength={15}
        />
        {errors.phone && <span className={styles.error}>{errors.phone}</span>}
      </div>

      <div className={styles.field}>
        <input
          className={styles.input}
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
      </div>

      <button
        className={styles.button}
        type="submit"
        disabled={isButtonDisabled}
      >
        Adicionar
      </button>
    </form>
  )
}
