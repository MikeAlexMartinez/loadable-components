import React from 'react'

// We simulate that "moment" is called in "A" and "B"
import moment from 'moment'

const C = () => (
  <div className="letter-container">
    <p className="letter">
      C
    </p>
  </div>
)

// We keep a reference to prevent uglify remove
C.moment = moment

export default C
