import React from 'react'

// We simulate that "moment" is called in "A" and "B"
import moment from 'moment'

const E = () => (
  <div className="letter-container">
    <p className="letter">
      E
    </p>
  </div>
)

// We keep a reference to prevent uglify remove
E.moment = moment

export default E
