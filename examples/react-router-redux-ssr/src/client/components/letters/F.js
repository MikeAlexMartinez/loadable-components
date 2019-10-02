import React from 'react'

// We simulate that "moment" is called in "A" and "B"
import moment from 'moment'

const F = () => (
  <div className="letter-container">
    <p className="letter">
      F
    </p>
  </div>
)

// We keep a reference to prevent uglify remove
F.moment = moment

export default F
