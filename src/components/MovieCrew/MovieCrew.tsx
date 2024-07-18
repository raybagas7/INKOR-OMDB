"use client";
import React from "react";
import styles from "./MovieCrew.module.scss";
import DirectorBox from "./DirectorBox";
import WriterBox from "./WriterBox";
import ActorBox from "./ActorBox";

interface Props {
  director: string;
  writer: string;
  actors: string;
}

const MovieCrew = ({ director, writer, actors }: Props) => {
  const directorList = director.split(",");
  const writerList = writer.split(",");
  const actorList = actors.split(",");

  return (
    <section className={styles.movie_crew_container}>
      <DirectorBox directorList={directorList} />
      <WriterBox writerList={writerList} />
      <ActorBox actorList={actorList} />
    </section>
  );
};

export default MovieCrew;
