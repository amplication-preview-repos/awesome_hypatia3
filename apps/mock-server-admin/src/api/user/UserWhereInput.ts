import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MockResponseListRelationFilter } from "../mockResponse/MockResponseListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  mockResponses?: MockResponseListRelationFilter;
  username?: StringFilter;
};
