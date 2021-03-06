import url from 'url'

var queryParams = url.parse(document.location.href, true).query
var theme = queryParams.theme || window.localStorage.getItem('mumble.theme')
var themes = {
  'MetroMumbleLight': 'MetroMumbleLight',
  'MetroMumbleDark': 'MetroMumbleDark',
  'light': 'MetroMumbleLight',
  'dark': 'MetroMumbleDark',
  'VoiceRoomSpace': 'VoiceRoomSpace',
  'Podemos': 'Podemos'
}
theme = themes[theme] || window.mumbleWebConfig.defaults.theme
window.theme = theme

var [loadingTheme, mainTheme] = {
  'MetroMumbleLight': [
    require('../themes/MetroMumbleLight/loading.scss'),
    require('../themes/MetroMumbleLight/main.scss')
  ],
  'MetroMumbleDark': [
    require('../themes/MetroMumbleDark/loading.scss'),
    require('../themes/MetroMumbleDark/main.scss')
  ],
  'VoiceRoomSpace': [
    require('../themes/VoiceRoomSpace/loading.scss'),
    require('../themes/VoiceRoomSpace/main.scss')
  ],
  'Podemos': [
    require('../themes/Podemos/loading.scss'),
    require('../themes/Podemos/main.scss')
  ]

}[theme]

function useStyle (url) {
  var style = document.createElement('link')
  style.rel = 'stylesheet'
  style.type = 'text/css'
  style.href = url
  document.getElementsByTagName('head')[0].appendChild(style)
}
useStyle(loadingTheme)
useStyle(mainTheme)
