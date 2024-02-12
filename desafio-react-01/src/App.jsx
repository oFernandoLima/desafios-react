import { useState } from 'react'
import './App.css'

export function App() {
  const [points, setPoints] = useState([])
  const [undonePoints, setUndonePoints] = useState([])
  const havePoints = points.length > 0
  const haveUndonePoints = undonePoints.length > 0

  const handleClickOnMain = (event) => {
    const newPoint = {
      x: event.clientX,
      y: event.clientY,
    }

    setPoints((state) => [...state, newPoint])
    setUndonePoints([])
  }

  const handleUndo = (event) => {
    event.stopPropagation()

    const undonePoint = points[points.length - 1]
    setPoints(points.slice(0, -1))
    setUndonePoints((state) => [...state, undonePoint])
  }

  const handleRedo = (event) => {
    event.stopPropagation()

    const redonePoint = undonePoints[undonePoints.length - 1]
    setUndonePoints(undonePoints.slice(0, -1))
    setPoints((state) => [...state, redonePoint])
  }

  const handleReset = (event) => {
    event.stopPropagation()

    setPoints([])
    setUndonePoints([])
  }

  return (
    <main onClick={handleClickOnMain}>
      <button onClick={handleUndo} disabled={!havePoints}>
        Undo
      </button>
      <button onClick={handleRedo} disabled={!haveUndonePoints}>
        Redo
      </button>
      <button onClick={handleReset} disabled={!havePoints}>
        Reset
      </button>
      {points.map((point, index) => {
        return (
          <div
            key={point.x + point.y + index}
            id="point"
            style={{ top: point.y, left: point.x }}
          />
        )
      })}
    </main>
  )
}
