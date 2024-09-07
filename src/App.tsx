import { useState } from 'react'
import './App.css'


const texts: string[] = [
  "hello",
  "world"
]

export default function App() {
  const [page, setPage] = useState<number>(0);
  return (
    <>
      <div className="container">
          {page > 0 && (
            <div className="arrow" onClick={() => setPage(page-1)}>
              Back
            </div>
          )}
          { page === 0 && (
            <div className="arrow">
              &nbsp;
            </div>
          )}
          <div className="content">
            Page {page}
            {texts[page]}
          </div>
          <div className="arrow" onClick={() => setPage(page+1)}>
            Next
          </div>
      </div>
    </>
  )
}