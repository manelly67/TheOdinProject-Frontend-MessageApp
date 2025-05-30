
const userDetailsMock = {
  id: "f2262c52-9d76-4c29-a076-527b112bc69b",
  email: "primer@usuario.com",
  username: "primerusuario",
  role: "USER",
  status: "ONLINE",
  chats: ["4289e4f3-8ca2-4323-a2fa-c2ebd0f71f23"],
  profile: {
    nametoshow: "MN",
    avatar: {
      src_image:
        "https://res.cloudinary.com/dwlqplcgt/image/upload/v1746485568/cream_boy_rvzo8h.jpg",
    },
    bgcolor: {
      colorcode: "#ffffff",
    },
    textcolor: {
      colorcode: "#2c3e4e",
    },
    aboutme:
      "Donec bibendum ornare dignissim. Donec bibendum ornare dignissim. Fusce scelerisque in quam. Fusce scelerisque in quam. Donec bibendum ornare dignissim. Fusce scelerisque in quam",
  },
};

const allChats = [
  {
    id: "4289e4f3-8ca2-4323-a2fa-c2ebd0f71f23",
    createdAt: "2025-05-08T13:30:07.077Z",
    usersInChat: [
      "796525ee-e1ba-47c9-a7b8-c8e97126190d",
      "f2262c52-9d76-4c29-a076-527b112bc69b",
    ],
    messages: [
      {
        id: "62a76dfb-cfab-473c-8c0f-433e426ec6c6",
        createdAt: "2025-05-22T14:17:55.585Z",
        text: "This message is only to say hello",
        userFrom: {
          id: "f2262c52-9d76-4c29-a076-527b112bc69b",
          username: "primerusuario",
          profile: [
            {
              id: "f2262c52-9d76-4c29-a076-527b112bc69b_profile",
              nametoshow: "MN",
              avatarId: "avatar_1",
              bgcolorId: "color_2",
              textcolorId: "color_3",
              aboutme:
                "Donec bibendum ornare dignissim. Donec bibendum ornare dignissim. Fusce scelerisque in quam. Fusce scelerisque in quam. Donec bibendum ornare dignissim. Fusce scelerisque in quam",
              userId: "f2262c52-9d76-4c29-a076-527b112bc69b",
            },
          ],
          status: "ONLINE",
        },
        userTo: {
          id: "796525ee-e1ba-47c9-a7b8-c8e97126190d",
          username: "segundousuario",
          profile: [
            {
              id: "796525ee-e1ba-47c9-a7b8-c8e97126190d_profile",
              nametoshow: "S.U.",
              avatarId: "avatar_4",
              bgcolorId: "color_13",
              textcolorId: "color_8",
              aboutme:
                "Nulla ullamcorper eu lectus at aliquet. Curabitur maximus ipsum id lorem condimentum aliquam. Sed at mauris mi.",
              userId: "796525ee-e1ba-47c9-a7b8-c8e97126190d",
            },
          ],
          status: "OFF",
        },
      },
      {
        id: "d7976fd7-0fa8-484f-990f-3c7fa3ac9e20",
        createdAt: "2025-05-22T14:27:06.893Z",
        text: "Again just saying hello",
        userFrom: {
          id: "f2262c52-9d76-4c29-a076-527b112bc69b",
          username: "primerusuario",
          profile: [
            {
              id: "f2262c52-9d76-4c29-a076-527b112bc69b_profile",
              nametoshow: "MN",
              avatarId: "avatar_1",
              bgcolorId: "color_2",
              textcolorId: "color_3",
              aboutme:
                "Donec bibendum ornare dignissim. Donec bibendum ornare dignissim. Fusce scelerisque in quam. Fusce scelerisque in quam. Donec bibendum ornare dignissim. Fusce scelerisque in quam",
              userId: "f2262c52-9d76-4c29-a076-527b112bc69b",
            },
          ],
          status: "ONLINE",
        },
        userTo: {
          id: "796525ee-e1ba-47c9-a7b8-c8e97126190d",
          username: "segundousuario",
          profile: [
            {
              id: "796525ee-e1ba-47c9-a7b8-c8e97126190d_profile",
              nametoshow: "S.U.",
              avatarId: "avatar_4",
              bgcolorId: "color_13",
              textcolorId: "color_8",
              aboutme:
                "Nulla ullamcorper eu lectus at aliquet. Curabitur maximus ipsum id lorem condimentum aliquam. Sed at mauris mi.",
              userId: "796525ee-e1ba-47c9-a7b8-c8e97126190d",
            },
          ],
          status: "OFF",
        },
      },
    ],
  },
];

