import { MockResponseWhereInput } from "./MockResponseWhereInput";
import { MockResponseOrderByInput } from "./MockResponseOrderByInput";

export type MockResponseFindManyArgs = {
  where?: MockResponseWhereInput;
  orderBy?: Array<MockResponseOrderByInput>;
  skip?: number;
  take?: number;
};
