import React from "react";
import styles from "./index.module.css";

export const Questions = () => {
  return (
    <div className={styles.main}>
      <h3>Previous Assigments</h3>
      <a
        href={`https://storage.cloud.google.com/codettes/worksheet-1.pdf`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Physics Assigment - 1
      </a>
      <a
        href={`https://storage.cloud.google.com/codettes/worksheet-2.pdf`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Physics Assigment - 2
      </a>
    </div>
  );
};
