// Transition
export function transition(timing = 0.3, type, off = false) {
  return off
    ? `
    -webkit-transition: "none";
    -moz-transition:'none';
    -ms-transition:'none';
    -o-transition:'none';
    transition:'none';
`
    : `
      -webkit-transition: all ${timing}s ${
        type ? type : "cubic-bezier(0.215, 0.61, 0.355, 1)"
      };
      -moz-transition: all ${timing}s ${
        type ? type : "cubic-bezier(0.215, 0.61, 0.355, 1)"
      };
      -ms-transition: all ${timing}s ${
        type ? type : "cubic-bezier(0.215, 0.61, 0.355, 1)"
      };
      -o-transition: all ${timing}s ${
        type ? type : "cubic-bezier(0.215, 0.61, 0.355, 1)"
      };
      transition: all ${timing}s ${
        type ? type : "cubic-bezier(0.215, 0.61, 0.355, 1)"
      };
  `;
}

// Border Radius
export function borderRadius(radius = 0) {
  return `
      -webkit-border-radius: ${radius};
      -moz-border-radius: ${radius};
      -ms-transition: ${radius};
      -o-border-radius: ${radius};
      border-radius: ${radius};
  `;
}

// Box Shadow
export function boxShadow(shadow = "none") {
  return `
      -webkit-box-shadow: ${shadow};
      -moz-box-shadow: ${shadow};
      box-shadow: ${shadow};
  `;
}
