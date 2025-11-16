import type { IService } from "./serviceType";

export interface IResponse {
  status: number;
  message: string;
  data?: IService[];
}
