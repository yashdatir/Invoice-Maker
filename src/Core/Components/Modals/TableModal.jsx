import React, { useState } from 'react';
import { Modal, TextField } from '@material-ui/core';

const example = [{label:'Hello'}, {label:'World'}, {label:'Yash'}];

function createCols(data){
    let col = [];
        col.push(data.map( item => item.label ));
    return col
}

function createTable(index, data){
    let cell=[];
    for( let i=0 ; i<index ; i++ ) {
        cell.push(createCols(data));
    }
    return cell;
}
function TableModal(props){
    const [row, setRow] = useState(0);
    const [col, setCol] = useState(0);
    const [data, setData] = useState([row]);

    console.log(createTable(3, example));

    return (
        <Modal open={props.open} onClose={props.close}>
            <div style={{backgroundColor:'#fff', width:'40%', height:'450px'}}>
            <TextField label="Enter no. of rows" variant="outlined" value={row} onChange={(e) => setRow(e.target.value)} />
            <TextField label="Enter no. of cols" variant="outlined" value={col} onChange={(e) => setCol(e.target.value)} />
            <table>
                
            </table>
            </div>
        </Modal>
    )
}

export default TableModal;