import React, { Component } from "react";

class Square extends Component {
    state = {
        true: false
    }

    toggleBinary = (e) => {
        this.setState({
            true: !this.state.true
        })
        this.props.onChange(e, !this.state.true);
    }

    render() {
        return (
            <div className="square" id={this.props.index} style={{
                'backgroundColor': this.state.true ? 'black' : 'white',
                // 'width' : '50px',
                // 'height' : '50px'
            }} onClick={this.toggleBinary}>

            </div>
        )
    }
}



export default (Square);