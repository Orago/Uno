
const users = (io, socket, db, users) => {

   socket.on('login',data =>{
      console.log("Login: "+JSON.stringify(data));
      login(data);
   })

   socket.on('register',data =>{
      console.log("Register: "+JSON.stringify(data));
      register(data);
   })

   function login(data){
      console.log("Authenticating: "+ data.username +" "+ data.password);
      db.any("SELECT * FROM users WHERE username = $(username)",{ username: data.username })
      .then(user => {
       if (user.length == 0) {//user not found
         socket.emit('login response', {'result':false});
       }else if (data.password != user[0].password) {//wrong password
         console.log("WRONG Password");
         socket.emit('login response', {'result':false});
      }else{//Success
         result = true;
         console.log("user logged in: "+JSON.stringify(user));
         console.log("================ "+JSON.stringify(socket.handshake.headers['cookie']));
         let cookie = socket.handshake.headers['cookie'].split(';')
         let identifier = cookie[0].slice(4,cookie[0].length-1);
         console.log("================ "+identifier);
         users[identifier] = {'username':data.username,'id':user[0].id}
         socket.emit('login response', {'result':true});
      }
   })
      .catch(err => {//error
       console.log("Error: "+err);
       socket.emit('login response', {'result':false});
    });
   }

   function register(data){
      db.none('INSERT INTO users(username, email, password) VALUES(${username}, ${email}, ${password})', {
         username: data.username,
         email: data.email,
         password: data.password
      })
      .catch(err => {
         socket.emit('registration response', {'result':false});
      });
      socket.emit('registration response', {'result':true});
   }
}

module.exports = users;
