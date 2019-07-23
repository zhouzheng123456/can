import ids from '../mcs/ids/admin-route'
import law from '../mcs/law/admin-route'
import dad from '../mcs/dad/admin-route'
import dmd from '../mcs/dmd/admin-route'

const mcs = new Set([...ids,...law,...dad,...dmd]);

export default mcs;