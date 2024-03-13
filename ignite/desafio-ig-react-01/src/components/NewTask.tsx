import './NewTask.module.css'

import { CirclePlus } from 'lucide-react'

export function NewTask() {
  return (
    <form action="">
      <textarea
        name="new-task"
        id="new-task"
        placeholder="Adicione uma nova tarefa"
      />
      <button type="submit">
        Criar
        <CirclePlus size={16} />
      </button>
    </form>
  )
}
