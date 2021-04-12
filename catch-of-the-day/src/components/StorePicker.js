import React from 'react';
import {getFunName} from '../helpers';


class StorePicker extends React.Component {

    // constructor() {
    //     super();
    //     // this.goToStore = this.goToStore.bind(this);
    // }

    handleClick() {
        alert("Heyyyy!");
    }

    myInput = React.createRef();

    goToStore = (event) => {
        event.preventDefault();
        console.log("goToStore");
        const storeName = this.myInput.current.value;
        console.log(storeName);
        // console.log(this.myInput);
        this.props.history.push(`/store/${storeName}`);

    }

    render() {
        return (
            <form 
                className="store-selector"
                onSubmit={ this.goToStore }
            >
                <h2>Please Enter a Store</h2>
                <input 
                    type="text" 
                    ref={this.myInput}
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
