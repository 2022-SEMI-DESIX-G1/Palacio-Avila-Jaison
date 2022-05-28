const { Router, response } = require('express');

const router = Router();

router.get('/', (req, res = response) => {
    const number = req.body.number;
    const fibonacci = (number) => {
        const fibonacci = [];
        fibonacci[0] = 0;
        fibonacci[1] = 1;
      
        for (var i = 2; i < number; i++) {
          fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
        }
        return fibonacci;
      };

      const result = fibonacci(number);
      res.json({ result });
})

module.exports = router