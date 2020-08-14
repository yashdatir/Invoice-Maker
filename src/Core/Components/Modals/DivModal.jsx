import React from 'react';
import { Modal, TextField } from '@material-ui/core';
import { addImg, addTxt, addHead, addFoot } from '../../Redux/Action';
import { connect } from 'react-redux';

function DivModal(props){
    return (
        <>
        <Modal open={props.open} onClose={props.close}>
            <div style={{backgroundColor:'#fff', borderRadius:'15px', width:'40%', height:'400px', zIndex:'10000', marginLeft:'25%'}}>
                <div style={{marginTop:'5%', marginLeft:'20%'}}>
                <TextField label="Image Source" variant="outlined" onChange={(e) => props.addImg(e.target.value)} /> OR <br />
                <br /><input type="file" onChange={(e) => props.addImg(e.target.value)} /><br />
                <TextField label="Text Data" variant="outlined" onChange={(e) => props.addTxt(e.target.value)} /><br />
                <TextField label="Heading Data" variant="outlined" onChange={(e) => props.addHead(e.target.value)} /><br />
                <TextField label="Footer Data" variant="outlined" onChange={(e) => props.addFoot(e.target.value)} />
                </div>
            </div>
        </Modal>
        </>
    )
}

function mapDispatchToProps(dispatch){
    return ({
        addImg: value => dispatch(addImg(value)),
        addTxt: value => dispatch(addTxt(value)),
        addHead: value => dispatch(addHead(value)),
        addFoot: value => dispatch(addFoot(value)),
    });
}

export default connect(null, mapDispatchToProps)(DivModal);