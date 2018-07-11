export class Poll {
  name: string;
  pollSince: string;
  category: string;
  personDescription: string;
  isVoteUp: boolean;
  isVoteDown: boolean;
  currentVotesUp: number;
  currentVotesDown: number;
  image: string;
}

export const POLLS: Poll[] = [
  {
    name: 'Kaney West',
    pollSince: '1 month ago',
    category: 'entertainment',
    personDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed felis eu turpis pulvinar laoreet.',
    isVoteUp: false,
    isVoteDown: false,
    currentVotesUp: 500,
    currentVotesDown: 420,
    image: '/assets/KanyeWestV2.jpg'
  },
  {
    name: 'Kaney West',
    pollSince: '1 month ago',
    category: 'entertainment',
    personDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed felis eu turpis pulvinar laoreet.',
    isVoteUp: false,
    isVoteDown: false,
    currentVotesUp: 500,
    currentVotesDown: 420,
    image: '/assets/MarkV2.jpg'
  },
  {
    name: 'Kaney West',
    pollSince: '1 month ago',
    category: 'entertainment',
    personDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed felis eu turpis pulvinar laoreet.',
    isVoteUp: false,
    isVoteDown: false,
    currentVotesUp: 500,
    currentVotesDown: 420,
    image: '/assets/CristinaKirchnerV2.jpg'
  },
  {
    name: 'Kaney West',
    pollSince: '1 month ago',
    category: 'entertainment',
    personDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed felis eu turpis pulvinar laoreet.',
    isVoteUp: false,
    isVoteDown: false,
    currentVotesUp: 500,
    currentVotesDown: 420,
    image: '/assets/MalalaV2.jpg'
  }
];
