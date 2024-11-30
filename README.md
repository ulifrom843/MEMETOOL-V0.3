# MemeTool - Advanced Memecoin Trading Platform

A comprehensive platform for tracking and analyzing memecoins on the Solana blockchain.

## Features

- Real-time memecoin price tracking
- Social sentiment analysis
- Bundle checker integration with @TrenchScannerBot
- Portfolio management
- Trading signals
- Community features

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- A Telegram bot token for bundle checking

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/memetool.git
cd memetool
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Create a .env.local file:
\`\`\`bash
cp .env.example .env.local
\`\`\`

4. Add your Telegram bot token to .env.local:
\`\`\`
NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=your_bot_token_here
\`\`\`

5. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

### Building for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Project Structure

- `/app` - Next.js 13 app directory with page components
- `/components` - Reusable React components
- `/lib` - Utility functions and services
- `/hooks` - Custom React hooks
- `/types` - TypeScript type definitions
- `/public` - Static assets

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.