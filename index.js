const {app} = require('./app');

app.listen(process.env.PORT || 4000)
console.log("Server On port 4000")


/*
git update-ref -d HEAD
git push origin master -f
*/