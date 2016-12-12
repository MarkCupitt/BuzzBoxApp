import React from 'react';
import { Link } from 'react-router';

const Home = React.createClass({
  componentDidMount() {
    this.state = {
      uid: null,
      owner: null
    }
  },

  render: function() {
    return (
      <div className="home-page">
        <h1>Login Page</h1>

        <form>
          <label>Username
            <input type='text' />
          </label>
          <label>Password
            <input type='password' />
          </label>

          {/* <input type='submit' value='Submit'/> */}
          <Link to="/hives" activeClassName="active">Submit</Link>
        </form>

      </div>
    );
  }
});

export default Home;
