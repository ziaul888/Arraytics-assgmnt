import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
	try {
		const filePath = path.join(process.cwd(), 'libs', 'plansData.json');
		console.log('Reading JSON file from:', filePath);  // Debug line
		const jsonData = await fs.readFile(filePath, 'utf8');
		const plansData = JSON.parse(jsonData);
		
		return NextResponse.json(plansData);
	} catch (error) {
		console.error('Error reading JSON file:', error);
		return NextResponse.json({ error: 'Failed to read data' }, { status: 500 });
	}
}
