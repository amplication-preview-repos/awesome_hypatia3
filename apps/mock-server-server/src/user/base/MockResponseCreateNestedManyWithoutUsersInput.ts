/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { MockResponseWhereUniqueInput } from "../../mockResponse/base/MockResponseWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class MockResponseCreateNestedManyWithoutUsersInput {
  @Field(() => [MockResponseWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MockResponseWhereUniqueInput],
  })
  connect?: Array<MockResponseWhereUniqueInput>;
}

export { MockResponseCreateNestedManyWithoutUsersInput as MockResponseCreateNestedManyWithoutUsersInput };
