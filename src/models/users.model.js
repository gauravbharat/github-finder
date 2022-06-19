import PropTypes from "prop-types";

export const UserModel = Object.freeze({
  login: PropTypes.string,
  id: PropTypes.number,
  node_id: PropTypes.string,
  avatar_url: PropTypes.string,
  gravatar_id: PropTypes.string,
  url: PropTypes.string,
  html_url: PropTypes.string,
  followers_url: PropTypes.string,
  following_url: PropTypes.string,
  gists_url: PropTypes.string,
  starred_url: PropTypes.string,
  subscriptions_url: PropTypes.string,
  organizations_url: PropTypes.string,
  repos_url: PropTypes.string,
  events_url: PropTypes.string,
  received_events_url: PropTypes.string,
  type: PropTypes.string,
  site_admin: PropTypes.bool,
});
