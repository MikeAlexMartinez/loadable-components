import React from 'react'

// We simulate that "moment" is called in "A" and "B"
import moment from 'moment'

const D = () => (
  <div className="letter-container">
    <p className="letter">
      D
    </p>
  </div>
)

// We keep a reference to prevent uglify remove
D.moment = moment

export default D
