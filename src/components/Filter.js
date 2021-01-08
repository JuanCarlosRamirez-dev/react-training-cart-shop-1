
import React, { Component } from 'react'

export default class Filters extends Component {

    render() {
        return (
            <div className="filter">
                <div>
                    <h3>Filters:</h3>



                    {/*    <input
                        onChange={this.props.filterProducts}
                        id="checkbox1"
                        type="checkbox"
                        name="filter"
                        value={this.props.basics}
                    />
                    <label htmlFor="checkbox1">Basics</label> */}

                    <select value={this.props.basics} onChange={this.props.filterProducts} >
                        <option value="NO BASICS">NO BASICS</option>
                        <option value="BASICS">BASICS</option>
                    </select>

                    <h3>Prices:</h3>
                    <input

                        id="radio1"
                        type="radio"
                        name="filter"
                        value="Radio1"></input>
                    <label htmlFor="radio1">$1 - $50</label> <br />
                    <input

                        id="radio2"
                        type="radio"
                        name="filter"
                        value="Radio2"></input>
                    <label htmlFor="radio2">$51 - $100</label> <br />
                    <input

                        id="radio3"
                        type="radio"
                        name="filter"
                        value="Radio3"></input>
                    <label htmlFor="radio3">$101 - $200</label>

                    <h3>Sort by:</h3>
                    <select value={this.props.sort} onChange={this.props.sortProducts} >
                        <option value="Relevant">Relevant</option>
                        <option value="Higher price">Higher price</option>
                        <option value="Lower price">Lower price</option>
                    </select>
                </div>
            </div>
        );
    }
}
