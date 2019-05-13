import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className="card indigo lighten-5" key={survey._id}>
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">Sent On: {new Date(survey.dateSent).toLocaleDateString()}</p>
          </div>
          <div className="card-action">
            <a style={{ color: 'green' }}>
              Yes: <span style={{ color: 'black' }}>{survey.yes}</span>
            </a>
            <a style={{ color: 'red' }}>
              No: <span style={{ color: 'black' }}>{survey.no}</span>
            </a>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h5
          style={{
            marginTop: 15,
            color: 'rgb(164, 219, 53)',
            fontFamily: 'Roboto',
            textTransform: 'uppercase',
            fontSize: '1.2rem'
          }}
        >
          Your Surveys
        </h5>
        {this.renderSurveys()}
      </div>
    );
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(
  mapStateToProps,
  { fetchSurveys }
)(SurveyList);
