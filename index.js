const app = "I don't do much."

var kittens = [
  "Milo",
  "Otis",
  "Garfield"
]

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

function prependKitten(name){
  var newArray = kittens.unshift(name)
  return newArray
}

function removeLastKitten(){
  var newArray = kittens.pop()
  return newArray
}

function removeFirstKitten(){
  var newArray = kittens.shift()
  return newArray
}

function appendKitten(name){
  var newArray = kittens.push(name)
  return newArray
}