const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = () => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
   return userToReturn// Insira o retorno da função `getUser`
};

console.log(userFullName(getUser())); // complete a chamada da função getUser de modo que o retorno seja: "Hello! My name is Ivan Ivanovich"
console.log(userNationality(getUser())); // complete a chamada da função getUser de modo que o retorno seja: "Ivan is Russian"
