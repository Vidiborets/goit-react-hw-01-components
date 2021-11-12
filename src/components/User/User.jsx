import PropTypes from 'prop-types';
import noAvatar from '../../images/noavatar.svg';
import s from '../User/User.module.css';

const User = ({ avatar, name, tagName, location, stats, defaultProps }) => {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img
          src={avatar ?? defaultProps}
          alt="Аватар пользователя"
          className={s.avatar}
          width="150"
        />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tagName}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.itemList}>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{stats.followers}</span>
        </li>
        <li className={s.itemList}>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{stats.views}</span>
        </li>
        <li className={s.itemList}>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

User.defaultProps = {
  avatar: noAvatar,
};

User.protoTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tagName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.number.isRequired,
};

export default User;
