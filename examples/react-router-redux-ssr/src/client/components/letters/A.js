import React from 'react';

// We simulate that "moment" is called in "A" and "B"
import moment from 'moment'

const A = () => (
  <div className="letter-container">
    <p className="letter">
      A
    </p>
  </div>
)

// We keep a reference to prevent uglify remove
A.moment = moment

export default A
