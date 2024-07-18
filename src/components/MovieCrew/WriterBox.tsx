import React from "react";
import styles from "./MovieCrew.module.scss";
import Accordion from "@/components/ui/Accordion/Accordion";

interface Props {
  writerList: string[];
}

const WriterBox = ({ writerList }: Props) => {
  return (
    <div className={styles.crew_box}>
      <Accordion
        title={<h3>Writer</h3>}
        itemContent={
          <div className={styles.crew_grid}>
            {writerList.map((writer) => (
              <p key={`${writer}-writer`}>{writer}</p>
            ))}
          </div>
        }
      />
    </div>
  );
};

export default WriterBox;
