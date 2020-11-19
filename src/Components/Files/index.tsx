import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import TickGreen from "../../images/tick_green.svg";
import TickRed from "../../images/tick_red.svg";
import api from "../../config/api";

export const Files = () => {
  const [state, setState] = useState<any[]>([]);
  useEffect(() => {
    api.get("/files").then((res) => {
      setState(res.data.files);
    });
  }, []);

  return (
    <div className={styles.main}>
      <h3>Assigments</h3>
      <a
        href={`https://storage.cloud.google.com/codettes/worksheet-2.pdf`}
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
      <h3>Submitted Assigments</h3>
      {!state.length ? "No Previously Submitted Assignments" : null}
      {state.map((x: any, index: any) => (
        <a
          key={index}
          // href={`https://storage.cloud.google.com/codettes/${x}`}
          href={x.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {x.name}
          <span>
            <img
              src={index === 0 ? TickGreen : TickRed}
              alt=""
              style={{ height: 20, width: 20 }}
            />
          </span>
        </a>
      ))}
      {/* <a
        href={`https://storage.cloud.google.com/codettes/worksheet-2.pdf`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Physics Assigment - 1
        <span>
          <img src={TickGreen} alt="" style={{ height: 20, width: 20 }} />
        </span>
      </a>
      <a
        href={`https://storage.cloud.google.com/codettes/worksheet-2.pdf`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Physics Assigment - 2
        <span>
          <img src={TickRed} alt="" style={{ height: 20, width: 20 }} />
        </span>
      </a> */}
    </div>
  );
};
