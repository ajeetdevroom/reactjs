// @flow
import React from 'react';
const List = () => {
    const arrObj = ['Ajeet', 'mohit', 'ramesh', 'rangeeta']
    const listData = arrObj.map((arrElm) => {
        return <li>{arrElm}</li>
    })
    return (
        <div>
            <ol>
                {listData}
            </ol>
        </div>
    );
};
export default List;