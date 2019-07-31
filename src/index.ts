import axios from "axios";

export default async function getUserIdByToken(AccessToken: string): Promise<string> {
  try {
    let result = await axios.post("http://localhost/auth/check-access-token", {
      AccessToken
    });
    var userId: string = result.data.user.id;
    if (!userId || typeof userId !== "string") {
      throw new Error(`userId invalid`);
    }
  } catch (e) {
    return "";
  }
  return userId;
}
