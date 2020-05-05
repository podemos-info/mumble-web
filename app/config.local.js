// You can overwrite the default configuration values set in [config.js] here.
// There should never be any required changes to this file and you can always
// simply copy it over when updating to a new version.

let config = window.mumbleWebConfig // eslint-disable-line no-unused-vars

config.connectDialog.address = false
config.connectDialog.port = false
config.connectDialog.username = true
config.connectDialog.password = false
config.connectDialog.token = true
config.connectDialog.channelName = false

config.defaults.address = 'voiceroom.space'
config.defaults.port = '443/demo'
config.defaults.theme = 'VoiceRoomSpace'

config.settings.voiceMode = 'cont'
config.settings.toolbarVertical = false
