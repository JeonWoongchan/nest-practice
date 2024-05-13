import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SelectMovieDto {
  @ApiProperty({
    example: 'superman', // 예시 데이터
    description: '영화 제목', // 설명
    required: true, // 필수 전송 데이터 설정 (true / false)
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    example: '2024',
    description: '개봉 일자',
    type: 'number', // 데이터 타입 (기본값은 string)
    required: true,
  })
  @IsNotEmpty()
  @IsInt()
  year: number;
}
