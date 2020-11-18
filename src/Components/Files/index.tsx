import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import styles from "./index.module.css";

export const filesQuery = gql`
  {
    files
  }
`;

export const Files = () => {
  const { data, loading } = useQuery(filesQuery);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div className={styles.main}>
      <h3>Previous Assigments</h3>
      {data.files.map((x: any, index: any) => (
        <a
          key={index}
          href={`https://storage.cloud.google.com/codettes/${x}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {x}
        </a>
      ))}
      <a
        href={`https://storage.cloud.google.com/codettes/worksheet-1.pdf`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Physics Assigment
      </a>
    </div>
  );
};
