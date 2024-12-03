import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MockResponseService } from "./mockResponse.service";
import { MockResponseControllerBase } from "./base/mockResponse.controller.base";

@swagger.ApiTags("mockResponses")
@common.Controller("mockResponses")
export class MockResponseController extends MockResponseControllerBase {
  constructor(protected readonly service: MockResponseService) {
    super(service);
  }
}
