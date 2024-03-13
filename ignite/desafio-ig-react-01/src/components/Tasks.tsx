import { TaskList } from './TaskList'
import styles from './Tasks.module.css'

export function Tasks() {
  return (
    <div className={styles.tasks}>
      <div className={styles.info}>
        <div className={styles.created}>
          <strong>Tarefas criadas</strong>
          <span>5</span>
        </div>
        <div className={styles.done}>
          <strong>Concluídas</strong>
          <span>2 de 5</span>
        </div>
      </div>

      <TaskList />
    </div>
  )
}
