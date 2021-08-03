import React, { useRef, useImperativeHandle } from "react";
import PropTypes from "prop-types";
import classes from "./RowContainer.module.scss";

const RowContainer = React.forwardRef((props, ref) => {
  const { children, list, counts, columns } = props;

  const rowRef = useRef();

  const dataList = Math.ceil(list.slice(0, counts).length / columns);

  const slideLeftHandler = space => {
    rowRef.current.scrollBy({
      left: -space,
      behavior: "smooth",
    });
  };

  const slideRightHandler = space => {
    rowRef.current.scrollBy({
      left: +space,
      behavior: "smooth",
    });
  };

  useImperativeHandle(ref, () => {
    return {
      onSlideLeft: slideLeftHandler,
      onSlideRight: slideRightHandler,
    };
  });

  return (
    <div
      className={classes.row__container}
      ref={rowRef}
      style={{
        gridTemplateColumns: `repeat(${dataList},auto)`,
      }}
    >
      {children}
    </div>
  );
});

RowContainer.propTypes = {
  counts: PropTypes.number,
  columns: PropTypes.number,
  list: PropTypes.array.isRequired,
};

RowContainer.defaultProps = {
  columns: 1,
  counts: Infinity,
};

export default RowContainer;
