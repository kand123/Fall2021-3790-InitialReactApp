import * as React from 'react'
import axios from 'axios'

const CongressContext = React.createContext({
  senators: [],
  reps: [],
})

export const CongressContextProvider = (props) => {
  const [senators, setSenators] = React.useState([])
  const [reps, setReps] = React.useState([])

  React.useEffect(() => {
    // first define the async function
    const fetchMembers = async () => {
      const senateURL = `/.netlify/functions/congress?chamber=senate`
      const houseURL = `/.netlify/functions/congress?chamber=house`
      try {
        const senatorsResponse = await axios.get(senateURL)
        const senators = await senatorsResponse.data.results[0].members
        const repsResponse = await axios.get(houseURL)
        const reps = await repsResponse.data.results[0].members
        
        setSenators(senators)
        setReps(reps)
      } catch (error) {
        console.log(error)
      } 
    }
    // then call the function
    fetchMembers()
  }, [])

  return (
    <CongressContext.Provider value={{
      senators,
      reps,
    }}>
      {props.children}
    </CongressContext.Provider>
  )
}

export const useCongressContext = () => React.useContext(CongressContext)