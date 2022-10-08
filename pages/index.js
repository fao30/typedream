import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

// Import React dependencies.
import React, { useState } from "react";
// Import the Slate editor factory.
import { createEditor } from "slate";

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from "slate-react";
export default function Home() {
  const initialValue = [
    {
      type: "paragraph",
      children: [{ text: "Write something here." }],
    },
  ];
  const [editor] = useState(() => withReact(createEditor()));
  const [isReadOnly, setIsReadOnly] = useState(false);

  const onclick = (event) => {
    setIsReadOnly(false);
    return true;
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Write something below, press # to finish, and click the paragraph to
          continue!
        </h1>
        <Slate editor={editor} value={initialValue}>
          <Editable
            readOnly={isReadOnly}
            onKeyDown={(event) => {
              console.log(event);
              if (event.key === "#") {
                event.preventDefault();
                setIsReadOnly(true);
              }
            }}
            onClick={onclick}
          />
        </Slate>
      </main>
    </div>
  );
}
