import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest) {
    try {
        const page = parseInt(req.nextUrl.searchParams.get('page') || '1', 10);
        const pageSize = page === 1 ? 35 : 25;
        const skip = page === 1 ? 0 : 35 + (page - 2) * 25;

        const players = await prisma.player.findMany({
            skip,
            take: pageSize,
            orderBy: { name: 'asc' },
        });

        return NextResponse.json(players);
    } catch (err) {
        console.error('API error:', err);
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
}
