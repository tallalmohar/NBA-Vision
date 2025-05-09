import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest) {
    try {
        const page = parseInt(req.nextUrl.searchParams.get('page') || '1', 10);
        const search = req.nextUrl.searchParams.get('search')?.toLowerCase() || '';

        const pageSize = page === 1 ? 35 : 25;
        const skip = page === 1 ? 0 : 35 + (page - 2) * 25;

        const where = search
            ? {
                name: {
                    contains: search,
                    mode: 'insensitive',
                },
            }
            : undefined;

        const players = await prisma.player_stats.findMany({
            skip: search ? 0 : skip,
            take: search ? undefined : pageSize, where,
            orderBy: { name: 'asc' },
            select: {
                id: true,
                name: true,
                age: true,
                team: true,
                position: true,
                total_points: true,
                total_rebounds: true,
                total_assists: true,
                total_steals: true,
                total_blocks: true,
                total_turnovers: true,
                headshot_url: true,
            },
        });

        const round = (value: any) => Math.round((Number(value) / 82) * 10) / 10;

        const safePlayers = players.map(player => ({
            id: Number(player.id),
            name: player.name,
            age: Number(player.age),
            team: player.team,
            position: player.position,
            headshot_url: player.headshot_url,

            total_points: round(player.total_points),
            total_rebounds: round(player.total_rebounds),
            total_assists: round(player.total_assists),
            total_steals: round(player.total_steals),
            total_blocks: round(player.total_blocks),
            total_turnovers: round(player.total_turnovers),
        }));

        return NextResponse.json(safePlayers);
    } catch (error) {
        console.error('API error:', error);
        return NextResponse.json({ error: 'Failed to load player data' }, { status: 500 });
    }
}
