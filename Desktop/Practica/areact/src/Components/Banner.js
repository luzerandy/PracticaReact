import React, {Component} from 'react';
import './Banner.css'
import PropTypes from 'prop-types';
class Banner extends Component {
    render(){
        return(
            <div className="Banner">
                {this.props.texto}
            </div>
        );
    }
}

export default Banner;
Banner.propTypes={ texto:PropTypes.string.isRequired}