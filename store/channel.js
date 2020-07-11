export const state = () => ({
  gameTags: []
})

export const actions = {
  gameTagsAction({ commit }) {
    const list = [
      {
        gameTagId: 7002,
        isShow: 1,
        tagName: 'Steam'
      },
      {
        gameTagId: 7003,
        isShow: 1,
        tagName: '国服'
      },
      {
        gameTagId: 7008,
        isShow: 1,
        tagName: 'Origin'
      },
      {
        gameTagId: 7009,
        isShow: 1,
        tagName: 'Switch'
      },
      {
        gameTagId: 7010,
        isShow: 1,
        tagName: 'Epic'
      },
      {
        gameTagId: 7012,
        isShow: 1,
        tagName: 'Uplay'
      },
      {
        gameTagId: 7013,
        isShow: 1,
        tagName: '战网'
      }
    ]
    commit('GAME_TAGS', list)
    return list
  }
}

export const mutations = {
  GAME_TAGS(state, list) {
    state.gameTags = list
  }
}
