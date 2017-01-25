
import React from 'react'
import {connect} from 'react-redux'
import {incAddHive} from '../actions/'
import AddHive from '../components/addhive'

let mapStateToProps = (state) => {
  return {data: state.addhive};
};

let mapDispatchToProps = (dispatch) => {
  return {
    incAddHive: () => {
      dispatch(incAddHive())
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddHive);
