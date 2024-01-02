let i = 1
let j = 60
let output = `I=${i} J=${j}`

while (j != 0) {
  i += 3
  j -= 5
  output += `\nI=${i} J=${j}`
}

console.log(output)
