export class Poll {
  pollId: number;
  name: string;
  pollSince: string;
  category: string;
  personDescription: string;
  isVoteUp: boolean;
  isVoteDown: boolean;
  currentVotesUp: number;
  currentVotesDown: number;
  image: string;
  isVoted?: boolean;
}

export const POLLS: Poll[] = [
  {
    pollId: 1,
    name: 'Kaney West',
    pollSince: '1 month ago',
    category: 'entertainment',
    personDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed felis eu turpis pulvinar laoreet.',
    isVoteUp: false,
    isVoteDown: false,
    currentVotesUp: 15,
    currentVotesDown: 12,
    image: '/assets/KanyeWestV2.jpg'
  },
  {
    pollId: 2,
    name: 'Mark Zuckerberg',
    pollSince: '1 month ago',
    category: 'Business',
    personDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed felis eu turpis pulvinar laoreet.',
    isVoteUp: false,
    isVoteDown: false,
    currentVotesUp: 3,
    currentVotesDown: 8,
    image: '/assets/MarkV2.jpg'
  },
  {
    pollId: 3,
    name: 'Cristina Fernandez de Kirchner',
    pollSince: '1 month ago',
    category: 'Politics',
    personDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed felis eu turpis pulvinar laoreet.',
    isVoteUp: false,
    isVoteDown: false,
    currentVotesUp: 11,
    currentVotesDown: 12,
    image: '/assets/CristinaKirchnerV2.jpg'
  },
  {
    pollId: 4,
    name: 'Malala Yousafzai',
    pollSince: '1 month ago',
    category: 'Entertainment',
    personDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed felis eu turpis pulvinar laoreet.',
    isVoteUp: false,
    isVoteDown: false,
    currentVotesUp: 5,
    currentVotesDown: 5,
    image: '/assets/MalalaV2.jpg'
  }
];
