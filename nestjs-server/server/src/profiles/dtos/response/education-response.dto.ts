export class EducationResponseDto {
  readonly school: string;
  readonly degree: string;
  readonly fieldOfStudy: string;
  readonly from: Date;
  readonly to?: Date;
  readonly current: boolean;
  readonly description?: string;
}
