function incrementAge(obj) {
  if (!obj.age) {
      obj.age = 0;
  }
  obj.age += 1;
  obj.updated_at = new Date();
}

function incrementAgeCopy(obj) {
  const copy = { ...obj };
  if (!copy.age) {
      copy.age = 0;
  }
  copy.age += 1;
  copy.updated_at = new Date();
  return copy;
}

const person = {
  id: "42",
  name: "Bruce",
  occupation: "Knight"
};

incrementAge(person);
console.log("After incrementAge:", person);

const updatedPerson = incrementAgeCopy(person);
console.log("Original person after incrementAgeCopy:", person);
console.log("Updated person copy:", updatedPerson);