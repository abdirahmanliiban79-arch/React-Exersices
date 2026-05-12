import {useContext} from 'react'
import LanguageContext from './UseContext ex15'

const LanTranslator = () => {

    const lan = useContext(LanguageContext)

  return (
    <div>
        {
            lan === 'English' ? <h1>Hello!</h1> : <h1>Hola!</h1>
        }
    </div>
  )
}

export default LanTranslator