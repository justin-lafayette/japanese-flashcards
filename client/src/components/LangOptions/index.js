import React, { Component } from 'react';

let log= (t, s)=>console.log(t, s);

class LangOptions extends Component {

    /* Function will essentially pass the target name and value to the parent through props.handleChange. */
    handleButtonReset = e=> {
        this.props.handleReset(e.target.name, e.target.value);
    };

    handleButtonClick = e=> {
        e.target.classList.add("btn-primary");
        this.props.handleSelection(e.target.name, e.target.value);
    };

    handleButtonSubmit = e=> {
        this.props.handleSubmit(e.target.name, e.target.value);
    };
    
    render() {
        // log("LangOptions Props:", this.props)
        // log("LangOptions rendered");
        // let btnClass = this.props.selected[index].bool ? "btn btn-success" : "btn btn-secondary"
        return (
            <>
            {/* TODO: Create a button that will reset the selection after the selections have been finalized to allow resetting the game without having to complete. Envision one button with "Reset Selection at the top of the page after finalizing selections." */}
            
            {/* Button group to show the different language options to choose from. Selections will be passed back to the parent and cards rendered based off the selection. */}
            {this.props.start ? (
                <button onClick={this.handleButtonReset}>Reset</button>
            ) : (
                <div className="container">
                    <div className="row row-cols-2">
                        {this.props.toSelect.map( (value, index)=> 
                            <div className="col" key={index}>
                                <button value={index} name={value.name} type="button" className={value.bool ? "btn btn-success" : "btn btn-secondary"} id="hiragana-checkbox" onClick={this.handleButtonClick}>{value.fullName}</button>
                            </div>
                        )}
                        <button name={this.props.name} className="btn btn-light btn-outline-dark" onClick={this.handleButtonSubmit}>Submit</button>
                    </div>
                </div>
            )}
            </>
        );
    };
};

export default LangOptions;