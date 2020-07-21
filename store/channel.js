export const state = () => ({
  gameTags: [],
  tagServers: {},
  servers: [],
  serverChannels: {},
})

export const actions = {
  gameTagsAction({ commit }) {
    const list = [
      {
        gameTagId: 7002,
        isShow: 1,
        tagName: 'Steam',
      },
      {
        gameTagId: 7003,
        isShow: 1,
        tagName: '国服',
      },
      {
        gameTagId: 7008,
        isShow: 1,
        tagName: 'Origin',
      },
      {
        gameTagId: 7009,
        isShow: 1,
        tagName: 'Switch',
      },
      {
        gameTagId: 7010,
        isShow: 1,
        tagName: 'Epic',
      },
      {
        gameTagId: 7012,
        isShow: 1,
        tagName: 'Uplay',
      },
      {
        gameTagId: 7013,
        isShow: 1,
        tagName: '战网',
      },
    ]
    commit('GAME_TAGS', list)
    commit(
      'LIST',
      {
        index: {
          active: 0,
          list,
        },
      },
      { root: true }
    )
    return list
  },
  findServerByGameTag({ commit }, { gameTagId }) {
    const servers = [
      {
        backImgUrl:
          'http://test-dfs01.nn.com//group1/M00/00/1D/rBMjk17XPTuASOjOAAA_y75I8zU089.png',
        bigImgUrl:
          'http://test-dfs01.nn.com/group1/M00/00/3E/rBMjk17gQuOAQTLPAABDpHJUe90858.png',
        intor:
          '绝地求生是一款战术竞技游戏,策略与枪法一样重要,充满各种随机性要素,需要你随时做出判断,取得胜利。',
        mambers: 17,
        nickName: '',
        nnNumber: 0,
        onlineNum: 0,
        serverId: 119014,
        serverName: '绝地求生',
        serverTypeId: 2,
        smallImgUrl:
          'http://test-dfs01.nn.com//group1/M00/00/05/rBMjk17XOvGAbtGyAAADeA6r4tc653.png',
        userId: 8105,
        userUrlNn: '',
      },
      {
        backImgUrl:
          'http://test-dfs01.nn.com//group1/M00/00/1D/rBMjk17XPTuASOjOAAA_y75I8zU089.png',
        bigImgUrl:
          'http://test-dfs01.nn.com//group1/M00/00/28/rBMjk17XPkKAFFgHAAAv0VelcSo046.png',
        intor:
          '第三人称动作RPG类游戏。游戏的世界为架空的中古世界，玩家在游戏中可以扮演骑士、商人、盗匪等多种角色，内容丰富，自由度极高，同时众多制作精良的MOD也是该游戏的亮点之一。',
        mambers: 5,
        nickName: '',
        nnNumber: 0,
        onlineNum: 0,
        serverId: 119018,
        serverName: '骑马与砍杀',
        serverTypeId: 2,
        smallImgUrl:
          'http://test-dfs01.nn.com//group1/M00/00/1D/rBMjk17XPTuASOjOAAA_y75I8zU089.png',
        userId: 8109,
        userUrlNn: '',
      },
      {
        backImgUrl:
          'http://test-dfs01.nn.com//group1/M00/00/1D/rBMjk17XPTuASOjOAAA_y75I8zU089.png',
        bigImgUrl:
          'http://test-dfs01.nn.com//group1/M00/00/16/rBMjk17XPIKAQ1WTAAAsBXBjPYo806.png',
        intor:
          '一款2D大逃杀类游戏，没有伏地魔,没有老阴比爆头,有的是可以快速轻松战翻全场的杀戮快感,几分钟就能简单吃鸡',
        mambers: 1,
        nickName: '',
        nnNumber: 0,
        onlineNum: 0,
        serverId: 119020,
        serverName: '超级动物大逃杀',
        serverTypeId: 2,
        smallImgUrl:
          'http://test-dfs01.nn.com//group1/M00/00/1D/rBMjk17XPTuASOjOAAA_y75I8zU089.png',
        userId: 8110,
        userUrlNn: '',
      },
      {
        backImgUrl:
          'http://test-dfs01.nn.com//group1/M00/00/1D/rBMjk17XPTuASOjOAAA_y75I8zU089.png',
        bigImgUrl:
          'http://test-dfs01.nn.com//group1/M00/00/1D/rBMjk17XPUOAUO8rAAAX29Ytcmc346.png',
        intor:
          '本作为第一人称射击游戏。游戏专注于速度、瞄准、移动,尤其是所有的比赛。没有诸如升级、可购买武器、血淋淋的图形暴力等花招。',
        mambers: 1,
        nickName: '',
        nnNumber: 0,
        onlineNum: 0,
        serverId: 119021,
        serverName: 'Warfork',
        serverTypeId: 2,
        smallImgUrl:
          'http://test-dfs01.nn.com//group1/M00/00/1D/rBMjk17XPTuASOjOAAA_y75I8zU089.png',
        userId: 8112,
        userUrlNn: '',
      },
      {
        backImgUrl:
          'http://test-dfs01.nn.com//group1/M00/00/1D/rBMjk17XPTuASOjOAAA_y75I8zU089.png',
        bigImgUrl:
          'http://test-dfs01.nn.com//group1/M00/00/06/rBMjk17XOwOAe_4DAAA-bcmD_u0402.png',
        intor:
          '在这与40位英雄激战的战场上，为了成为最后的生存者、唯一胜者，该要具备哪些条件呢？',
        mambers: 1,
        nickName: '',
        nnNumber: 0,
        onlineNum: 0,
        serverId: 119022,
        serverName: '影子战场',
        serverTypeId: 2,
        smallImgUrl:
          'http://test-dfs01.nn.com//group1/M00/00/1D/rBMjk17XPTuASOjOAAA_y75I8zU089.png',
        userId: 8114,
        userUrlNn: '',
      },
      {
        backImgUrl:
          'http://test-dfs01.nn.com//group1/M00/00/1D/rBMjk17XPTuASOjOAAA_y75I8zU089.png',
        bigImgUrl:
          'http://test-dfs01.nn.com//group1/M00/00/10/rBMjk17XPASAatk7AAA3i-1dYz4157.png',
        intor:
          '游戏故事描述在过去曾因为各国相互竞争、发生染血战争历史的 Eorzea 上，因为被认为在这里存在着「水晶」，玩家将在此地展开新的冒险故事',
        mambers: 1,
        nickName: '',
        nnNumber: 0,
        onlineNum: 0,
        serverId: 119023,
        serverName: '最终幻想14',
        serverTypeId: 2,
        smallImgUrl:
          'http://test-dfs01.nn.com//group1/M00/00/1D/rBMjk17XPTuASOjOAAA_y75I8zU089.png',
        userId: 8113,
        userUrlNn: '',
      },
      {
        backImgUrl:
          'http://test-dfs01.nn.com//group1/M00/00/1D/rBMjk17XPTuASOjOAAA_y75I8zU089.png',
        bigImgUrl:
          'http://test-dfs01.nn.com//group1/M00/00/23/rBMjk17XPc-AJYufAAAwz9tYpDU250.png',
        intor:
          '游戏为玩家提供了一个轻松的场景，玩家们可以在那里进行完美的练习。',
        mambers: 1,
        nickName: '',
        nnNumber: 0,
        onlineNum: 0,
        serverId: 119024,
        serverName: '高级保龄球',
        serverTypeId: 2,
        smallImgUrl:
          'http://test-dfs01.nn.com//group1/M00/00/1D/rBMjk17XPTuASOjOAAA_y75I8zU089.png',
        userId: 8116,
        userUrlNn: '',
      },
      {
        backImgUrl:
          'http://test-dfs01.nn.com//group1/M00/00/1D/rBMjk17XPTuASOjOAAA_y75I8zU089.png',
        bigImgUrl:
          'http://test-dfs01.nn.com//group1/M00/00/0D/rBMjk17XO7GAQ15bAAAxlt4rHZ4027.png',
        intor:
          '游戏以生存冒险为基础，本作结合了《腐蚀(Rust)》以及《DayZ》。游戏中玩家将进入一个末日世界，为了生存下去必须不断地接受各式各样的挑战',
        mambers: 1,
        nickName: '',
        nnNumber: 0,
        onlineNum: 0,
        serverId: 119025,
        serverName: 'Miscreated',
        serverTypeId: 2,
        smallImgUrl:
          'http://test-dfs01.nn.com//group1/M00/00/1D/rBMjk17XPTuASOjOAAA_y75I8zU089.png',
        userId: 8115,
        userUrlNn: '',
      },
      {
        backImgUrl:
          'http://test-dfs01.nn.com//group1/M00/00/1D/rBMjk17XPTuASOjOAAA_y75I8zU089.png',
        bigImgUrl:
          'http://test-dfs01.nn.com//group1/M00/00/18/rBMjk17XPL6AYlHbAABNkqmPWE0925.png',
        intor:
          '其背景设定为17世纪中叶沙俄危机时期。它是战团的续作，并在之战斗系统上增加了火器，促使玩家改进在过去已然完美的战术。',
        mambers: 1,
        nickName: '',
        nnNumber: 0,
        onlineNum: 0,
        serverId: 119027,
        serverName: '骑马与砍杀：火与剑',
        serverTypeId: 2,
        smallImgUrl:
          'http://test-dfs01.nn.com//group1/M00/00/1D/rBMjk17XPTuASOjOAAA_y75I8zU089.png',
        userId: 8118,
        userUrlNn: '',
      },
      {
        backImgUrl:
          'http://test-dfs01.nn.com//group1/M00/00/1D/rBMjk17XPTuASOjOAAA_y75I8zU089.png',
        bigImgUrl:
          'http://test-dfs01.nn.com//group1/M00/00/05/rBMjk17XOvuAXeKjAABPSoAUDco301.png',
        intor:
          '是由Rockstar Games游戏公司出版发行的一款围绕犯罪为主题的开放式动作冒险游戏。',
        mambers: 1,
        nickName: '',
        nnNumber: 0,
        onlineNum: 0,
        serverId: 119029,
        serverName: 'GTA5',
        serverTypeId: 2,
        smallImgUrl:
          'http://test-dfs01.nn.com//group1/M00/00/1D/rBMjk17XPTuASOjOAAA_y75I8zU089.png',
        userId: 8120,
        userUrlNn: '',
      },
    ]
    commit('TAG_SERVERS', { gameTagId, servers })
    return servers
  },
  serversAction({ commit }, params) {
    const servers = [
      {
        nickName: 'ZGL',
        nnNumber: 118958,
        roldId: 1,
        serverId: 119929,
        serverTypeId: 1,
        serverMemberId: 117929,
        sort: 0,
        userId: 4945,
        userUrlNn:
          'https://dfs01.nn.com/group1/M00/00/19/rB8AIF8RSeyACRJoAAAKmXbq74c060.png',
      },
      {
        nickName: '绝地求生',
        nnNumber: 228060,
        roldId: 0,
        serverId: 119014,
        serverMemberId: 117977,
        serverTypeId: 2,
        sort: 0,
        userId: 4945,
        userUrlNn:
          'http://test-dfs01.nn.com//group1/M00/00/05/rBMjk17XOvGAbtGyAAADeA6r4tc653.png',
      },
      {
        nickName: 'zfm',
        nnNumber: 119169,
        roldId: 0,
        serverId: 119930,
        serverMemberId: 117991,
        serverTypeId: 1,
        sort: 0,
        userId: 4945,
        userUrlNn:
          'http://test-dfs01.nn.com/group1/M00/00/39/rBMjk17Z6VmAIU-5AAAmUIEU69s147.png',
      },
    ]
    commit('SERVERS', servers)
    return servers
  },
  serverChannelsAction({ commit }, { active, id }) {
    const serverChannels = [
      {
        groupId: Math.floor(Math.random() * 1000),
        groupName: '我的',
        group: [
          {
            channelId: Math.floor(Math.random() * 1000000),
            channelName: '绝地逃生',
            channelType: 1,
          },
          {
            channelId: Math.floor(Math.random() * 1000000),
            channelName: '逃难',
            channelType: 2,
          },
        ],
      },
      {
        groupId: Math.floor(Math.random() * 1000),
        groupName: '订阅',
        group: [
          {
            channelId: Math.floor(Math.random() * 1000000),
            channelName: '孤岛惊魂',
            channelType: 1,
          },
          {
            channelId: Math.floor(Math.random() * 1000000),
            channelName: '大逃杀',
            channelType: 4,
          },
        ],
      },
    ]
    commit('SERVER_CHANNELS', { id, list: serverChannels })
    commit(
      'LIST',
      {
        [active]: {
          active: 0,
          list: serverChannels,
        },
      },
      { root: true }
    )
    return serverChannels
  },
}

export const mutations = {
  GAME_TAGS(state, list) {
    state.gameTags = list
  },
  SERVER_CHANNELS(state, { id, list }) {
    state.serverChannels[id] = list
  },
  SERVERS(state, servers) {
    state.servers = servers
  },
  TAG_SERVERS(state, { gameTagId, servers }) {
    state.tagServers[gameTagId] = servers
  },
}
