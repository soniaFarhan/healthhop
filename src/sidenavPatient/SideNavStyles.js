const listItemStyle={
    color: "inherit",
    "&.active": { backgroundColor: "#07A6A9", color: "#ffff",borderRadius:"10px",
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