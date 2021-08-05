import React from "react";
import { Link } from "react-router-dom";
import Title from "../Title/Title";
import SubTitle from "../SubTitle/SubTitle";
import ReactSelect from "../ReactSelect/ReactSelect";

import classes from "./Section.module.scss";

const Section = ({
  style,
  route,
  title,
  subTitle,
  showMore,
  children,
  className,
  buttonTitle,
  selectOptions,
  onClickHandler,
  renderBeforeList,
  selectPlaceholder,
}) => {
  const btnTitle = showMore ? "Show More" : buttonTitle;

  return (
    <section style={style} className={`${classes.section} ${className}`}>
      <div className={classes.sectionHeader}>
        <div>
          <Title>{title}</Title>
          <SubTitle>{subTitle}</SubTitle>
        </div>
        <div className={classes.actions}>
          {selectOptions && (
            <div
              className={classes.select__container}
              style={{ marginRight: !buttonTitle && "0" }}
            >
              <ReactSelect
                prefix="select__box"
                options={selectOptions}
                placeholder={selectPlaceholder}
              />
            </div>
          )}
          {buttonTitle && (
            <div className={classes.button_container}>
              <button className={classes.button}>
                {route ? <Link to={route}>{buttonTitle}</Link> : buttonTitle}
              </button>
            </div>
          )}
        </div>
      </div>
      {renderBeforeList && renderBeforeList()}
      <div className={classes.list__container}>{children}</div>
      {buttonTitle && (
        <div className={`${showMore ? classes.action : classes.hidde__action}`}>
          <button
            onClick={onClickHandler}
            className={`${showMore ? classes.show__more : classes.button}`}
          >
            {route ? <Link to={route}>{btnTitle}</Link> : btnTitle}
          </button>
        </div>
      )}
    </section>
  );
};

Section.defaultProps = {
  prefix: "select__box",
};

export default Section;
