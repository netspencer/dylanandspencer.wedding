import React from 'react'
import useDebounce from 'react-use/lib/useDebounce'
import useLocalStorage from 'react-use/lib/useLocalStorage'

const { createContext, useReducer } = React

export interface State {
  example: string
}

export interface Action {
  type: 'EXAMPLE'
  payload?: any
}

const initialState: State = {
  example: 'hello world'
}

export const Store: React.Context<{
  state: State
  dispatch: React.Dispatch<Action>
  // @ts-ignore
}> = createContext()

const reducer = (state: State, action: Action): State => {
  const { payload, type } = action
  switch (type) {
    case 'EXAMPLE':
      return { ...state, example: payload || 'goodnight moon' }
  }
}

export const StoreProvider = ({ children }: React.Props<any>) => {
  const [localState, setLocalState] = useLocalStorage('state', initialState)
  const [state, dispatch] = useReducer(reducer, localState)
  const value = { state, dispatch }
  useDebounce(
    () => {
      setLocalState(state)
    },
    200,
    [state, setLocalState]
  )
  // @ts-ignore
  return <Store.Provider value={value}>{children}</Store.Provider>
}
