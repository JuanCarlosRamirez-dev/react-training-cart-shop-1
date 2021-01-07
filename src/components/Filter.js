import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <div>
                    <h3>Filters:</h3>
                    <input
                        id="checkbox1"
                        type="checkbox"
                        name="filter"
                        value="Basics"></input>
                    <label htmlFor="checkbox1">Basics</label>

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
                    <select id="sortby">
                        <option value="Relevant">Relevant</option>
                        <option value="Higher price">Higher price</option>
                        <option value="Lower price">Lower price</option>
                    </select>
                </div>
            </div>
        )
    }
}
