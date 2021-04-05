import React from 'react';
import {getFunName} from '../helpers';


class StorePicker extends React.Component {

    handleClick() {
        alert("Heyyyy!");
    }

    goToStore(event) {
        event.preventDefault();
        console.log("going to store");
    }

    render() {
        // return <p>Hello!</p>
        return (
            <form 
                className="store-selector"
                onSubmit={ this.goToStore }
            >
                <h2>Please Enter a Store</h2>
                <input 
                    type="text" 
                    required 
                    placeholder="Store Name"  
                    defaultValue={getFunName()}
                />
                <button type="submit">Visit Store -&gt;</button>
            </form>
        );

    }
}

export default StorePicker;
