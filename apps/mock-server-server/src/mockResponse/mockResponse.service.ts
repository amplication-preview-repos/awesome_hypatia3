import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MockResponseServiceBase } from "./base/mockResponse.service.base";

@Injectable()
export class MockResponseService extends MockResponseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
