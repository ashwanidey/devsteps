import React, { useState } from "react";
import { SingleInputForm } from "./SingleInputForm";
import { Sandpack } from "@codesandbox/sandpack-react";

const Rename = ({ node }) => {
  const [newName, setNewName] = useState("");
  const [showInput, setShowInput] = useState(false);
  return (
    <div>
      <button onClick={() => setShowInput((prev) => !prev)}>Rename</button>
      {showInput && (
        <SingleInputForm
          files={Sandpack.files}
          onBlur={() => deleteFile(`${node?.data?.path}`)}
          isDirectory={node.text.includes("addDir")}
          currentPath={node?.data?.path.split("/").slice(0, -1).join("/")}
          onSubmit={async (fileName) => {
            const newPath = node?.data?.path.split("/").slice(0, -1).join("/");

            const path = `${newPath}/${fileName}`;
            await addFile({
              [path]: {
                code: node.text.includes("addDir")
                  ? ".emptyDir"
                  : `// ${fileName}`,
                hidden: node.text.includes("addDir"),
              },
            });
          }}
        />
      )}
    </div>
  );
};

export default Rename;
