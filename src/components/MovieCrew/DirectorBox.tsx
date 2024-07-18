import React from "react";
import styles from "./MovieCrew.module.scss";
import Accordion from "@/components/ui/Accordion/Accordion";

interface Props {
  directorList: string[];
}

const DirectorBox = ({ directorList }: Props) => {
  return (
    <div className={styles.crew_box}>
      <Accordion
        title={<h3>Director</h3>}
        itemContent={
          <div className={styles.crew_grid}>
            {directorList.map((director) => (
              <p key={`${director}-director`}>{director}</p>
            ))}
          </div>
        }
      />
    </div>
  );
};

export default DirectorBox;
