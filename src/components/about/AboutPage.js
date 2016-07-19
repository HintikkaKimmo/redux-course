/**
 * Created by Kimmo on 19.7.2016.
 */
import React from 'react';

// Note that component is class component so that hot reloading works. It needs class parent currently!!!

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>This application uses React, Redux, React Router and variety of other helpful libraries.</p>
      </div>
    );
  }
}

export default AboutPage;
