import React, {useState} from 'react' ; 
import del from '../assests/del.svg' ;
import checkbox from '../assests/checkbox.svg' ;
import '../assests/style.scss' ;

const Todoitem = ({newTodo, setShow}) => {
    const [checked,setChecked] = useState(false);

    const handleToggle = () => {
        setChecked(!checked) ;
    };

    const handleDelete = () => {
        setShow(false) ;
    };

    return(
        <div className='todo_wrap'>
            <div className='todo_main'>
                <div className='checkbox_img' onClick={handleToggle} data-checked={checked}>
                    {!checked && (<img src={checkbox} alt='체크박스' className='checkbox_img'/>)}
                </div>
                <p>{newTodo}</p>
            </div>
            <button className='del_img' onClick={handleDelete}>
                <img src={del} alt='삭제버튼'/>
            </button>
        </div>
    );
};

export default Todoitem;