import React from "react";
import PropTypes from "prop-types";

class EditFishForm extends React.Component {

    static propTypes = {
        fish: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            desc: PropTypes.string,
            status: PropTypes.string,
            price: PropTypes.number
        }),
        updateFish: PropTypes.func,
        index: PropTypes.string
    }

    handleChange = (event) => {
        console.log(event.currentTarget.value);
        // update that fish
        // 1. take a copy of the current fish
        console.log(event.currentTarget.name);
        const updatedFish = {
             ...this.props.fish,
             [event.currentTarget.name]: event.currentTarget.value
        };
        console.log(updatedFish);
        this.props.updateFish(this.props.index, updatedFish)
    }
    
    render() {
        return (
            <div className="fish-edit">
            <input type="text" name="name" value={this.props.fish.name} onChange={this.handleChange} placeholder="Name" /> 
            <input type="text" name="price" value={this.props.fish.price} onChange={this.handleChange} placeholder="Price" /> 
            <select type="text" name="status" value={this.props.fish.status} onChange={this.handleChange} placeholder="Status">
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold out!</option>
            </select>
            <textarea name="desc" value={this.props.fish.desc} onChange={this.handleChange}></textarea> 
            <input type="text" name="image" value={this.props.fish.image} onChange={this.handleChange} /> 
            <button onClick={() => this.props.deleteFish(this.props.index)}>Delete</button>
            </div>
        );
    }
}


export default EditFishForm;
