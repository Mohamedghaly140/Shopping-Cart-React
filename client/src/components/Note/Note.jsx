import React from "react";
import classes from "./Note.module.scss";

const Note = ({ title, description }) => {
  return (
    <div className={classes.note}>
      <h6 className={classes.noteTitle}>{title}</h6>
      <p className={classes.description}>{description}</p>
    </div>
  );
};

Note.defaultProps = {
  title: "If you have any notes please write it here:",
  description:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna",
};

export default Note;
