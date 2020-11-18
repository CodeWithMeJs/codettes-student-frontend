import React from "react";
import { Files } from "../../Components/Files";
import Upload from "../../Components/Upload";
import styles from "./index.module.css";

function UploadAssignments() {
  return (
    <div className={styles.main}>
      <h1>Upload Assignments</h1>
      <Upload />
      <Files />
    </div>
  );
}

export default UploadAssignments;
