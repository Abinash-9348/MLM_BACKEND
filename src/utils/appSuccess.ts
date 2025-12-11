export class AppSuccess {
  public code: string;
  public message: string;
  public status: number;
  public data: any;

  constructor(
    code: string,
    message: string,
    status: number,
    data: any = null
  ) {
    this.code = code;
    this.message = message;
    this.status = status;
    this.data = data;
  }
}
