import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Title from "../Title/Title";
import SubTitle from "../SubTitle/SubTitle";
import SelectBox from "../SelectBox/SelectBox";

import classes from "./Section.module.scss";

const Section = props => {
  const title = props.showMore ? "Show More" : props.buttonTitle;

  return (
    <section className={`${classes.section} ${props.className}`}>
      <div className={classes.sectionHeader}>
        <div>
          <Title>{props.title}</Title>
          <SubTitle>{props.subTitle}</SubTitle>
        </div>
        <div className={classes.actions}>
          {props.selectOptions && (
            <div
              className={classes.select__container}
              style={{ marginRight: !props.buttonTitle && "0" }}
            >
              <SelectBox
                options={props.selectOptions}
                placeholder={props.selectPlaceholder}
              />
            </div>
          )}
          {props.buttonTitle && (
            <div className={classes.button_container}>
              <button className={classes.button}>
                {props.route ? (
                  <Link to={props.route}>{props.buttonTitle}</Link>
                ) : (
                  props.buttonTitle
                )}
              </button>
            </div>
          )}
        </div>
      </div>
      <Fragment>{props.children}</Fragment>
      {props.buttonTitle && (
        <div
          className={`${
            props.showMore ? classes.action : classes.hidde__action
          }`}
        >
          <button
            onClick={props.onClickHandler}
            className={`${
              props.showMore ? classes.show__more : classes.button
            }`}
          >
            {props.route ? <Link to={props.route}>{title}</Link> : title}
          </button>
        </div>
      )}
    </section>
  );
};

export default Section;