const messageCreated = {
  message: "new message created",
  message_details: {
    id: "d7976fd7-0fa8-484f-990f-3c7fa3ac9e20",
    createdAt: "2025-05-22T14:27:06.893Z",
    text: "Again just saying hello",
    userFromId: "f2262c52-9d76-4c29-a076-527b112bc69b",
    userToId: "796525ee-e1ba-47c9-a7b8-c8e97126190d",
    chatId: "4289e4f3-8ca2-4323-a2fa-c2ebd0f71f23",
  },
  chat_updated: {
    id: "4289e4f3-8ca2-4323-a2fa-c2ebd0f71f23",
    createdAt: "2025-05-08T13:30:07.077Z",
    usersInChat: [
      "796525ee-e1ba-47c9-a7b8-c8e97126190d",
      "f2262c52-9d76-4c29-a076-527b112bc69b",
    ],
    messages: [
      {
        id: "62a76dfb-cfab-473c-8c0f-433e426ec6c6",
        createdAt: "2025-05-22T14:17:55.585Z",
        text: "This message is only to say hello",
        userFromId: "f2262c52-9d76-4c29-a076-527b112bc69b",
        userToId: "796525ee-e1ba-47c9-a7b8-c8e97126190d",
        chatId: "4289e4f3-8ca2-4323-a2fa-c2ebd0f71f23",
      },
      {
        id: "d7976fd7-0fa8-484f-990f-3c7fa3ac9e20",
        createdAt: "2025-05-22T14:27:06.893Z",
        text: "Again just saying hello",
        userFromId: "f2262c52-9d76-4c29-a076-527b112bc69b",
        userToId: "796525ee-e1ba-47c9-a7b8-c8e97126190d",
        chatId: "4289e4f3-8ca2-4323-a2fa-c2ebd0f71f23",
      },
    ],
  },
};

const resFetchAllChatsActiveUser = {
  user: "f2262c52-9d76-4c29-a076-527b112bc69b",
  chats: [
    {
      id: "4289e4f3-8ca2-4323-a2fa-c2ebd0f71f23",
      createdAt: "2025-05-08T13:30:07.077Z",
      usersInChat: [
        "796525ee-e1ba-47c9-a7b8-c8e97126190d",
        "f2262c52-9d76-4c29-a076-527b112bc69b",
      ],
      messages: [
        {
          id: "62a76dfb-cfab-473c-8c0f-433e426ec6c6",
          createdAt: "2025-05-22T14:17:55.585Z",
          text: "This message is only to say hello",
          userFrom: {
            id: "f2262c52-9d76-4c29-a076-527b112bc69b",
            username: "primerusuario",
            profile: {
              id: "f2262c52-9d76-4c29-a076-527b112bc69b_profile",
              nametoshow: "MN",
              avatarId: "avatar_1",
              bgcolorId: "color_2",
              textcolorId: "color_3",
              aboutme:
                "Donec bibendum ornare dignissim. Donec bibendum ornare dignissim. Fusce scelerisque in quam. Fusce scelerisque in quam. Donec bibendum ornare dignissim. Fusce scelerisque in quam",
              userId: "f2262c52-9d76-4c29-a076-527b112bc69b",
            },
            status: "ONLINE",
          },
          userTo: {
            id: "796525ee-e1ba-47c9-a7b8-c8e97126190d",
            username: "segundousuario",
            profile: {
              id: "796525ee-e1ba-47c9-a7b8-c8e97126190d_profile",
              nametoshow: "S.U.",
              avatarId: "avatar_4",
              bgcolorId: "color_13",
              textcolorId: "color_8",
              aboutme:
                "Nulla ullamcorper eu lectus at aliquet. Curabitur maximus ipsum id lorem condimentum aliquam. Sed at mauris mi.",
              userId: "796525ee-e1ba-47c9-a7b8-c8e97126190d",
            },
            status: "OFF",
          },
        },
        {
          id: "d7976fd7-0fa8-484f-990f-3c7fa3ac9e20",
          createdAt: "2025-05-22T14:27:06.893Z",
          text: "Again just saying hello",
          userFrom: {
            id: "f2262c52-9d76-4c29-a076-527b112bc69b",
            username: "primerusuario",
            profile: {
              id: "f2262c52-9d76-4c29-a076-527b112bc69b_profile",
              nametoshow: "MN",
              avatarId: "avatar_1",
              bgcolorId: "color_2",
              textcolorId: "color_3",
              aboutme:
                "Donec bibendum ornare dignissim. Donec bibendum ornare dignissim. Fusce scelerisque in quam. Fusce scelerisque in quam. Donec bibendum ornare dignissim. Fusce scelerisque in quam",
              userId: "f2262c52-9d76-4c29-a076-527b112bc69b",
            },
            status: "ONLINE",
          },
          userTo: {
            id: "796525ee-e1ba-47c9-a7b8-c8e97126190d",
            username: "segundousuario",
            profile: {
              id: "796525ee-e1ba-47c9-a7b8-c8e97126190d_profile",
              nametoshow: "S.U.",
              avatarId: "avatar_4",
              bgcolorId: "color_13",
              textcolorId: "color_8",
              aboutme:
                "Nulla ullamcorper eu lectus at aliquet. Curabitur maximus ipsum id lorem condimentum aliquam. Sed at mauris mi.",
              userId: "796525ee-e1ba-47c9-a7b8-c8e97126190d",
            },
            status: "OFF",
          },
        },
      ],
    },
  ],
};

