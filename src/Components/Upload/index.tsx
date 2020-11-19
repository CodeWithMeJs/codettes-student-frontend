import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import styles from "./index.module.css";

export const filesQuery = gql`
  {
    files
  }
`;

const uploadFileMutation = gql`
  mutation UploadFile($file: Upload!) {
    uploadFile(file: $file)
  }
`;

function Upload() {
  const [uploadFile] = useMutation(uploadFileMutation, {
    refetchQueries: [{ query: filesQuery }],
  });
  const onDrop = useCallback(
    ([file]) => {
      uploadFile({ variables: { file } });
    },
    [uploadFile]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className={styles.main}>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <h2>Drop the files here ...</h2>
        ) : (
          <h2>Drag 'n' drop some files here, or click to select files</h2>
        )}
      </div>
    </div>
  );
}

export default Upload;
