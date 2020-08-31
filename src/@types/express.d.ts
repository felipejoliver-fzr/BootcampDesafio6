declare namespace Express {
  export interface Request {
    transaction: {
      id: string;
    };
  }
}
