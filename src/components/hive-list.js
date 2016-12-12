import React from 'react';
import { Link } from 'react-router';

const HiveList = React.createClass({
  render: function() {
    return (
      <ul className="user-list">
        <li><Link to="hives/2">hive 1</Link></li>
        <li><Link to="hives/1">hive 2</Link></li>
        <li><Link to="hives/3">hive 3</Link></li>
        <li><Link to="hives/4">hive 4</Link></li>
        <li><Link to="hives/5">hive 5</Link></li>
        <li><Link to="hives/6">hive 6</Link></li>
      </ul>
    );
  }
});

export default HiveList;
