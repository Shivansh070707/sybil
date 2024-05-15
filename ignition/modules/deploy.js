const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");



module.exports = buildModule("deploy", (m) => {

  const sybil = m.contract("Sybil", []);
  const verifier=m.contract("Verifier", []);

});
