# Daora

## About the product

Doara is a project management and DAO analytics tracker. Think of it as a decentralized, multi-tenancy Jira board where you can track your tasks across DAOs. 

### DAO Task Management
- Create a new task. Anyone who holds a DAOs token can create a new task and propose a bounty.
- Own a task. If a task is not complete or in progress, you can assign yourself ownership.
- Complete a task. After task completion, other DAO members can upvote the submitted proof of completion.

### DAO Analytics

- Decentralization score: DAOs have many members, but how many are actually contributing by completing tasks? The decentralization score is a measure of participation across members who hold a DAOs social token.
- Monitor your over time: DAOs are started by a small group of people, but ideally will become more decentralized as more community members onboard and take on leadership and ownership.

## Tech used

### Frontend
 - React, react-router, Tailwind CSS, 
 - [WalletConnect](https://walletconnect.com/) for wallet agnostic connection to any chain
 - Orbit DB (IPFS) calls

### Backend
- [Orbit DB](https://orbitdb.org/) as a serverless, distributed, peer-to-peer database. OrbitDB uses [IPFS](https://ipfs.io/) as its data storage and [IPFS Pubsub](https://github.com/ipfs/go-ipfs/blob/master/core/commands/pubsub.go#L23) to automatically sync databases with peers.
- We created 3 Orbit DB databases
  - DAOs endpoint: /orbitdb/zdpuAtA8fqqzzfgj6bum6daArBSum1hZdg99eY3p4Dh992Xjt/daota-daos 
  - Users endpoint: /orbitdb/zdpuAtcATibSxJdQRFvfb8udKqiRECQLmJfgTgo4spLQMrcFw/daota-users
  - Tasks endpoint: /orbitdb/zdpuB2ALKMKkhTJzVwAQ7rQeVkxnBYBP9Zs2J4GD2aYMdbjCX/daota-tasks

### Data
- [Dune](https://dune.com/) to determine DAO member count (number of wallets holding the social token).

## The team
Christina, Mabel, Shantelle, Steph, and Sunny 
![2022-04-24 04 08 24](https://user-images.githubusercontent.com/91382964/164952917-c659b2a0-96bd-427a-b89c-45a3db13bb8e.jpg)
