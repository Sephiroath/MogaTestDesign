import { Component, OnInit } from '@angular/core';
import { Poll, POLLS } from '@app/Model/poll';

@Component({
  selector: 'app-other-pools',
  templateUrl: './other-pools.component.html',
  styleUrls: ['./other-pools.component.scss']
})
export class OtherPoolsComponent implements OnInit {
  polls: Poll[];
  constructor() { }

  ngOnInit() {
    this.getCurrentPolls();
  }

  getCurrentPolls() {
    this.polls = POLLS;
  }
  getCurrentVotesPercentage(totalVotes: number, votes: number) {
    if (totalVotes === 0 && votes === 0) {
      return 50;
    }
    return (100 * votes) / totalVotes;
  }
  setCurrentVote(poll: Poll, vote: boolean) {
    poll.isVoteUp = vote;
    poll.isVoteDown = !vote;
  }
  sendVote(poll: Poll) {
    poll.isVoted = true;
  }
  voteAgain(poll: Poll) {
    poll.isVoted = false;
    poll.isVoteUp = false;
    poll.isVoteDown = false;
  }
}
