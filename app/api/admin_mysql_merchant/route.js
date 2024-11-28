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
                const { id, name, email, password, address, hours, number } = body;

                console.log("Received data:", { id, name, email, password, address, hours, number });

                // SQL query with placeholders for security
                const sql = `
                    INSERT INTO merchants 
                    (merchant_id, name, email, password, address, opening_hours, phone_number) 
                    VALUES (?, ?, ?, ?, ?, ?, ?)
                `;
                const values = [id, name, email, password, address, hours, number];

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
                        })
                    );
                });
            })
            .catch((err) => {
                console.error("Request error:", err);
                resolve(
                    NextResponse.json({ message: "Invalid request body", error: err.message }, { status: 400 })
                );
            });
    });
}