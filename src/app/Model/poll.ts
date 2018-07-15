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
  isVoted?: boolean;
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
    category: 'Politics',
    personDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed felis eu turpis pulvinar laoreet.',
    isVoteUp: false,
    isVoteDown: false,
    currentVotesUp: 7,
    currentVotesDown: 3,
    image: '/assets/MarkV2.jpg'
  },
  {
    name: 'Cristina Fernandez de Kirchner',
    pollSince: '1 month ago',
    category: 'Business',
    personDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed felis eu turpis pulvinar laoreet.',
    isVoteUp: false,
    isVoteDown: false,
    currentVotesUp: 20,
    currentVotesDown: 100,
    image: '/assets/CristinaKirchnerV2.jpg'
  },
  {
    name: 'Malala Yousafzai',
    pollSince: '1 month ago',
    category: 'Entertainment',
    personDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed felis eu turpis pulvinar laoreet.',
    isVoteUp: false,
    isVoteDown: false,
    currentVotesUp: 15,
    currentVotesDown: 2,
    image: '/assets/MalalaV2.jpg'
  }
];
