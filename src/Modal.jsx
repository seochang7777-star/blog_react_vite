import React from 'react'

const Modal = ({title, color,titlenum,setModal,setTitle}) => {
  // console.log(title[0])
  return (
    <div className='modal' style={{backgroundColor :color}}>
    <h4>제목 : {title[titlenum]}</h4>
    <p>날짜</p>
    <p>상세 내용</p>

    <input type="text" onChange={(e)=>{
      setInput(e.target.value)
    }} value={input} /> 
    <button onClick={()=>{
      let copy = [...title]
      copy[titlenum] = input
      setTitle(copy)
      setIinput('')
      }}>제목 수정</button><br />

    <button onClick={()=>{setModal(false)}}>닫기</button>
    </div>
  )
}

export default Modal