import * as graphql from "@nestjs/graphql";
import { MockResponseResolverBase } from "./base/mockResponse.resolver.base";
import { MockResponse } from "./base/MockResponse";
import { MockResponseService } from "./mockResponse.service";

@graphql.Resolver(() => MockResponse)
export class MockResponseResolver extends MockResponseResolverBase {
  constructor(protected readonly service: MockResponseService) {
    super(service);
  }
}
