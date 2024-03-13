import './App.module.css'

import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { Tasks } from './components/Tasks'

export function App() {
  return (
    <>
      <Header />

      <main>
        <NewTask />
        <Tasks />
      </main>
    </>
  )
}
