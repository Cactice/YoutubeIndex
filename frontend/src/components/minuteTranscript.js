import React from 'react';

export default class MinuteTranscript extends React.Component {
  constructor(props) {
      super(props);
      this.state = {  }
  }
  render() {
      console.log('ponpon',this.props.data)
    return (
      <div>
        <table className="minuteTranscript">
          <thead>
            <tr>
              <th>Position</th>
              <th>Transcript</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((each, i) => {
              return (
                <tr key={i}>
                <td>{each.startSeconds}</td>
                <td>{each.text}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <style jsx global>{`
          .minuteTranscript {
              margin: 20px;
          }
        `}</style>
      </div>
    )
  }
}
