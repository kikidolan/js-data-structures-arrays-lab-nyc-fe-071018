// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyappendDriver(name) {
  return [...drivers, name];
}

function destructivelyprependDriver(name) {
  return [name, ...drivers]
}



