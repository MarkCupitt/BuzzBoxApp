
import React from 'react'
import {connect} from 'react-redux'
import {incHiveData} from '../actions/'
import HiveData from '../components/hive_data'

let mapStateToProps = (state) => {
  return {data: state.hive_data};
};

let mapDispatchToProps = (dispatch) => {
  return {
    incHiveData: () => {
      dispatch(incHiveData())
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HiveData);
