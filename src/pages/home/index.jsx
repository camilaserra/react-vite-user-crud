import UserForm from "../../components/forms/index.jsx";
import Header from "../../components/header/index.jsx";
import styles from './home.module.css';

export default function FormPage() {
  return (
    <div className={styles.formPageWrapper}>
      <Header
        buttonText="Consultar lista de  usuários"
        buttonRoute="/list"
      />

      <div className={styles.boxTitle}>
        <h1>Cadastro de usuário</h1>
        <p>Preencha os campos abaixo para se cadastrar na lista de espera.</p>
      </div>

      <UserForm />
    </div>
  );
}