import { NextFunction, Request, Response } from 'express';
export default function errorsMiddleware(err: Error, request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=errors.d.ts.map