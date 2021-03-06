const config = require('./config.json')
const Mam = require('@iota/mam/lib/mam.client.js')
const { asciiToTrytes, trytesToAscii } = require('@iota/converter')

const mode = 'public'
//const logData = data => console.log('Fetched and parsed', JSON.parse(trytesToAscii(data)), '\n')
const setState = async (mamState, root) => {
  const packet = await Mam.fetch(root, mode)
  // mamState.channel.next_root = packet.nextRoot
  // mamState.channel.start = packet.messages.length
  return mamState
}

module.exports = async (root) => {
  let mamState = Mam.init(config.provider)
  if (root) {
    mamState = await setState(mamState, root)
  }
  return mamState
}
