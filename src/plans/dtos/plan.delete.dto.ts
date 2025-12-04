import { IsInt } from "class-validator";
import { Type } from "class-transformer";

export class DeletePlanDto {
  @IsInt()
  @Type(() => Number)
  id!: number;
}
