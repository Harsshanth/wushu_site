"use strict";
exports.__esModule = true;
exports.app = void 0;
var app_1 = require("firebase/app");
var config = {
    apiKey: "AIzaSyCRxHVYubhvGH-QpfA1UzUupB5FW9uT3iM",
    authDomain: "priortizer.firebaseapp.com",
    projectId: "priortizer",
    storageBucket: "priortizer.appspot.com",
    messagingSenderId: "761350198935",
    appId: "1:761350198935:web:1e0d80e35f6f582edc3bd2",
    measurementId: "G-KJ2J645YPE",
    databaseURL: "https://priortizer-default-rtdb.asia-southeast1.firebasedatabase.app"
};
exports.app = (0, app_1.initializeApp)(config);
