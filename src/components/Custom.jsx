import React from 'react';

export const Container = (props) => {
  return (
    <div className="container" {...props}>
      {props.children}
    </div>
  )
}

export const Row = (props) => {
  return (
    <div className="form-row" {...props}>
      {props.children}
    </div>
  )
}

export const Column = (props) => {
  return (
    <div className={`col-${props.xs} col-sm-${props.sm || 12} col-md-${props.md || 12} col-lg-${props.lg || 12} col-xl-${props.xl || 12}`} {...props}>
      {props.children}
    </div>
  )
}