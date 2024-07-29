import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type MockResponse = {
  apiPath: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  mockData: JsonValue;
  name: string | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
