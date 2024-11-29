import { NextResponse } from "next/server";
import mysql from "mysql";

const dbConfig = {
    host: "localhost",
    user: "root",
    password: "localpassword",
    database: "makanlah",
};

const pool = mysql.createPool(dbConfig);

export async function GET(request) {
    return new Promise((resolve) =>{
        const { email, password } = request.query.searchParams;

        var sql = "SELECT * FROM merchants WHERE email = ? AND password = ?";
        var values = [email, password];

        pool.query(sql, values, (err, result) => {
            if(err){
                console.error("Database error:", err);
                return resolve(
                    NextResponse.json({ message: "Failed to query data", error: err.message }, { status: 500 })
                );
            }
            resolve(
                NextResponse.json({
                    message: "Query successful",
                    result,
                })
            );
        });
    });
}