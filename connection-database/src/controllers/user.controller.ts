import type { Context } from "hono";
// @ts-ignore
import * as userModel from "../models/user.model.ts";

type createUserBody = {
    firstName: string;
    lastName: string;
};
type updateUserBody = {
    firstName: string;
    lastName: string;
}
type user = {
    firstName: string;
    lastName: string;
}

const createUser = async (c: Context) => {
    try {
        const body = await c.req.json<createUserBody>();
        if (!body.firstName || !body.lastName)
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing required fields",
                },
                400
            );
        if (await userModel.isDuplicate(body.firstName, body.lastName)) {
            return c.json({
                success: false,
                data: null,
                msg: "firstName or lastName is duplicated",
            });
        }
        const newUser = await userModel.createUser(
            body.firstName,
            body.lastName
        );
        return c.json({
            success: true,
            data: newUser,
            msg: "Created new User!",
        });
    } catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
};
const updateUser = async (c: Context) => {
    try {
        const param = c.req.query("id");
        if (param === undefined || param === null) {
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing required fields",
                },
                400
            );
        }
        const Tbody = await c.req.json<updateUserBody>();
        if (!Tbody.firstName || !Tbody.lastName)
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing required fields",
                },
                400
            );
        if (await userModel.isDuplicate(Tbody.firstName, Tbody.lastName)) {
            return c.json({
                success: false,
                data: null,
                msg: "firstName or lastName is duplicated",
            });
        }
        const newUser = await userModel.updateUser(
            Number(param),
            Tbody.firstName,
            Tbody.lastName
        );
        return c.json({
            success: true,
            data: newUser,
            msg: "Created new User!",
        });
    } catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
};
const allUser = async (c: Context) => {
    try {
        const data = await userModel.getAllUser();
        return c.json(data, 200);
    }
        catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
};
export { createUser , updateUser  , allUser };