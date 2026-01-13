import UserForm from "../../components/forms/Userform.jsx";

import styles from './Form.module.css';

export default function FormPage() {
  return (
    <div className={styles.formPageWrapper}>
      <h1>Cadastro de usuários</h1>
      <p>Preencha os campos abaixo para cadastrar um novo usuário.</p>

      <UserForm />
    </div>
  );
}