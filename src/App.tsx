import { useState } from 'react'
import './App.css'


export default function App() {
  const [page, setPage] = useState<number>(0);
  return (
    <>
      <div className="container">
          <div className="arrow" onClick={() => setPage(page-1)}>
            &lt;
          </div>
          <div className="content">Page {page}</div>
          <div className="arrow" onClick={() => setPage(page+1)}>
            &gt;
          </div>
      </div>
    </>
  )
}