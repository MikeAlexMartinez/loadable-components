import React from 'react'

// We simulate that "moment" is called in "A" and "B"
import moment from 'moment'

const Y = () => (
  <div className="letter-container">
    <p className="letter">
      Y
    </p>
  </div>
)

// We keep a reference to prevent uglify remove
Y.moment = moment

export default Y
