 // Create with rxreducer snippet
const initialState = {}

export default (state = ["Movie 1","Movie 2","Movie 3"], { type, payload }) => {
  switch (type) {
/*case typeName:
    return { ...state, ...payload } */
  default:
    return state
  }
}
