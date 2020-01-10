const getters = {
  token: state => state.user.token,
  wxData: state => state.user.wxData,
  openId: state => state.user.openId,
}

export default getters
