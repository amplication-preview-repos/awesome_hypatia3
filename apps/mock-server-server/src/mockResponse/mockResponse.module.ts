import { Module } from "@nestjs/common";
import { MockResponseModuleBase } from "./base/mockResponse.module.base";
import { MockResponseService } from "./mockResponse.service";
import { MockResponseController } from "./mockResponse.controller";
import { MockResponseResolver } from "./mockResponse.resolver";

@Module({
  imports: [MockResponseModuleBase],
  controllers: [MockResponseController],
  providers: [MockResponseService, MockResponseResolver],
  exports: [MockResponseService],
})
export class MockResponseModule {}
