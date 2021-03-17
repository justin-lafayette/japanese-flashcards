import React, { Component } from 'react';

class LangOptions extends Component {

    handleOnChange = e=> {
        this.props.handleChange(e.target.name, e.target.value);
    };
    
    render() {
        return (
            <>
            {/* Need a way to differintiate between selection for flashcards and practce quiz without redoing work. */}
            {/* Need to bind the inputs to onChange handles. */}
            
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