import z from 'zod'

export const generalSettingsSchema = z.object({
   dateformat : z.string(), 
  currencySymbol: z.string().min(1),
  timeZone: z.string().min(1),
  allowedFileTypes: z.array(z.string().min(1)), // e.g. ["jpg","png"]
  maxFileSizeMB: z.number().int().min(0),

  fileStorageMode: z.enum(["LOCAL", "S3"]),
  localFilePath: z.string().optional(),
  s3Bucket: z.string().optional(),
  s3Folder: z.string().optional(),

  maxPlanCreation: z.number().int().min(0),
  multiBinaryEnable: z.enum(["Y","N"]),

  memberIdGeneration: z.enum(["RANDOM","SEQUENCE"]),
  minDirectSponsorsForWithdrawal: z.number().int().min(0),
  minBVForWithdrawal: z.number().int().min(0),

  incomeGenerationMode: z.enum(["DAILY","WEEKLY","MONTHLY","YEARLY"]),
  dailyCycleStart: z.string().optional(),
  dailyCycleEnd: z.string().optional(),
  weeklyCycleStartDay: z.string().optional(),
  weeklyCycleStartTime: z.string().optional(),
})
