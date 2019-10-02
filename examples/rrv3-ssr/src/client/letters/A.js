// We simulate that "moment" is called in "A" and "B"
import moment from 'moment'

const A = () => 'A'

// We keep a reference to prevent uglify remove
A.moment = moment

export default A
