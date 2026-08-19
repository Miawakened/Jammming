

let accessToken = ''
let expiresIn = 0

const Spotify = {
  
  getAccessToken() {

    if (accessToken) {
      return accessToken
    }

    const tokenMatch = window.location.href.match(/access_token=([^&]*)/)
    const expiresMatch = window.location.href.match(/expires_in=([^&]*)/)

    if (tokenMatch) {
      accessToken = tokenMatch[1]
      expiresIn = expiresMatch[1]

      window.setTimeout(() => {
        accessToken = ''
        expiresIn = 0
      }, expiresIn * 1000)

      window.history.pushState({}, null, '/')
    }
    return accessToken
  }
}

export default Spotify