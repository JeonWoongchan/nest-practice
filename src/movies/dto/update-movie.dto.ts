import { IsInt, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateMovieDto {
  @ApiProperty({
    example: 'superman', // 예시 데이터
    description: '영화 제목', // 설명
  })
  @IsString()
  title: string;

  @ApiProperty({
    example: '2024',
    description: '개봉 일자',
    type: 'number', // 데이터 타입 (기본값은 string)
  })
  @IsInt()
  year: number;

  @ApiProperty({
    example: ['action'],
    description: '장르',
    type: 'string[]', // 데이터 타입 (기본값은 string)
  })
  @IsString({ each: true })
  genres: string[];
}