const restFetchAllUsers = {
  list_of_users: [
    {
      id: "796525ee-e1ba-47c9-a7b8-c8e97126190d",
      username: "segundousuario",
      status: "OFF",
      profile: {
        nametoshow: "S.U.",
        avatar: {
          src_image:
            "https://res.cloudinary.com/dwlqplcgt/image/upload/v1746485662/yellow_girl_s7wfjx.jpg",
        },
        bgcolor: { colorcode: "#f0e68c" },
        textcolor: { colorcode: "#f08080" },
        aboutme:
          "Nulla ullamcorper eu lectus at aliquet. Curabitur maximus ipsum id lorem condimentum aliquam. Sed at mauris mi.",
      },
      chats: ["4289e4f3-8ca2-4323-a2fa-c2ebd0f71f23"],
    },
    {
      id: "f2262c52-9d76-4c29-a076-527b112bc69b",
      username: "primerusuario",
      status: "ONLINE",
      profile: {
        nametoshow: "MN",
        avatar: {
          src_image:
            "https://res.cloudinary.com/dwlqplcgt/image/upload/v1746485568/cream_boy_rvzo8h.jpg",
        },
        bgcolor: { colorcode: "#ffffff" },
        textcolor: { colorcode: "#00008b" },
        aboutme:
          "Donec bibendum ornare dignissim. Donec bibendum ornare dignissim. Fusce scelerisque in quam. Fusce scelerisque in quam. Donec bibendum ornare dignissim. Fusce scelerisque in quam",
      },
      chats: ["4289e4f3-8ca2-4323-a2fa-c2ebd0f71f23"],
    },
    {
      id: "31ed7b6f-e9b9-4273-95c5-484cb7b099ce",
      username: "tercerusuario",
      status: "ONLINE",
      profile: null,
      chats: [],
    },
  ],
};

