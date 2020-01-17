import React, { Component } from "react";
import '../../css/main.css'
import Square from './Square'

class Dashboard extends Component {
    state = {
        binary: [],
    }

    changeBinary = (e, binaryValue) => {
        let binary = this.state.binary;
        let squareIndex = Number(e.target.id);
        binary[squareIndex] = binaryValue ? 1 : 0;
        this.setState({
            binary: binary
        })
        // console.log(binary[index].props.binaryValue)
    }

    componentDidMount() {
        console.log('Hello');
        let binary = []
        for (let i = 0; i < 100; i++) {
            binary.push(0);
        }
        this.setState({
            binary: binary
        })
    }

    render() {
        let squares = [];
        for(let i = 0; i < 100; i++) {
            squares.push(<Square 
                key={i}
                index={i}
                onChange={this.changeBinary}
            />);
        }
        return (
            <div className="main_page">
                <div className="squares">
                    {squares}
                </div>

                <div className="binary">
                    {this.state.binary.map((val, index) => {
                        return (
                            <p key={index} style={{
                                // 'backgroundColor' : val === 0 ? '#fff' : '#222',
                                // 'color': val === 0 ? '#222' : '#fff'
                            }}>{val}</p>
                        )
                    })}
                </div>
            </div>
        )
    }
}



export default (Dashboard);