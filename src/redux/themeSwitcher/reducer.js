import config, { getCurrentTheme } from "./config";
import actions from "./actions";

function selectedTheme(type) {
  return (
    JSON?.parse(localStorage.getItem(type))?.themeName ||
    config[type].defaultTheme
  );
}

const initState = {
  isActivated: false,
  changeThemes:
    getCurrentTheme("changeThemes", selectedTheme("changeThemes")) ||
    "themedefault",
  topbarTheme:
    getCurrentTheme("topbarTheme", selectedTheme("topbarTheme")) ||
    "themedefault",
  sidebarTheme:
    getCurrentTheme("sidebarTheme", selectedTheme("sidebarTheme")) ||
    "themedefault",
  layoutTheme:
    getCurrentTheme("layoutTheme", selectedTheme("layoutTheme")) ||
    "themedefault",
};

export default function (state = initState, action) {
  switch (action.type) {
    case actions.SWITCH_ACTIVATION:
      return {
        ...state,
        isActivated: !state.isActivated,
      };
    case actions.CHANGE_THEME: {
      localStorage.setItem(action.attribute, JSON.stringify(action.theme));
      return {
        ...state,
        [action.attribute]: action.theme,
      };
    }
    default:
      return state;
  }
}
