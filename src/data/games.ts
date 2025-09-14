import { Game } from "@/types/game";
import { SnakeGame } from "@/games/SnakeGame";
import { TetrisGame } from "@/games/TetrisGame";
import { MemoryGame } from "@/games/MemoryGame";
import { TicTacToe } from "@/games/TicTacToe";

export const games: Game[] = [
  {
    id: 'snake',
    title: 'Snake',
    description: 'Classic snake game - eat food and grow longer without hitting walls!',
    category: 'Action',
    rating: 4.8,
    backgroundColor: '#00E5FF',
    component: SnakeGame,
    featured: true
  },
  {
    id: 'tetris',
    title: 'Tetris',
    description: 'Drop blocks to create complete lines in this legendary puzzle game',
    category: 'Puzzle',
    rating: 4.9,
    backgroundColor: '#FFD600',
    component: TetrisGame,
    featured: true
  },
  {
    id: 'memory',
    title: 'Memory Cards',
    description: 'Test your memory by matching pairs of colorful cards',
    category: 'Puzzle',
    rating: 4.6,
    backgroundColor: '#9C27B0',
    component: MemoryGame
  },
  {
    id: 'tictactoe',
    title: 'Tic Tac Toe',
    description: 'Classic X and O game - play against friends or challenge the AI',
    category: 'Puzzle',
    rating: 4.5,
    backgroundColor: '#FF5722',
    component: TicTacToe
  },
  {
    id: 'racing',
    title: 'Speed Racer',
    description: 'Race through challenging tracks at top speed!',
    category: 'Racing',
    rating: 4.7,
    backgroundColor: '#4CAF50',
    component: SnakeGame // Placeholder - could be a racing game
  },
  {
    id: 'adventure',
    title: 'Quest Master',
    description: 'Embark on an epic adventure filled with mysteries',
    category: 'Adventure',
    rating: 4.8,
    backgroundColor: '#2196F3',
    component: MemoryGame // Placeholder - could be an adventure game
  },
  {
    id: 'puzzle1',
    title: 'Block Slider',
    description: 'Slide blocks to solve challenging puzzles',
    category: 'Puzzle',
    rating: 4.4,
    backgroundColor: '#FF9800',
    component: TetrisGame // Reusing tetris as placeholder
  },
  {
    id: 'action1',
    title: 'Space Shooter',
    description: 'Defend Earth from alien invasion in this action-packed shooter',
    category: 'Action',
    rating: 4.7,
    backgroundColor: '#E91E63',
    component: SnakeGame // Reusing snake as placeholder
  },
  {
    id: 'puzzle2',
    title: 'Word Master',
    description: 'Find hidden words in this challenging word puzzle',
    category: 'Puzzle',
    rating: 4.5,
    backgroundColor: '#8BC34A',
    component: MemoryGame // Reusing memory as placeholder
  },
  {
    id: 'racing2',
    title: 'Drift King',
    description: 'Master the art of drifting in high-speed races',
    category: 'Racing',
    rating: 4.6,
    backgroundColor: '#607D8B',
    component: TicTacToe // Reusing as placeholder
  },
  {
    id: 'action2',
    title: 'Ninja Runner',
    description: 'Run, jump, and fight as a legendary ninja warrior',
    category: 'Action',
    rating: 4.8,
    backgroundColor: '#795548',
    component: SnakeGame // Reusing snake as placeholder
  },
  {
    id: 'puzzle3',
    title: 'Crystal Quest',
    description: 'Match magical crystals to unlock ancient powers',
    category: 'Puzzle',
    rating: 4.7,
    backgroundColor: '#3F51B5',
    component: MemoryGame // Reusing memory as placeholder
  },
  {
    id: 'adventure2',
    title: 'Pirate Tales',
    description: 'Sail the seven seas in search of legendary treasure',
    category: 'Adventure',
    rating: 4.9,
    backgroundColor: '#FF6F00',
    component: TetrisGame // Reusing as placeholder
  },
  {
    id: 'racing3',
    title: 'Moto GP',
    description: 'Experience the thrill of motorcycle racing at 200mph',
    category: 'Racing',
    rating: 4.6,
    backgroundColor: '#D32F2F',
    component: SnakeGame // Reusing snake as placeholder
  },
  {
    id: 'puzzle4',
    title: 'Brain Trainer',
    description: 'Exercise your mind with challenging logic puzzles',
    category: 'Puzzle',
    rating: 4.5,
    backgroundColor: '#388E3C',
    component: TicTacToe // Reusing as placeholder
  }
];