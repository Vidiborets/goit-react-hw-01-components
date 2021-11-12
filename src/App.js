import Section from './components/Section/Section.jsx';

import User from './components/User/User.jsx';
import user from '../src/data/user.json';

import Statistics from './components/Statistics/Statistics.jsx';
import data from '../src/data/data.json';

import FriendList from './components/FriendsList/FriendList.jsx';
import friends from '../src/data/friends.json';

import TransactionHistory from './components/Transaction/TransactionHistory.jsx';
import transactions from '../src/data/transaction.json';

export default function App() {
  return (
    <Section>
      <User
        avatar={user.avatar}
        name={user.name}
        tagName={user.tag}
        location={user.location}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </Section>
  );
}
