type ServiceResponseErrorType = 'INVALID_DATA' | 'UNAUTHORIZED' | 'NOT_FOUND';

export type ServiceResponseError = {
  status: ServiceResponseErrorType,
  data: { message: string }
};

export type ServiceResponseSuccess<T> = {
  status: string,
  data: T | object
};

export type ServiceResponse<T> = ServiceResponseError | ServiceResponseSuccess<T>;
