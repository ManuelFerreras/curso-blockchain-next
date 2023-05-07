import Button from '@/components/BaseComponents/Button/Button'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Button variant='secondary'>Hola Mundo</Button>
    </main>
  )
}
