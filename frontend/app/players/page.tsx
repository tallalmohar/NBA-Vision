'use client';
import { useEffect, useState } from 'react';

type Player = {
    id: number;
    name: string;
    team: string;
    position: string;
    age: number;
    headshot_url?: string;
    total_points: number;
    total_rebounds: number;
    total_assists: number;
    total_steals: number;
    total_blocks: number;
    total_turnovers: number;
};

export default function PlayerTable() {
    const [players, setPlayers] = useState<Player[]>([]);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');
    const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([]);

    const handleSelect = (player: Player) => {
        setSelectedPlayers((prev) => {
            const alreadySelected = prev.find(p => p.id === player.id);
            if (alreadySelected) {
                return prev.filter(p => p.id !== player.id);
            } else if (prev.length < 10) {
                return [...prev, player];
            } else {
                alert("You can only select up to 10 players.");
                return prev;
            }
        });
    };

    const isSelected = (id: number) => selectedPlayers.some(p => p.id === id);

    const getPlayerScore = (player: Player): number => {
        const weights = {
            pts: 0.25,
            ast: 0.15,
            reb: 0.15,
            stl: 0.10,
            blk: 0.10,
            tov: -0.10,
        };

        const games = 82; // Assume full season

        const pts = player.total_points;
        const ast = player.total_assists;
        const reb = player.total_rebounds;
        const stl = player.total_steals ;
        const blk = player.total_blocks ;
        const tov = player.total_turnovers ;

        // Normalize and clamp individual values
        const score =
            (pts / 22) * weights.pts +
            (ast / 5) * weights.ast +
            (reb / 8) * weights.reb +
            (stl / 2) * weights.stl +
            (blk / 3) * weights.blk +
            (1 - Math.min(tov / 5, 1)) * weights.tov;

        return Math.max(0, Math.min(1, score));
    };

    const getTeamScore = (): number => {
        if (selectedPlayers.length === 0) return 0;
        const total = selectedPlayers.reduce((sum, p) => sum + getPlayerScore(p), 0);
        return total / selectedPlayers.length;
    };

    const getTeamGrade = (score: number): string => {
        if (score >= 0.85) return 'A';
        if (score >= 0.70) return 'B';
        if (score >= 0.55) return 'C';
        if (score >= 0.40) return 'D';
        return 'F';
    };

    const teamScore = getTeamScore();
    const teamGrade = getTeamGrade(teamScore);

    useEffect(() => {
        const url = query
            ? `/api/players?search=${query}`
            : `/api/players?page=${page}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setPlayers(data));
    }, [page, query]);

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Player Stats</h1>

            <div className="flex mb-4 gap-2">
                <form onSubmit={e => {
                    e.preventDefault();
                    setQuery(search);
                    setPage(1);
                }}>
                    <input
                        id="searchText"
                        type="text"
                        placeholder="Search by name..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className="border rounded p-2 w-64"
                    />
                    <button
                        onClick={() => {
                            setQuery(search);
                            setPage(1);
                        }}
                        className="px-4 py-2 ml-1 bg-blue-600 text-white rounded hover:bg-blue-800 hover:cursor-pointer"
                        id="searchBtn"
                    >
                        Search
                    </button>
                </form>
            </div>

            <div className="font-bold mb-2">
                <p>Selected Players: {selectedPlayers.length}/10</p>

                <div className="mt-4 text-2xl">
                    <h2 className="text-xl font-semibold">Team Rating</h2>
                    <p>Team Score: {teamScore.toFixed(2)}</p>
                    <p>Grade: <strong>{teamGrade}</strong></p>
                </div>
            </div>

            <table className="w-full text-sm border-collapse mt-4">
                <thead className="bg-gray-100 text-left">
                <tr>
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
                    <th className="w-[90px]">Choose 10</th>
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
                        <td className="p-2">
                            <button
                                onClick={() => handleSelect(player)}
                                className="px-4 py-2 bg-blue-600 h-[30px] text-white rounded flex items-center hover:bg-blue-800 hover:cursor-pointer"
                            >
                                {isSelected(player.id) ? 'Deselect' : 'Select'}
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {!query && (
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
            )}
        </div>
    );
}
