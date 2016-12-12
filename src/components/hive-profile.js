import React from 'react';

const HiveProfile = React.createClass({
  render: function() {
    return (<h1>Hive Profile for hiveId: {this.props.params.hiveId}</h1>);
  }
});

export default HiveProfile;
