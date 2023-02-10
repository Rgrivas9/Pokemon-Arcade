import { getItem } from "../localStorage/getItem";

export const checkUser = (
  noUser: HTMLElement[],
  user: HTMLElement[]
): void => {
  if (getItem('userPK')) {
    noUser.forEach((element) => element.classList.add("hidden"));
    user.forEach((element) => element.classList.remove("hidden"));
  }else {
    noUser.forEach((element) => element.classList.remove("hidden"));
    user.forEach((element) => element.classList.add("hidden"));
  }
};
