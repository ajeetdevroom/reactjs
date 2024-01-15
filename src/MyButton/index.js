import React, {useState} from 'react';

const MyButton = (props) => {
    const [countNum, setCountNum] = useState(0);
    const increment = () => {
        setCountNum(countNum + 1)
    }
    return (
        <div>
            <button onClick={increment}>Click increase {countNum}</button>
        </div>
    )
}
export default MyButton;