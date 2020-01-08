const { giveString } = require("./code/shared");

module.exports = async (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ result: giveString() }));
};
