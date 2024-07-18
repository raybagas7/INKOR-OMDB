import React from "react";

const SearchPage = ({ params }: { params: { id: string } }) => {
  console.log(params);

  return <div>{params.id}</div>;
};

export default SearchPage;
