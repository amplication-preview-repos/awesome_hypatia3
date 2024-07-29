import { MockResponse as TMockResponse } from "../api/mockResponse/MockResponse";

export const MOCKRESPONSE_TITLE_FIELD = "name";

export const MockResponseTitle = (record: TMockResponse): string => {
  return record.name?.toString() || String(record.id);
};
