import React from 'react';

export default class MinuteTranscript extends React.Component {
  constructor(props) {
      super(props);
      this.state = {  }
  }
  render() {
      console.log('ponpon',this.props.data)
    return (
      <tbody>
        {this.props.data.map((each, i) => {
          return (
            <tr key={i}>
            <td>{each.start}</td>
            <td>{each.text}</td>
            </tr>
          )
        })}
      </tbody>
    )
  }
}
