import React from "react";
import styles from "./MovieCrew.module.scss";
import Accordion from "@/components/ui/Accordion/Accordion";

interface Props {
  actorList: string[];
}

const ActorBox = ({ actorList }: Props) => {
  return (
    <div className={styles.crew_box}>
      <Accordion
        initialOpen={true}
        title={<h3>Actor</h3>}
        itemContent={
          <div className={styles.crew_grid}>
            {actorList.map((actor) => (
              <p key={`${actor}-actor`}>{actor}</p>
            ))}
          </div>
        }
      />
    </div>
  );
};

export default ActorBox;
