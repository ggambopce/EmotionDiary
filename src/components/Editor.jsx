import "./Editor.css";
import { useState, useRef, useContext } from "react";
import { TodoDispatchContext } from "../App";

const Editor = () => {
    const {onCreate}= useContext(TodoDispatchContext);
    const [content, setContent] = useState("");
    const contentRef = useRef();
    
    const onChangeContent = (e) => {
        setContent(e.target.value);
    }

    const onKeydown = (e) => {
        if(e.keyCode === 13) {
            onSubmit();
        }
    }
    const onSubmit = () => {
        if (content === "") {
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    }; 
    
    return (
    <div className="Editor">
        <input
            ref={contentRef}
            value={content}
            onKeyDown={onKeydown}
            onChange={onChangeContent} 
            placeholder="새로운 Todo..." 
        />
        <button onClick={onSubmit}>추가</button>
    </div>
    )

}


export default Editor;