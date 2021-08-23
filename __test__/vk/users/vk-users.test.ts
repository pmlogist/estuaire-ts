import { IVKResponses } from "../../../src/interfaces/vk/responses";
import { vk } from "../../utils/estuaire";

import R = IVKResponses;

const users: R.UsersGetResponse = [
  {
    first_name: "Pavel",
    id: 1,
    last_name: "Durov",
    can_access_closed: true,
    is_closed: false,
  },
];

describe("VK API users.get ", () => {
  try {
    beforeEach(() => {
      console.log("For user ID:", users[0].id);
    });

    it("should return an array of users", () => {
      return vk.api.users
        .get({ user_ids: `${users[0].id}` })
        .then((res) => {
          expect(JSON.stringify(res)).toBe(JSON.stringify(users));
          console.log("User:", res);
        })
        .catch((err) => console.log(err));
    });
  } catch (err) {
    console.error("Exception: ", err);
  }
});
