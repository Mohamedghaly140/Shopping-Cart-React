import React, { Fragment } from "react";
import classes from "./DetailItem.module.scss";

const DetailItem = ({ title, line, children, noMargin }) => {
  return (
    <Fragment>
      <div className={classes.detailItem} style={{ margin: noMargin && 0 }}>
        {title && <h4 className={classes.title}>{title}</h4>}
        {children}
      </div>
      {line && <hr style={{ border: "0.5px solid #D9D9D9" }} />}
    </Fragment>
  );
};

export default DetailItem;
