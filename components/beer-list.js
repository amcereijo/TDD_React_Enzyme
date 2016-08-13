import React, {Component} from 'react';

export class BeerList extends Component {
  render() {
    return this.props.items ?
    (<ul>
        {this.props.items.map((item, index) => 
          <li key={index}>{item}</li>
        )}
      </ul>)
    : null;
  }
}
BeerList.propTypes = {
  items: React.PropTypes.array.isRequired,
};