import { checkUser } from "../other/checkUser";

export const logOut = (noUser: HTMLElement[], user: HTMLElement[]): void => {
  localStorage.removeItem("userPK");
  checkUser(noUser,user);
};
