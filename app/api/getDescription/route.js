import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET() {
    try {
        const descriptionPath = path.join(
            process.cwd(),
            "public",
            "description.txt"
        );
        const description = await fs.readFile(descriptionPath, "utf8");
        return NextResponse.json({ description: description.trim() });
    } catch (error) {
        console.error("Error reading description file:", error);
        return NextResponse.json(
            { error: "Failed to read description" },
            { status: 500 }
        );
    }
}
