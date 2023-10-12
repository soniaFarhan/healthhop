const listItemStyle={
    color: "inherit",
    "&.active": { backgroundColor: "#7868A2", color: "#ffff",borderRadius:"10px",
    "& .myIconClass, & .MuiTypography-root": {
      color: "#ffff"
    } }
  }
  const buttonStyle={
  "&:hover": {
    color: "#dedede",
    "& .myIconClass, & .MuiTypography-root": {
      color: "#dedede"
    }
  }
  }

  export {listItemStyle,buttonStyle}