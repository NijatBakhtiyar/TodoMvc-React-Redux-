export const todoStore = (state = [], action) => {
    switch (action.type) {
        case "add":
            return [...state, action.payload];

        case "remove":
            state = state.filter(value => value.id !== action.payload)
            return state;

        case "edit":
            state = state.map(value => {
                if (value.id == action.payload.id) {
                    return { ...value, name: action.payload.newName };
                }
                return value
            })
            return [...state]

        case "clearCompleted":
            return state.filter(value => value.checked === false)

        case "checked":
            state = state.map(value => {
                if (value.id == action.payload) {
                    return { ...value, checked: !value.checked };
                }
                return value
            })
            return [...state]
        default:
            return state;
    }
}