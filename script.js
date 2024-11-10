const dob = document.querySelector("#dob");
const calculateBtn = document.querySelector("button");

function calculateAge() {
  if (!dob.value) return;

  const dateOfBirth = new Date(dob.value);
  const today = new Date();
  const age = today.getFullYear() - dateOfBirth.getFullYear();
  alert(`You are ${age} years old.`);
}

calculateBtn.addEventListener("click", calculateAge);
