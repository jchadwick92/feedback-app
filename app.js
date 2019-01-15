var db = new PouchDB('app_database');
console.log("Hello World");
console.log(db);

var doc = {
    "_id": "messages",
    "messages": [
      "playing with balls of yarn",
      "chasing laser pointers",
      "lookin' hella cute"
    ]
  };

  db.get('messages').then(function (doc) {
    console.log(doc);
    var list = document.createElement('ul');
    for(var i=0; i < doc.messages.length; i++) {
        var item = document.createElement('li');
        item.appendChild(document.createTextNode(doc.messages[i]));
        list.appendChild(item);
    }
    return list;
  });

  const form = document.querySelector("form");
  form.addEventListener("submit", e => {
      e.preventDefault();
      const newMessage = document.querySelector("textarea").value;
      console.log(newMessage);

      db.get('messages').then(doc => {
          doc.messages.push(newMessage);
          return db.put(doc);
      }).catch(err => {
          console.log(err);
      })
  })