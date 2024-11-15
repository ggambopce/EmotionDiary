import './App.css'
import { useReducer, useRef } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Edit from './pages/Edit';
import Notfound from "./pages/Notfound"; 

const mockData = [
  {
    id: 1,
    createDate: new Date().getTime(),
    emotionId: 1,
    content: "1번일기 내용",
  },
  {
    id: 2,
    createDate: new Date().getTime(),
    emotionId: 2,
    content: "2번일기 내용",
  },
]
 
function reducer(state, action) {
  switch(action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) => 
        String(item.id) === String(action.data.id) ? action.data : item);
    case "DELETE":
      return state.filter((item) => String(item.id) !== String(action.id));
  }
}

function App() { 
    const [data, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3);

    // 새로운 일기 추가
    const onCreate = (createDate, emotionId, content) => {
      dispatch({
        type: "CREATE",
        data: {
          id: idRef.current++,
          createDate,
          emotionId,
          content,
        }
      });
    }
    // 기존 일기 수정
    const onUpdate = (id, createDate, emotionId, content) => {
      dispatch({
        type: "UPDATE",
        data: {
          id,
          createDate,
          emotionId,
          content,
        }
      });
    }
    // 기존 일기 삭제
    const onDelete = (id) => {
      dispatch({
        type: "DELETE",
        id,
      })
    }

  return (
  <>
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/new" element={<New />} />
      <Route path="/diary/:id" element={<Diary />} />  
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="*" element={<Notfound />} /> 
    </Routes>
  </>
  
  );
   
}

export default App
