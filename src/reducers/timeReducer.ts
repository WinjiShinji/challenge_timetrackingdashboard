type ReducerAction = {
  type: string
  payload?: string | undefined
}

export const initState = {
  daily: true,
  weekly: false,
  monthly: false,
}

export const timeReducer = (state: typeof initState, action: ReducerAction) => {
  switch (action.type) {
    case "daily":
      return {
        ...state,
        daily: true,
        weekly: false,
        monthly: false,
      }
    case "weekly":
      return {
        ...state,
        daily: false,
        weekly: true,
        monthly: false,
      }
    case "monthly":
      return {
        ...state,
        daily: false,
        weekly: false,
        monthly: true,
      }

    default:
      return state
  }
}
