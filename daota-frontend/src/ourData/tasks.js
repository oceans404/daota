const tasks = [
  {
    task: 'Tweet',
    description: 'Send a tweet with the hashtag #blu3dao!',
    creatorId: 2,
    assigneeId: 4,
    dao: 'Blu3 DAO',
    bounty: 1,
    complete: false,
  },
  {
    task: 'Hackathon',
    description: 'Attend and participate in the 2022 ETHAmsterdam hackathon',
    creatorId: 2,
    assigneeId: 5,
    dao: 'Blu3 DAO',
    bounty: 10,
    complete: false,
  },
  {
    task: 'Tech talk',
    description: 'Hold a tech talk for fellow DAO members',
    creatorId: 2,
    assigneeId: 4,
    dao: 'Blu3 DAO',
    bounty: 5,
    complete: false,
  },
  {
    task: 'Discord Recruitment',
    description: 'Recruit a friend to join the Blu3 DAO discord channel',
    creatorId: 2,
    assigneeId: 5,
    dao: 'Blu3 DAO',
    bounty: 2,
    complete: false,
  },
  {
    task: 'Create a discord bot for authentication',
    description:
      'Check whether a discord user holds a Blu3 DAO socail token and give them an OG role.',
    creatorId: 2,
    assigneeId: 5,
    dao: 'Blu3 DAO',
    bounty: 2,
    complete: false,
  },
  {
    task: 'Draft a Whitepaper for NFT drop',
    description: 'Send a tweet with the hashtag #blu3dao!',
    creatorId: 2,
    assigneeId: 4,
    dao: 'FWB',
    bounty: 1,
    complete: false,
  },
  {
    task: 'Create local LA telegram chat',
    description: 'Attend and participate in the 2022 ETHAmsterdam hackathon',
    creatorId: 2,
    assigneeId: 5,
    dao: 'FWB',
    bounty: 10,
    complete: false,
  },
  {
    task: 'Design FWB Hoodie',
    description: 'Hold a tech talk for fellow DAO members',
    creatorId: 2,
    assigneeId: 4,
    dao: 'FWB',
    bounty: 5,
    complete: false,
  },
  {
    task: 'Plan beach event',
    description: 'Recruit a friend to join the Blu3 DAO discord channel',
    creatorId: 2,
    assigneeId: 5,
    dao: 'FWB',
    bounty: 2,
    complete: false,
  },
  {
    task: 'Scout out picnic venue',
    description: 'Hold a tech talk for fellow DAO members',
    creatorId: 2,
    assigneeId: 4,
    dao: 'FWB',
    bounty: 5,
    complete: false,
  },
  {
    task: 'Find 2 sponsors for Coachella house',
    description: 'Recruit a friend to join the Blu3 DAO discord channel',
    creatorId: 2,
    assigneeId: 5,
    dao: 'FWB',
    bounty: 2,
    complete: false,
  },
]
  .sort(() => (Math.random() > 0.5 ? 1 : -1))
  .map((task, i) => (i > 4 ? { ...task, complete: true } : task));

export default tasks;
