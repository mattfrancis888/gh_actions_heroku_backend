import { Request, Response, NextFunction, response } from "express";
export const testMe = (req: Request, res: Response) => {
    res.sendStatus(200);
};
export const getMyFood = async (req: Request, res: Response) => {
    // try {
    //     const response = await pool.query(`SELECT * from creation`);

    //     res.send({ result: response.rows });
    // } catch (error) {
    //     console.log(error);
    //     return res.sendStatus(INTERNAL_SERVER_ERROR_STATUS);
    // }
    res.send(200);
};

export const insertMyFood = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // try {
    //     await pool.query("BEGIN");
    //     const response = await pool.query(
    //         `insert into test(test1) values('test1')`
    //     );
    //     next();
    // } catch (error) {
    //     next(error);
    //     console.log(error);
    //     return res.sendStatus(INTERNAL_SERVER_ERROR_STATUS);
    // }
    res.send(200);
};
