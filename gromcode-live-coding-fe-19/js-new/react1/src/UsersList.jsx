//1. Create project
//2. make static layout
//3. divide into components
//4. static react version
//5. declare state (what, where) and props
//6. write logic

// как работать с ошибками
// ~ понять точку входа кода -> цепочку вызова
// ~ дебажить каждый шаг цепочки
// ~ локализовать проблему
// ~  FIX

import React from 'react';
import Pagination from './Pagination.jsx';
import User from './User.jsx';

//state
//currentPage

class UsersList extends React.Component {
  state = {
    currentPage: 5,
  };
  itemsPerPage = 3;

  prevButtonHandler = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  };

  nextButtonHandler = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };

  render() {
    const users = this.props.users;

    const startIndex = (this.state.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    const usersToRender = users.slice(startIndex, endIndex);

    return (
      <div>
        <Pagination
          currentPage={this.state.currentPage}
          goPrev={this.prevButtonHandler}
          goNext={this.nextButtonHandler}
          itemsPerPage={this.state.itemsPerPage}
          totalItems={users.length}
        />

        <ul className="users">
          {usersToRender.map(user => (
            <User key={user.id} name={user.name} age={user.age} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
