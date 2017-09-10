var index = require("./index.js")

//console.log(index.name)

if (index.name === "Beth") {
  console.log("The name is correct")
} else {
  name = "Susan"
  console.log("Expected " + this.name + "; Received the name " + index.name + " instead." )
}

if (index.height === 70) {
  console.log("Correct height returned")
} else {
  console.log("Expected a height of " + this.height + ", instead a height of " + index.height + " was returned.")
}