const usersInChatMock = [
  {
    chatId: "e.id",
    userId: "user",
    status: "status",
    userProfile: {
      nametoshow: "MN",
      avatar: {
        src_image:
          "https://res.cloudinary.com/dwlqplcgt/image/upload/v1746485568/cream_boy_rvzo8h.jpg",
      },
      bgcolor: { colorcode: "#ffffff" },
      textcolor: { colorcode: "#00008b" },
      aboutme:
        "Donec bibendum ornare dignissim. Donec bibendum ornare dignissim. Fusce scelerisque in quam. Fusce scelerisque in quam. Donec bibendum ornare dignissim. Fusce scelerisque in quam",
    },
  },
  {
    chatId: "user",
    userId: "id",
    status: "status",
    userProfile: {
      nametoshow: "S.U.",
      avatar: {
        src_image:
          "https://res.cloudinary.com/dwlqplcgt/image/upload/v1746485662/yellow_girl_s7wfjx.jpg",
      },
      bgcolor: null,
      textcolor: null,
      aboutme:
        "Nulla ullamcorper eu lectus at aliquet. Curabitur maximus ipsum id lorem condimentum aliquam. Sed at mauris mi.",
    },
  },
];

const mock_options_profile = {
  available_colors: [
    { id: 'color_1', name: 'black', colorcode: '#000000' },
    { id: 'color_10', name: 'yellow', colorcode: '#ffff00' },
    { id: 'color_11', name: 'red', colorcode: '#ff0000' },
    { id: 'color_12', name: 'gray', colorcode: '#808080' },
    { id: 'color_13', name: 'khaki', colorcode: '#f0e68c' },
    { id: 'color_14', name: 'pink', colorcode: '#ffc0cb' },
    { id: 'color_15', name: 'brown', colorcode: '#a52a2a' },
    { id: 'color_2', name: 'white', colorcode: '#ffffff' },
    { id: 'color_3', name: 'darkblue', colorcode: '#00008b' },
    { id: 'color_4', name: 'lightskyblue', colorcode: '#87cefa' },
    { id: 'color_5', name: 'darkolivegreen', colorcode: '#556b2f' },
    { id: 'color_6', name: 'lightgreen', colorcode: '#90ee90' },
    { id: 'color_7', name: 'darkmagenta', colorcode: '#8b008b' },
    { id: 'color_8', name: 'lightcoral', colorcode: '#f08080' },
    { id: 'color_9', name: 'darkorange', colorcode: '#ff8c00' }
  ],
  available_avatars: [
    {
      id: 'avatar_1',
      name: 'yellow_girl',
      src_image: 'https://res.cloudinary.com/dwlqplcgt/image/upload/v1746485662/yellow_girl_s7wfjx.jpg'
    },
    {
      id: 'avatar_2',
      name: 'cream_boy',
      src_image: 'https://res.cloudinary.com/dwlqplcgt/image/upload/v1746485568/cream_boy_rvzo8h.jpg'
    },
    {
      id: 'avatar_3',
      name: 'red_girl',
      src_image: 'https://res.cloudinary.com/dwlqplcgt/image/upload/v1746485617/red_girl_nptofu.jpg'
    },
    {
      id: 'avatar_4',
      name: 'blue_boy',
      src_image: 'https://res.cloudinary.com/dwlqplcgt/image/upload/v1746485474/blue_boy_yujnch.jpg'
    },
    {
      id: 'avatar_5',
      name: 'avatar_cat',
      src_image: 'https://res.cloudinary.com/dwlqplcgt/image/upload/v1746484939/avatar_cat_czsyjo.jpg'
    },
    {
      id: 'avatar_6',
      name: 'avatar_dog',
      src_image: 'https://res.cloudinary.com/dwlqplcgt/image/upload/v1746486201/avatar_dog_lrpbiz.jpg'
    },
    {
      id: 'avatar_7',
      name: 'avatar_penguin',
      src_image: 'https://res.cloudinary.com/dwlqplcgt/image/upload/v1746488058/avatar_penguin_baried.jpg'
    },
    {
      id: 'avatar_8',
      name: 'avatar_bird',
      src_image: 'https://res.cloudinary.com/dwlqplcgt/image/upload/v1746486795/avatar_bird_if4ycv.jpg'
    }
  ]
}

/**
 *  user_profile: user_profile,
    profile_options: profile_options,

    const { nametoshow, aboutme, avatarId, bgcolorId, textcolorId } =
            req.body;
 */

export {
  usersInChatMock,
  userDetailsMock,
  allChats,
  messageCreated,
  resFetchAllChatsActiveUser,
  restFetchAllUsers,
  mock_options_profile,
};
