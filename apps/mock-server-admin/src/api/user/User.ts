import { MockResponse } from "../mockResponse/MockResponse";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  mockResponses?: Array<MockResponse>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
