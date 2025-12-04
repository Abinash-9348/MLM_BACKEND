import { Request, Response } from "express";
import { PlanService } from "../services/plan.service";
import { CreatePlanDto } from "../dtos/plan.create.dto";
import { UpdatePlanDto } from "../dtos/plan.update.dto";
import { AppSuccess } from "../../utils/appSuccess";
import { AppError } from "../../utils/appError";
import {
  ERROR_CODES,
  ERROR_MESSAGES,
  HTTP_STATUS,
  SUCCESS_CODES,
  SUCCESS_MESSAGES,
} from "../../utils/errors";
export class PlanController {
  public service: PlanService;

  constructor() {
    this.service = new PlanService();
  }

  async create(req: Request, res: Response) {
    try {
      const dto: CreatePlanDto = req.body;

      const result = await this.service.create(dto);
      const response = new AppSuccess(
        SUCCESS_CODES.COMPANY_CREATED,
        SUCCESS_MESSAGES.COMPANY_CREATED,
        HTTP_STATUS.CREATED,
        result
      );

      return res.status(response.status).json(response);
    } catch (error: any) {
      const err = new AppError(
        error.code || ERROR_CODES.INTERNAL_ERROR,
        error.message || ERROR_MESSAGES.INTERNAL_ERROR,
        error.status || HTTP_STATUS.INTERNAL_ERROR
      );

      return res.status(err.status).json(err);
    }
  }

  async getAll(_req: Request, res: Response) {
    try {
      const result = await this.service.getAll();
      const response = new AppSuccess(
        SUCCESS_CODES.PLANS_FETCHED,
        SUCCESS_MESSAGES.PLANS_FETCHED,
        HTTP_STATUS.OK,
        result
      );
      return res.status(response.status).json(response);
    } catch (error: any) {
      const err = new AppError(
        error.code || ERROR_CODES.INTERNAL_ERROR,
        error.message || ERROR_MESSAGES.INTERNAL_ERROR,
        error.status || HTTP_STATUS.INTERNAL_ERROR
      );

      return res.status(err.status).json(err);
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);

      const result = await this.service.getOne(id);
      const response = new AppSuccess(
        SUCCESS_CODES.PLAN_FETCHED,
        SUCCESS_MESSAGES.PLAN_FETCHED,
        HTTP_STATUS.OK,
        result
      );

      return res.status(response.status).json(response);
    } catch (error: any) {
      const err = new AppError(
        error.code || ERROR_CODES.INTERNAL_ERROR,
        error.message || ERROR_MESSAGES.INTERNAL_ERROR,
        error.status || HTTP_STATUS.INTERNAL_ERROR
      );

      return res.status(err.status).json(err);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const dto: UpdatePlanDto = req.body;

      const result = await this.service.update(id, dto);
      const response = new AppSuccess(
        SUCCESS_CODES.PLAN_UPDATED,
        SUCCESS_MESSAGES.PLAN_UPDATED,
        HTTP_STATUS.OK,
        result
      );

      return res.status(response.status).json(response);
    } catch (error: any) {
      const err = new AppError(
        error.code || ERROR_CODES.INTERNAL_ERROR,
        error.message || ERROR_MESSAGES.INTERNAL_ERROR,
        error.status || HTTP_STATUS.INTERNAL_ERROR
      );

      return res.status(err.status).json(err);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);

      await this.service.delete(id);
      const response = new AppSuccess(
        SUCCESS_CODES.PLAN_DELETED,
        SUCCESS_MESSAGES.PLAN_DELETED,
        HTTP_STATUS.OK,
        null
      );

      return res.status(response.status).json(response);
    } catch (error: any) {
      const err = new AppError(
        error.code || ERROR_CODES.INTERNAL_ERROR,
        error.message || ERROR_MESSAGES.INTERNAL_ERROR,
        error.status || HTTP_STATUS.INTERNAL_ERROR
      );

      return res.status(err.status).json(err);
    }
  }
}
