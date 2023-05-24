

const logInWithEmailAndPassword = async (email, password) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  var urlencoded = new URLSearchParams();
  urlencoded.append("email", email);
  urlencoded.append("password", password);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };
  try {
    fetch("http://13.39.85.8/auth/login", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result);
        localStorage.setItem("token", JSON.parse(result).access_token);
        localStorage.setItem("email", email);
        fetchprofile();
        fetchMessages();
        getSidekickInfos();
      })
  } catch (err) {
    console.log(err)
  }
};

const fetchprofile = async () => {
  if (!localStorage.getItem("token")) {
    console.log("no token in local storage");
    return (null)
  }

  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

  console.log("bear" + localStorage.getItem("token"), myHeaders);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  try {

    fetch("http://13.39.85.8/user_infos/", requestOptions)
      .then(response => response.text())
      .then(result => {
        localStorage.setItem("userId", JSON.parse(result).userId);
        localStorage.setItem("birthDate", JSON.parse(result).birthDate);
        localStorage.setItem("username", JSON.parse(result).username);
        localStorage.setItem("firstname", JSON.parse(result).firstname);
        localStorage.setItem("lastname", JSON.parse(result).lastname);
        localStorage.setItem("size", JSON.parse(result).size);
        localStorage.setItem("weight", JSON.parse(result).weight);
        localStorage.setItem("gender", JSON.parse(result).gender);
        localStorage.setItem("description", JSON.parse(result).description);
        localStorage.setItem("sport_frequence", JSON.parse(result).sport_frequence);
        console.log(result)
      })
  }
  catch (e) {
    console.log("Error fetching profile. request.js");
  }
};

const connectWithGoogle = () => {
  try {
    fetch('http://www.yourdomain.com/api/comments/id')
      .then(response => response.json)
  } catch (err) {
    console.log("Error in the fetch request of the function : login with email.")
  }
};

const registerWithEmailAndPassword = async (email, password) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  var urlencoded = new URLSearchParams();
  urlencoded.append("email", email);
  urlencoded.append("password", password);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };
  try {
    fetch("http://13.39.85.8/auth/register", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result)
        localStorage.setItem("token", JSON.parse(result).access_token);
        localStorage.setItem("email", email);
      })
  } catch (err) {
    console.log(err)
  }
};

const editProfile = (usernameChange, frequecyChange, descriptionChange, weightChange) => {
  var myHeaders = new Headers();
  myHeaders.append("content-type", "application/json");
  myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

  var raw = JSON.stringify({
    "firstname": "Admin",
    "lastname": "Super",
    "size": "180",
    "weight": "80",
    "birthDate": "2001-03-10",
    "username": "SuperAdmin",
    "gender": "MALE",
    "description": "AdminSuper esta enervados",
    "sport_frequence": "NEVER"
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("http://13.39.85.8/user_infos/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

const fetchMessages = () => {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  try {
    fetch("http://13.39.85.8/messages/getMessages", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log("RESULT set localstorage", JSON.parse(result));
        localStorage.setItem("messages", JSON.stringify(JSON.parse(result)));
      })
  }
  catch (error) {
    console.log('fetch messages error : ', error);
  }
}

const getSidekickInfos = () => {

  try {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("http://13.39.85.8/user_infos/sidekick", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result)
        localStorage.setItem("sidekick_name", JSON.parse(result).firstname + " " + JSON.parse(result).lastname);
        localStorage.setItem("sidekick_frequency", JSON.parse(result).frequence_sportive);
        localStorage.setItem("sidekick_bio", JSON.parse(result).bio);
      })
  }
  catch (error) {
    console.log('get infos sidekick error : ', error);
  }
}

const logout = () => {
  localStorage.clear();
};

const resetPassword = async (email, password, confirmPassword, code) => {
  if (password !== confirmPassword) {
    return false;
  }
  console.log(password, code, email)
  try {
    var requestOptions = {
      method: 'POST',
      headers: { "Content-Type": 'application/json' },
      body: JSON.stringify({
        email: email,
        password: password,
        verificationCode: code,
      })
    };

    console.log(requestOptions.body)
    return await fetch("http://13.39.85.8/auth/resetPassword", requestOptions)
      .then(response => true)
      .catch(error => {
        console.log('Error: ', error);
      });
  }
  catch (error) {
    console.log('Invalid code : ', error);
    return false
  }
}

export {
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  fetchprofile,
  resetPassword,
  logout,
  fetchMessages
};