function spinalCase(str) {
  var regex = /\s+|_+|\/+/g;

  console.log(regex)

  str = str.replace(/([a-z])([A-Z])/g, "$2a $1");

  console.log(str)

  str = str.replace(regex, "-").toLowerCase();

  str = str.replace(/-+/g, "-")

  console.log(str)
  return str
}

console.log(spinalCase("thisIsSpinalTap"));
//--> "this-is-spinal-tap"