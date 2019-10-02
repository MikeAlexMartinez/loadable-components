import React from 'react'

// We simulate that "moment" is called in "A" and "B"
import moment from 'moment'

const B = () => (
  <div className="letter-container">
    <p className="letter">
      B
    </p>
  </div>
)

// We keep a reference to prevent uglify remove
B.moment = moment

export default B
