export class ExperienceGetDto {
  readonly jobTitle: string;
  readonly company: string;
  readonly companyIcon?: string;
  readonly location?: string;
  readonly from: Date;
  readonly to?: Date;
  readonly current: boolean;
  readonly description?: string;
}
