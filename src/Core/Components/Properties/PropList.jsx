import React from 'react';
import DivModal from '../Modals/DivModal';
import TableModal from '../Modals/TableModal';
import { connect } from 'react-redux';
import { createStyles } from '@material-ui/core';

const items = [
    {type:'image', Dwidth:'200', Dheight:'300' },
    {type:'text', Dwidth:'400px', Dheight:'300' },
    {type:'heading', Dwidth:'400px', Dheight:'300' },
    {type:'table', Dwidth:'400px', Dheight:'300', Ddata:[{label:'TH1'},{label:'TH2'},{label:'TH3'}] },
    {type:'footer', Dwidth:'400px', Dheight:'300' },
];

const style = createStyles({
    tab: {
        backgroundColor:'#429bf5', 
        zIndex:'1000', 
        overflow:'hidden'
    },
})

class PropList extends React.Component{
    state = {
        modal: false,
        modal1: false,
    }
    render(){
        return (
            <React.Fragment>
                <DivModal close={() => this.setState({modal: false})} open={this.state.modal} />
                <TableModal close={() => this.setState({modal1: false})} open={this.state.modal1} />
                {
                    items.map((item) => (
                                item.type === 'image' ? 
                                <div 
                                key={item.type} 
                                onDoubleClick={() => this.setState({modal: true})} 
                                id="image" 
                                style={style.tab}
                                >
                                    <img 
                                    alt="Some Random" 
                                    width={item.Dwidth} 
                                    height={item.Dheight} 
                                    src={this.props.img} 
                                    />
                                    </div> : 
                                
                                item.type === 'text' ? 
                                <div 
                                key={item.type} 
                                onDoubleClick={() => this.setState({modal: true})} 
                                id="text" 
                                style={style.tab}
                                >
                                    <p>{this.props.txt}</p>
                                    </div> :
                                
                                item.type === 'heading' ? 
                                <div 
                                key={item.type} 
                                onDoubleClick={() => this.setState({modal: true})} 
                                id="heading" 
                                style={style.tab}
                                >
                                    <h3>{this.props.head}</h3>
                                    </div> :
                                
                                item.type === 'footer' ? 
                                <div 
                                key={item.type} 
                                onDoubleClick={() => this.setState({modal: true})} 
                                id="footer" 
                                style={style.tab}
                                >
                                    <h4>{this.props.foot}</h4>
                                    </div> : 
                                
                                item.type === 'table' ? 
                                <table 
                                key={item.type} 
                                onClick={() => this.setState({modal1: true})} 
                                border='1' 
                                style={style.tab} 
                                id="table"
                                >
                                    <thead>
                                        <tr>
                                        {
                                            item.Ddata.map(label => 
                                                <td key={label.label}>{label.label}</td>
                                            )
                                        }
                                        </tr>
                                    </thead>
                                </table>
                                :null
                    ))
                }
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        img : state.image,
        txt : state.text,
        head: state.heading,
        foot: state.footer
    }
}

export default connect(mapStateToProps)(PropList);