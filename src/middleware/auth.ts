import { Request, Response, NextFunction } from "express";
import { decode, verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

const Auth = (request: Request, response: Response, next: NextFunction) => {
    const authHeader = request.headers.authorization;
    if (!authHeader) return response.json({ err: true, jwt: true });

    const [, token] = authHeader.split(" ");
    try {
        const { sub } = verify(token, "") as IPayload;
        request.userId = Number(sub);
        console.log(sub);

        return next();
    } catch (error) {
        return response.json({ err: true, jwt: true });
    }
};

export { Auth };
