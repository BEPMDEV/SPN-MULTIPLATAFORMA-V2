import { AxiosError } from 'axios';

interface MyAxiosError<T = ErrorTypeValidation | ErrorTypeOther> extends AxiosError {
    response?: {
      data: T;
      status: number;
      statusText: string;
      headers: any;
      config: any;
      request?: any;
    };
}

export interface ErrorTypeValidation {
    typeError: 'validation';
    errors:    Errors;
}

type Errors = {
    [key: string]: string[];
};

export interface ErrorTypeOther {
    typeError: 'unexpected' | 'notFound'
    error: string
}
