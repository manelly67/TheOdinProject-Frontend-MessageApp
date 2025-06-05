const base = "https://top-backend-messagesapp.onrender.com";

const urlAddresses = {
  home: `${base}`,
  sign_up: `${base}/sign_up`,
  login: `${base}/login`,
  login_as_guest: `${base}/login_as_guest`,
  logout: `${base}/logout`,
  chats_active_user: `${base}/chats/all`,
  new_chat: `${base}/chats/new`,
  new_messages: `${base}/messages/new`, // need params /:chat_id/:user_to
  all_users: `${base}/users/list`,
  profiles: `${base}/profiles`, // need params /:user_id

  isauthenticated: `${base}/isauthenticated`,

  // limited content for the guest
  isguest: `${base}/isguest`,
  chat_model: `${base}/isguest/chat_model`,
  available_users: `${base}/isguest/available_users`,
  guest_profile: `${base}/isguest/profile`, // need params /:user_id
};

export { urlAddresses };
