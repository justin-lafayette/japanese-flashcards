import React, { Component } from 'react';

class LangOptions extends Component {

    /* Function will essentially pass the target name and value to the parent through props.handleChange. */
    handleOnChange = e=> {
        // console.log(e.target.name, e.target.value);
        this.props.handleChange(e.target.name, e.target.value);
    };
    
    render() {
        return (
            <>
            {/* TODO: Create a button that will reset the selection after the selections have been finalized to allow resetting the game without having to complete. Envision one button with "Reset Selection at the top of the page after finalizing selections." */}
            {/* TODO: Recreate buttons as they are not currently functioning as intended when selected. The button highlighting is not easily removed from the bootstrap element. */}
            
            {/* Button group to show the different language options to choose from. Selections will be passed back to the parent and cards rendered based off the selection. */}
            <div className="container">
                <div className="row row-cols-2">
                    <div className="col">
                        <input name={this.props.hir} type="checkbox" className="btn-check" id="hiragana-checkbox" autoComplete="off" onClick={this.handleOnChange}></input>
                        <label className="btn btn-outline-primary" htmlFor="hiragana-checkbox">Hiragana</label>
                    </div>
                    <div className="col">
                        <input name={this.props.hirDak} type="checkbox" className="btn-check" id="hiragana-dak-checkbox" autoComplete="off" onClick={this.handleOnChange}></input>
                        <label className="btn btn-outline-primary" htmlFor="hiragana-dak-checkbox">Hiragana Dakuten</label>
                    </div>
                    <div className="col">
                        <input name={this.props.hirCombo} type="checkbox" className="btn-check" id="hiragana-combo-checkbox" autoComplete="off" onClick={this.handleOnChange}></input>
                        <label className="btn btn-outline-primary" htmlFor="hiragana-combo-checkbox">Combination Hiragana</label>
                    </div>
                    <div className="col">
                        <input name={this.props.kat} type="checkbox" className="btn-check" id="katakana-checkbox" autoComplete="off" onClick={this.handleOnChange}></input>
                        <label className="btn btn-outline-primary" htmlFor="katakana-checkbox">Katakana</label>
                    </div>
                    <div className="col">
                        <input name={this.props.katDak} type="checkbox" className="btn-check" id="katakana-dak-checkbox" autoComplete="off" onClick={this.handleOnChange}></input>
                        <label className="btn btn-outline-primary" htmlFor="katakana-dak-checkbox">Katakana Dakuten</label>
                    </div>
                    <div className="col">
                        <input name={this.props.katCombo} type="checkbox" className="btn-check" id="katakana-combo-checkbox" autoComplete="off" onClick={this.handleOnChange}></input>
                        <label className="btn btn-outline-primary" htmlFor="katakana-combo-checkbox">Combination Katakana</label>
                    </div>
                </div>
            </div>
            </>
        );
    };
};

export default LangOptions;