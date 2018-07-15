import { Injectable } from '@angular/core';
import { LocalStorageService } from '@app/core';
import { Poll, POLLS } from '@app/Model/poll';

@Injectable({
  providedIn: 'root'
})
export class OtherPoolsService {

  constructor(
    private localStorage: LocalStorageService
  ) { }

  getCurrentPools(): Poll[] {
    const currentPools = this.localStorage.getItem('currentPools');
    if (currentPools == null) {
      this.localStorage.setItem('currentPools', POLLS);
      return POLLS;
    } else {
      return currentPools;
    }
  }

  votePool(poll: Poll): Poll[] {
    const currentPools = this.localStorage.getItem('currentPools');
    for (let i = 0; i < currentPools.length; i++) {
      const currentPoll = currentPools[i];
      if (currentPoll.pollId === poll.pollId ) {
        if (poll.isVoteUp) {
          currentPoll.currentVotesUp += 1;
        }
        if (poll.isVoteDown) {
          currentPoll.currentVotesDown += 1;
        }
        currentPoll.isVoted = true;
      }
    }
    this.localStorage.setItem('currentPools', currentPools);
    return currentPools;
  }

}
