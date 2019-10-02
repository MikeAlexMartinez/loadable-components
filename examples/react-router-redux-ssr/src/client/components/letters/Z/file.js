import React from 'react'

// We simulate that "moment" is called in "A" and "B"
import moment from 'moment'

const Z = () => (
  <div className="letter-container">
    <p className="letter">
      Z
    </p>
  </div>
)

// We keep a reference to prevent uglify remove
Z.moment = moment

export default Z
