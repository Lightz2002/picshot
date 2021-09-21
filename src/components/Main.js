import Form from "./Form";
import PhotoGrid from "./PhotoGrid";
import Tags from "./Tags";
import React, { useState } from "react";

function Main() {
  const [search, setSearch] = useState("");
  const [tag, setTag] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTag(search);
  };

  const handleChange = (e) => {
    setSearch(e.currentTarget.value);
  };

  return (
    <div className="app__main">
      <Form
        search={search}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <Tags />
      <PhotoGrid tag={tag} />
    </div>
  );
}

export default Main;
