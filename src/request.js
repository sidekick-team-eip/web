import fetch from 'fetch'
require('dotenv').config()

const logInWithEmailAndPassword = async (email, password) => {
    try {
        fetch('http://13.39.85.8/auth/login', {
            Method: 'POST',
            Headers: {
              Accept: 'application/x-www-form-urlencoded',
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            Body: {
                'email': 'alexandre.antoniutti@epitech.eu',
                'password': 'NewPassord12345'
              },
            Cache: 'default'
        })
        .then(response => console.log(response.json))
    } catch (err) {
        console.log("Error in the fetch request of the function : login with email.")
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

const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        fetch('http://www.yourdomain.com/api/comments/id')
        .then(response => response.json)
    } catch (err) {
        console.log("Error in the fetch request of the function : login with email.")
    }
  };

const logout = () => {

  };

export {
    logInWithEmailAndPassword
  };