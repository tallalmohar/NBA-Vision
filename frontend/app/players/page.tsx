'use client';
import { useEffect, useState } from 'react';

type Player = {
    id: number;
    name: string;
    age: number;
    team: string;
    position: string;
    total_points: number;
    total_rebounds: number;
    total_assists: number;
    total_steals: number;
    total_blocks: number;
    total_turnovers: number;
    headshot_url?: string;
};

export default function PlayerTable() {
    const [players, setPlayers] = useState<Player[]>([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetch(`/api/players?page=${page}`)
            .then(res => res.json())
            .then(data => setPlayers(data))
            .catch(error => console.log(error));
    }, [page]);

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Player Stats</h1>

            <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                    <thead className="bg-gray-100">
                    <tr className="text-left">
                        <th className="p-2">Name</th>
                        <th className="p-2">Team</th>
                        <th className="p-2">Pos</th>
                        <th className="p-2">Age</th>
                        <th className="p-2">Pts</th>
                        <th className="p-2">Reb</th>
                        <th className="p-2">Ast</th>
                        <th className="p-2">Stl</th>
                        <th className="p-2">Blk</th>
                        <th className="p-2">TO</th>
                    </tr>
                    </thead>
                    <tbody>
                    {players.map(player => (
                        <tr key={player.id} className="border-t hover:bg-gray-50">
                            <td className="p-2">{player.name}</td>
                            <td className="p-2">{player.team}</td>
                            <td className="p-2">{player.position}</td>
                            <td className="p-2">{player.age}</td>
                            <td className="p-2">{player.total_points}</td>
                            <td className="p-2">{player.total_rebounds}</td>
                            <td className="p-2">{player.total_assists}</td>
                            <td className="p-2">{player.total_steals}</td>
                            <td className="p-2">{player.total_blocks}</td>
                            <td className="p-2">{player.total_turnovers}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-between items-center mt-6">
                <button
                    onClick={() => setPage(p => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded disabled:opacity-50"
                >
                    Previous
                </button>

                <span>Page {page}</span>

                <button
                    onClick={() => setPage(p => p + 1)}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
