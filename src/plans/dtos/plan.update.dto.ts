import {
  IsOptional,
  IsNumber,
  IsString,
  IsBoolean,
  IsInt
} from "class-validator";
import { Type } from "class-transformer";

export class UpdatePlanDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  price?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  BV?: number;

  @IsOptional()
  description?: any;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsOptional()
  @IsString()
  tax?: string;

  @IsOptional()
  @IsString()
  config?: string;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  companyId?: number;
}
