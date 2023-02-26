import { type Request, type Response } from "express";
import { Friend } from "../../database/models/friend.js";
import { type FriendsStructure, type FriendStructure } from "../../types.js";
import { getFriends } from "./friendsControllers.js";

const mockTestFriend: FriendStructure = {
  name: "TestFriend",
  age: 19,
  country: "",
  id: 5,
};

const mockFriendsList: FriendsStructure = [
  mockTestFriend,
  {
    name: "AnotherTestFriend",
    age: 25,
    country: "",
    id: 6,
  },
];

beforeEach(() => jest.restoreAllMocks());

describe("Given a getFriends controller", () => {
  describe("Whenb it recieves a response", () => {
    test("Then it should call its status method with 200", async () => {
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockResolvedValue(mockFriendsList),
      } as Partial<Response>;
      const req = {} as Request;
      const next = jest.fn();
      const expectedStatusCode = 200;

      Friend.find = jest.fn().mockImplementationOnce(() => ({
        exec: jest.fn().mockReturnValue(mockFriendsList),
      }));

      await getFriends(req, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });
  });
});
