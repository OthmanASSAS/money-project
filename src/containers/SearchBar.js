import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchCountries} from '../actions'


class SearchBar extends Component {

    componentWillMount(){
        this.props.fetchCountries()
    }


renderSelectCountries(){
    return (
        <select>
            <option>

            </option>
        </select>
    )
}

    render() {
        console.log(this.props.countries)
        return (
            <form>
                {this.renderSelectCountries()}
            </form>
        );
    }
}

const mapStateToProps = state => ({
    countries: state.countries
})

export default connect(mapStateToProps, {fetchCountries})(SearchBar);