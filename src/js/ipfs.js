const multihash = require('multihashes')

module.exports.hashTo32ByteHex = function(ipfsHash) {
  let buf = multihash.fromB58String(ipfsHash)
  let digest = multihash.decode(buf).digest
  return '0x' + multihash.toHexString(digest)
}
