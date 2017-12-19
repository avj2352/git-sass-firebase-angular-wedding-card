# Firebase Configuration


- Create a Firebase project, then navigate to Web and copy the config object:

```js
var config = {
    apiKey: "AIzaSyBWlxhagaaYlYHHidq7BSfuKnk2V19L3KE",
    authDomain: "test-chatapp-b17ea.firebaseapp.com",
    databaseURL: "https://test-chatapp-b17ea.firebaseio.com",
    projectId: "test-chatapp-b17ea",
    storageBucket: "",
    messagingSenderId: "223195150577"
  };
```

- Then Navigate to the Database > Rules and `disable the authentication as follows:`

```js
{
  "rules": {
    ".read": "auth != true",
    ".write": "auth != true"
  }
}
```

