

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
        })
    } catch (err) {
        console.log(err)
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

const logout = () => {
    localStorage.clear();
  };

export {
    logInWithEmailAndPassword,
    registerWithEmailAndPassword
  };