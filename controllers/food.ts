import { Request, Response, NextFunction, response } from "express";
import pool from "../databasePool";
export const testMe = (req: Request, res: Response) => {
    res.sendStatus(200);
};
export const getMyFood = async (req: Request, res: Response) => {
    try {
        const response = await pool.query(`SELECT * from food`);

        res.send(response.rows);
    } catch (error) {
        console.log("getMyFood", error);
        return res.sendStatus(500);
    }
};

export const insertMyFood = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const response = await pool.query(
            `insert into food(food_name) values('burger') RETURNING * `
        );
        res.send(response.rows);
    } catch (error) {
        next(error);
        console.log("insertMyFood", error);
        return res.sendStatus(494);
    }
};
