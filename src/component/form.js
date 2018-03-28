import React, { Component } from 'react';
class Reservation  extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event){
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
        this.setState({
            [name]:value
        })
    }
    render(){
        return(
            <form>
                <label>
                    <input type="checkbox"
                           name="isGoing"
                           checked={this.state.isGoing}
                           onChange={this.handleInputChange}/>
                </label>
                <br/>
                <label>
                    <input type="number"
                           name="numberOfGuests"
                           value={this.state.numberOfGuests}
                           onChange={this.handleInputChange}/>
                </label>
            </form>
        )

    }
}
export default Reservation