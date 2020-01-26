var smartgrid = require("smart-grid");

/* It's principal settings in smart grid project */
const smartgridSettings = {
  outputStyle: "scss" /* less || scss || sass || styl */,
  columns: 12 /* number of grid columns */,
  offset: "30px" /* gutter width px || % || rem */,
  mobileFirst: false /* mobileFirst ? 'min-width' : 'max-width' */,
  container: {
    maxWidth: "1170px" /* max-width оn very large screen */,
    fields: "15px" /* side fields */
  },
  breakPoints: {
    lg: {
      width: "1100px" /* -> @media (max-width: 1100px) */
    },
    md: {
      width: "960px"
    },
    sm: {
      width: "780px"
    },
    xs: {
      width: "560px"
    }
  }
};

smartgrid("./src/styles", smartgridSettings);
