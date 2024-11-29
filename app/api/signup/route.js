import { NextResponse } from "next/server";
import mysql from "mysql";

// Database connection configuration
const dbConfig = {
    host: "localhost",
    user: "root",
    password: "localpassword",
    database: "makanlah",
};

// Create a reusable connection pool
const pool = mysql.createPool(dbConfig);

export async function POST(request) {
    return new Promise((resolve) => {
        // Parse JSON body from the request
        request
            .json()
            .then((body) => {
                const { role, email, names, password } = body;

                console.log("Received data:", { role, email, names, password });

                // SQL query with placeholders for security
                let sql ="";
                switch(role){
                    case 0:
                        sql = "INSERT INTO customers (name, email, password) VALUES (?, ?, ?)";
                        break;

                    case 1:
                        sql = "INSERT INTO riders (name, email, password) VALUES (?, ?, ?)";
                        break;

                    case 2:
                        sql = "INSERT INTO merchants (name, email, password) VALUES (?, ?, ?)";
                        break;

                    default:
                        return res.status(400).json({ message: "Invalid role" });
                }
                // const sql = `INSERT INTO customers (name, email, password) VALUES (?, ?, ?)`;
                const values = [names, email, password];

                // Execute the query
                pool.query(sql, values, (err, result) => {
                    if (err) {
                        console.error("Database error:", err);
                        return resolve(
                            NextResponse.json({ message: "Failed to insert data", error: err.message }, { status: 500 })
                        );
                    }

                    console.log("1 record inserted, ID:", result.insertId);

                    // Respond with a success message
                    resolve(
                        NextResponse.json({
                            message: "Data inserted successfully",
                            result: { insertId: result.insertId },
                        }
                        )
                    );
                });
            }
            )
            .catch((err) => {
                console.error("Request error:", err);
                resolve(
                    NextResponse.json({ message: "Invalid request body", error: err.message }, { status: 400 })
                );
            });
    });
}