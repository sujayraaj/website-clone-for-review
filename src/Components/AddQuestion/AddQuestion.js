import React from 'react';
import {connect} from 'react-redux';
import pathOr from 'lodash/fp/pathOr';
import {getLabels} from '../../utils';

class AddQuestion extends React.Component {
    render(){
        const Labels = getLabels(this.props.labels || {});
        return <div className={`container`} role="group" aria-labelledby="pageHeading">
        <h1 id="pageHeading">{Labels('pageTitle')}</h1>
        <div role="group" aria-labelledby="questionTypeLabel">
        <h2 id="questionTypeLabel">{Labels('type')}</h2>
            {Labels('typeOptions').map((val,idx) => <div>
                <label htmlFor={`questionType${idx}`}>{Labels(`typeOptions.${idx}`)}</label>
                <input type="radio" name="questionType" id={`questionType${idx}`}/>
            </div>)}
        </div>

        </div>;
    }
}

const mapStateToProps = (state)=> ({
    labels: pathOr({},'AddQuestion',state.labels),
})
export default connect(mapStateToProps)(AddQuestion);