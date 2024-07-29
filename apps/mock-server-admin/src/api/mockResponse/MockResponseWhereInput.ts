import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MockResponseWhereInput = {
  apiPath?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  mockData?: JsonFilter;
  name?: StringNullableFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
