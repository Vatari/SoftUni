import { getuserData } from "../util.js";
export function addSession(ctx, next) {
  ctx.user = getuserData();
  next();
}
