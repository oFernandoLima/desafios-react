import { Trash, Trash2 } from 'lucide-react'

import styles from './Task.module.css'

export function Task() {
  return (
    <div className={styles.task}>
      <button className={styles.doneButton}></button>
      <p className={styles.taskName}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A provident
        natus deserunt quidem nemo, alias placeat molestiae qui neque error.
      </p>
      <button className={styles.deleteButton}>
        <Trash2 size={14} />
      </button>
    </div>
  )
}
