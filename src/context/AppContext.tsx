import { ReactNode, createContext, useReducer } from "react"
import { initState, timeReducer } from "../reducers/timeReducer"

type Props = {
  children: ReactNode
}

const AppContext = createContext({})

export const AppProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(timeReducer, initState)

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContext
