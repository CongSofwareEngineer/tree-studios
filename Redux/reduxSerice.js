import { useRedux } from './store'

const ReduxService = {
  getState: (key) => {
    const state = useRedux.getState()
    return state[key] || null
  },
  resetUserData: () => {
    useRedux.setState(() => ({ userData: null }))
  }
}
export default ReduxService
