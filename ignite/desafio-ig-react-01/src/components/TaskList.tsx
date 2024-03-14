import { Task } from './Task'
import styles from './TaskList.module.css'

export function TaskList() {
  return (
    <div className={styles.taskList}>
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
    </div>
  )
}
