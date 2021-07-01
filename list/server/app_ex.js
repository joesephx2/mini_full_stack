const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;
const knex = require('knex')(require('../knexfile.js')['development']);

// app.use(express.json());

// app.get('/123', (req, res) => {
//     res
//   .status(200)
//   .send('testing');

// });

app.get('/', (req, res) => {
  let tmp = knex
  .select()
  .from('todolist')
  .then(data => res.status(200).json(data))
    .catch(err =>
        res.status(404).json({
          message:
            'The data you are looking for could not be found. Please try again'
        })
      );
  console.log('express app_ex.js knex select * -> tmp', tmp);
  res
  .send(tmp);

});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})