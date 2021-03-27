import React, { Component } from 'react';

class LangOptions extends Component {

    /* Function will essentially pass the target name and value to the parent through props.handleChange. */
    handleOnChange = e=> {
        // console.log(e.target.name, e.target.value);
        e.target.classList.add("btn-primary")

        // this.props.selected.map( (value, index)=> {
        //     if( e === )
        // })
        this.props.handleChange(e.target.name, e.target.value);
    };
    
    render() {
        console.log(this.props)
        // let btnClass = this.props.selected[index].bool ? "btn btn-success" : "btn btn-secondary"
        return (
            <>
            {/* TODO: Create a button that will reset the selection after the selections have been finalized to allow resetting the game without having to complete. Envision one button with "Reset Selection at the top of the page after finalizing selections." */}
            {/* TODO: Recreate buttons as they are not currently functioning as intended when selected. The button highlighting is not easily removed from the bootstrap element. */}
            
            {/* Button group to show the different language options to choose from. Selections will be passed back to the parent and cards rendered based off the selection. */}
            <div className="container">
                {/* <div className="row row-cols-2">
                    <div className="col">
                        <button name={this.props.hir} type="button" className="btn" id="hiragana-checkbox" onClick={this.handleOnChange}>Hiragana</button>
                    </div>
                    <div className="col">
                        <button name={this.props.hirDak} type="button" className="btn btn-primary" id="hiragana-dak-checkbox" onClick={this.handleOnChange}>Hiragana Dakuten</button>
                    </div>
                    <div className="col">
                        <button name={this.props.hirCombo} type="button" className="btn btn-primary" id="hiragana-combo-checkbox" onClick={this.handleOnChange}>Combination Hiragana</button>
                    </div>
                    <div className="col">
                        <button name={this.props.kat} type="button" className="btn btn-primary" id="katakana-checkbox" onClick={this.handleOnChange}>Katakana</button>
                    </div>
                    <div className="col">
                        <button name={this.props.katDak} type="button" className="btn btn-primary" id="katakana-dak-checkbox" onClick={this.handleOnChange}>Katakana Dakuten</button>
                    </div>
                    <div className="col">
                        <button name={this.props.katCombo} type="button" className="btn btn-primary" id="katakana-combo-checkbox" onClick={this.handleOnChange}>Combination Katakana</button>
                    </div>
                </div> */}

                <div className="row row-cols-2">
                    {this.props.selected.map( (value, index)=> 
                        <div className="col" key={index}>
                            <button name={value.name} type="button" className={value.bool ? "btn btn-success" : "btn btn-secondary"} id="hiragana-checkbox" onClick={this.handleOnChange}>{value.fullName}</button>
                        </div>
                    )}
                </div>
            </div>
            </>
        );
    };
};

export default LangOptions;