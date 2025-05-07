import React, {useRef, useState} from 'react' ;
import Todoitem from './Todoitem' ;
import add from '../assests/add.svg' ;

const Todolist = () => {
    const [show,setShow] = useState(false)
    const [newTodo, setNewTodo] = useState("") ;
    const newId = useRef(1) ;

    return (
        <>
            {
                show ? (
                    <Todoitem newTodo={newTodo} setShow={setShow}/>
                ) : (
                    <div className='input'>
                        <h1 className='title'>TO-DO-LIST</h1>
                        <div className='write_wrap'>
                            <input value={newTodo} onChange={(e)=>{setNewTodo(e.target.value)}} type='text' placeholder='오늘 할 일을 입력해주세요!' className='newTodo'/>
                            <div className='button_add'>
                                <button className='add' onClick={() => {
                                    if (newTodo.trim() !== '') {
                                        setShow(true) ;
                                    } else {
                                        alert('할 일을 입력해주세요!') ;
                                    }
                                }}
                                >
                                    <img src={add} alt='추가'/></button>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default Todolist ;

