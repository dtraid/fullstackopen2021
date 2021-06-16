const mongoose = require('mongoose');

const password = process.argv[2];

if (process.argv.length < 3) {
  console.log(
    'Please provide the password as an argument: node mongo.js <password>'
  );
  process.exit(1);
}

const url = `mongodb+srv://fullstack:${password}@cluster0.ye0ff.azure.mongodb.net/phonebook?retryWrites=true&w=majority`;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model('Person', personSchema);

if (process.argv.length === 3) {
  Person.find({}).then((result) => {
    result.forEach((note) => {
      console.log(note);
    });
    mongoose.connection.close();
  });
} else if (process.argv.length === 5 && process.argv[3] && process.argv[4]) {
  const person = new Person({ name: process.argv[3], number: process.argv[4] });
  person.save().then((_) => {
    console.log(`${person.name} added to the phonebook`);
    mongoose.connection.close();
  });
} else {
  console.log('Incorrect number of parameters');
  process.exit(1);
}
