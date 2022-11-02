const state = {}

function notify() {
    console.log(state)
}

function set(key, value) {
    state[key] = value
    notify()
}

function toggle(key) {
    if (!typeof (state[key]) === 'boolean') return
    state[key] = !state[key]
    notify()
}

function get(key) {
    return state[key]
}

function all() {
    return state 
}

export default {
    set,
    toggle,
    get,
    all
}