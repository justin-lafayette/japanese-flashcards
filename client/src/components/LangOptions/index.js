import React, { Component } from 'react';

class LangOptions extends Component {

    handleOnChange = e=> {
        this.props.handleChange(e.target.name, e.target.value);
    };
    
    render() {
        return (
            <>
            {/* TODO: Issue with only one checkbox showing filled out. Also, floating checkboxes next to the buttons on screen. */}
            <input type="checkbox" className="btn-check" id="hiragana-checkbox" autoComplete="off"></input>
            <label className="btn btn-outline-primary" htmlFor="hiragana-checkbox">Hiragana</label><br/>

            <input type="checkbox" className="btn-check" id="hiragana-dak-checkbox" autoComplete="off"></input>
            <label className="btn btn-outline-primary" htmlFor="hiragana-dak-checkbox">Hiragana Dakuten</label>

            <input type="checkbox" className="btn-check" id="hiragana-combo-checkbox" autoComplete="off"></input>
            <label className="btn btn-outline-primary" htmlFor="hiragana-combo-checkbox">Combination Hiragana</label>

            <input type="checkbox" className="btn-check" id="katakana-checkbox" autoComplete="off"></input>
            <label className="btn btn-outline-primary" htmlFor="katakana-checkbox">Katakana</label>

            <input type="checkbox" className="btn-check" id="katakana-dak-checkbox" autoComplete="off"></input>
            <label className="btn btn-outline-primary" htmlFor="katakana-dak-checkbox">Katakana Dakuten</label>

            <input type="checkbox" className="btn-check" id="katakana-combo-checkbox" autoComplete="off"></input>
            <label className="btn btn-outline-primary" htmlFor="katakana-combo-checkbox">Combination Katakana</label>
            </>
        );
    };
};

export default LangOptions;