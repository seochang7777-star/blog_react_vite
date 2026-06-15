import { useState } from 'react'
import './App.css'
import Modal from './Modal'

function App() {  
  const [title, setTitle] = useState(['경기도', '강원도', '제주도'])
  const [clickup, setClickup] = useState([0, 0, 0])
  const [modal, setModal] = useState(false)
  const [titlenum, setTitlenum] = useState(0)
  const [input, setInput] = useState('')

  return (
    <div className='App'>
      <div className="black-nav">
        <h4 style={{color: 'red', fontSize: '20px'}}>React Blog</h4>
      </div>
      
      {
        title.map((tit, i) =>
          <div className="list" key={i}>
            <h4 onClick={() => {
              setModal(true)
              setTitlenum(i)
            }}>{tit} <span onClick={(e) => {
              let copy = [...clickup]
              copy[i] = clickup[i] + 1
              setClickup(copy)
              e.stopPropagation()
            }}>👍</span> {clickup[i]}</h4>
            <p>6월 12일 발행</p>

            <button onClick={()=>{
              let copy = [...title]
              copy.splice(i, 1)
              setTitle(copy)

              let copy2 = [...clickup]
              copy2.splice(i, 1)
              setClickup(copy2)
            }}>글 삭제</button>
          </div>
        )
      }    


      <div style={{textAlign: 'center', paddingTop:'20px'}}>
      <input type="text" onChange={(e)=>{
        setInput(e.target.value)
        }} value={input} /> 
          <button onClick={()=>{
          const copy = [...title]
          copy.unshift(input)
          setTitle(copy)
          setInput('')


          const copy2 = [...clickup]
          copy2.unshift(0)
          setClickup(copy2)
        }}>글 추가</button> <br />

        <button onClick={()=>{
          let copy = [...title]
          copy.sort()
          setTitle(copy)
        }}>제목 정렬</button>
      </div>

      {
        modal===true && <Modal title={title} setTitle={setTitle} color={'pink'} titlenum={titlenum} setModal={setModal} />
      }      
      
    </div>
  )
}

export default App

