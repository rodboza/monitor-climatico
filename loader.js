let server = require('./config/app');
let port = process.env.PORT || 3010;


server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`);
  });

