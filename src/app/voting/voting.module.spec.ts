import { VotingModule } from './voting.module';

describe('VotingModule', () => {
  let votingModule: VotingModule;

  beforeEach(() => {
    votingModule = new VotingModule();
  });

  it('should create an instance', () => {
    expect(votingModule).toBeTruthy();
  });
});
