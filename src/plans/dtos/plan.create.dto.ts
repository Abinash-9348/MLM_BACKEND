import {
  IsOptional,
  IsNumber,
  IsString,
  IsBoolean,
  IsJSON,
  IsInt,
} from "class-validator";
import { Type } from "class-transformer";

export class CreatePlanDto {
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  companyId?: number;

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

  @IsJSON()
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
}
