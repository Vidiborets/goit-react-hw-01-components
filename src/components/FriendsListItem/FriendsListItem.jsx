import PropTypes from 'prop-types';
import noAvatar from '../../images/noavatar.svg';
import s from './FriendsListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline, defaultProps }) => (
  <li className={s.item}>
    <span className={isOnline ? s.online : s.offline}></span>
    <img
      className={s.avatar}
      src={avatar ?? defaultProps}
      alt={name}
      width="48"
    />
    <p className={s.name}>{name}</p>
  </li>
);

FriendListItem.defaultProps = {
  avatar: noAvatar,
};

FriendListItem.protoTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
