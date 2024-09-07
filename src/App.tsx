import { useState } from 'react'
import './App.css'


export default function App() {
  const [page, setPage] = useState<number>(0);
  return (
    <>
      <div className="container">
          <div className="arrow">Left Arrow</div>
          <div className="content">Page {page}</div>
          <div className="arrow" onClick={(e) => setPage(page+1)}>
          Right Arrow
          </div>
      </div>
    </>
  )
}