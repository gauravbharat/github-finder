import React, { Component } from "react";
import PropTypes from "prop-types";
import { UserModel } from "../../models/users.model";

export class UserItem extends Component {
  static propTypes = {
    user: PropTypes.exact(UserModel).isRequired,
  };

  render() {
    // destructure state to directly use the prop names within
    const { avatar_url, login, html_url } = this.props.user;

    console.log({ props: this.props });

    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt={login}
          className="round-img"
          style={{ width: "60px" }}
        />

        <h3>{login}</h3>

        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1">
            More
          </a>
        </div>
      </div>
    );
  }
}
