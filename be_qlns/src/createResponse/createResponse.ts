export class BaseResponseDTO<T> {
  statusCode: number;
  message: string;
  data: T | null;

  constructor(statusCode: number, message: string, data: T) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }
}

export function errorResponse(
  message: string,
  code = 400,
): BaseResponseDTO<null> {
  return new BaseResponseDTO(code, message, null);
}
