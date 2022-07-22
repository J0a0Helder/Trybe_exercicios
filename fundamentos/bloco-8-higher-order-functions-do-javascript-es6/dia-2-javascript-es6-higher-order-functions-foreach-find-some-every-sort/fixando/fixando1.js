const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email, pessoas) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  console.log(`Atualmente temos ${pessoas} pessoas cadastradas`);
};

// Adicione seu código aqui
emailListInData.forEach(showEmailList);
