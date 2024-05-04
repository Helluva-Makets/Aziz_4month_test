import FormPage from './pages/FormPage'
import Users from './modules/modules/Users'
import styles from './App.module.scss'


export default function App() {
  return (
    <div className={styles.bg}>
      <FormPage/>
      <Users/>
    </div>
  )
}