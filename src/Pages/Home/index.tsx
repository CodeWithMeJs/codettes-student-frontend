import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import PastMeetings from "../../Components/PastMeetings";
import styles from "./index.module.css";
const socket = io("http://localhost:5000");

function Home() {
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState("");

  function submit(e: any) {
    e.preventDefault();
    socket.emit("submit-code", {
      code: code,
      name: "Swapnadeep",
    });
    console.log(code);
    setOpen(false);
  }

  function openInputForm() {
    return (
      <form className={styles.codeForm} onSubmit={submit}>
        <input
          type="text"
          placeholder="Code"
          onChange={(e) => setCode(e.target.value)}
        />
        <button>SUBMIT</button>
      </form>
    );
    // var strWindowFeatures =
    //   "location=yes,height=570,width=520,scrollbars=yes,status=yes";
    // window.open(`code-input`, "_blank", strWindowFeatures);
  }

  useEffect(() => {
    const eventHandler = () => setOpen(true);
    socket.on("new-remote-code", eventHandler);
    // unsubscribe from event for preventing memory leaks
    return () => {
      socket.off("new-remote-code", eventHandler);
    };
  }, []);

  return (
    <div className={styles.main}>
      <h1>Welcome To Home</h1>
      <PastMeetings />
      {open && openInputForm()}
    </div>
  );
}

export default Home;
