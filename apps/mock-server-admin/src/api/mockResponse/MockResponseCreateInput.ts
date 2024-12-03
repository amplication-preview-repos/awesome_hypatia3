import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MockResponseCreateInput = {
  apiPath?: string | null;
  description?: string | null;
  mockData?: InputJsonValue;
  name?: string | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
