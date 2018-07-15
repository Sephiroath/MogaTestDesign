import { Component, OnInit } from '@angular/core';
import { Poll, POLLS } from '@app/Model/poll';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OtherPoolsService } from './other-pools.service';

@Component({
  selector: 'app-other-pools',
  templateUrl: './other-pools.component.html',
  styleUrls: ['./other-pools.component.scss']
})
export class OtherPoolsComponent implements OnInit {
  polls: Poll[];
  constructor(public snackBar: MatSnackBar, public readonly otherPoolsService: OtherPoolsService) { }

  ngOnInit() {
    this.getCurrentPolls();
  }

  getCurrentPolls() {
    this.polls = this.otherPoolsService.getCurrentPools();
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
    if (!poll.isVoteUp && !poll.isVoteDown) {
      this.showNotification('Please select a Vote');
      return;
    }
    this.showNotification('Your vote was Registered');
    this.polls = this.otherPoolsService.votePool(poll);
  }
  voteAgain(poll: Poll) {
    poll.isVoted = false;
    poll.isVoteUp = false;
    poll.isVoteDown = false;
  }
  private showNotification(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000
    });
  }
}
