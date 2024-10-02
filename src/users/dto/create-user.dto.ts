import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    default: 'test.email@example.com',
  })
  email: string;

  @ApiProperty({
    default: 'Example Example',
  })
  fullName: string;

  @ApiProperty({
    default: 'examplePassword123',
  })
  password: string;
}
