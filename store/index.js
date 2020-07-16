export const state = () => ({
  menus: {}
})

export const actions = {
  listAction() {}
}

export const getters = {
  activeMenu: (state) => (name) => state.menus[name]
}

export const mutations = {
  LIST(state, menus) {
    state.menus = {
      ...state.menus,
      ...menus
    }
  },
  ACTIVE(state, { key, active }) {
    state.menus[key].active = active
  }
}
