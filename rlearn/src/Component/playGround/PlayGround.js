import React, { Component } from 'react'
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
import Brightness1OutlinedIcon from '@material-ui/icons/Brightness1Outlined';

export default class PlayGround extends Component {
    constructor(props) {
        super(props)
        this.state = {
             fields : [null,null,null, null, null,null, null, null, null],
             field : null,
             secondPlayer : false,
        }
    }
    clickhandler = (id)=>{
        let fields = this.state.fields
        fields[id] = "x"
        this.setState({
            fields: [...fields],
            secondPlayer : true,
        })
    }
    writehandler = (type)=>{
        if(type !== null){
            if(type === "x") return <ClearRoundedIcon/>
            if(type === "o") return <Brightness1OutlinedIcon/>
        }
    }
    render() {
        let {fields} = this.state
        return (
            <div id="playGround">
                {fields.map((field, i) => {
                    // let i = 0
                    // i +=1
                    return <div className="field" key={i} onClick={() => this.clickhandler(i)}>{this.writehandler(field)}</div>
                })}
            </div>
        )
    }
}
