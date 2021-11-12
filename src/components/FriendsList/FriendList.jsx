import PropTypes from 'prop-types';
import FriendListItem from '../FriendsListItem/FriendsListItem';
import s from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <div className={s.container}>
    <ul className={s.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  </div>
);

FriendList.protoTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }),
  ).isRequired,
};

export default FriendList;
