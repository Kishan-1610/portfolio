import React, { useEffect, useState } from "react";
import Axios from "axios";
import './style.css';

function LandingPage() {
    const [text, setText] = useState("");
    const originalText = "Hello! I am (Name)";

    useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
        if (currentIndex < originalText.length) {
        setText(originalText.substring(0, currentIndex + 1));
        currentIndex++;
        } else {
        clearInterval(interval);
        }
    }, 60); // Interval set to 15 milliseconds for faster typing effect

    return () => {
      clearInterval(interval); // Cleanup on unmount
    };
    }, []);

    useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
        if (res.status === 200) {
            console.log(res);
        } else {
            Promise.reject();
        }
        })
        .catch((err) => alert(err));
    }, []);

    return (
    <div className="vas">
        <h1>HI!, I'm (Name)</h1>
    </div>
    );
}

export default LandingPage;
