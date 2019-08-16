import React from 'react';
import PropTypes from 'prop-types';

const Chatlist = ({ users }) => (
  
  <aside className="names-list">
  {'chatfriends'}
    <ul className="message">
      {users.map(user => (
          <li key={user.id}>{user.from}</li>
        )
      )}
    </ul>
  </aside>
)

Chatlist.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default Chatlist;
