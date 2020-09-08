import React from 'react';


class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: "",
            number:""    
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange (event) {
        this.setState({
            [event.target.id]: event.target.value
        })
        
    }
    render() {
        return (
            <div class="col-12 text-left">        
                <p className="text-muted d-inline pr-3 pl-0">Add Contact:</p>
                <input id="content" className="d-inline mr-2" placeholder="name" name="title" type="text" value={this.state.content} onChange={this.handleChange}  />
                <input id="number" className="d-inline mr-2" placeholder="phone number" value={this.state.number} onChange={this.handleChange} />
                <i className="fas fa-plus fa-lg hovering-effect" onClick={() => this.props.createItem(this.state.content, this.state.number)}></i>
            </div>
        )
    } 
}

export default Footer