import React from "react";

const commentsData = [
  {
    name: "Jay Luhar",
    text: "Lorem ipsum dolor sit amet, adip ",
    replies: [
      {
        name: "Jay Luhar",
        text: "Lorem ipsum dolor sit amet, adip ",
        replies: [
          {
            name: "Jay Luhar",
            text: "Lorem ipsum dolor sit amet, adip ",
            replies: [
              {
                name: "Jay Luhar",
                text: "Lorem ipsum dolor sit amet, adip ",
                replies: [
                  {
                    name: "Jay Luhar",
                    text: "Lorem ipsum dolor sit amet, adip ",
                    replies: [
                      {
                        name: "Jay Luhar",
                        text: "Lorem ipsum dolor sit amet, adip ",
                        replies: [],
                      },
                      {
                        name: "Jay Luhar",
                        text: "Lorem ipsum dolor sit amet, adip ",
                        replies: [],
                      },
                      {
                        name: "Jay Luhar",
                        text: "Lorem ipsum dolor sit amet, adip ",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Jay Luhar",
                    text: "Lorem ipsum dolor sit amet, adip ",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Jay Luhar",
    text: "Lorem ipsum dolor sit amet, adip ",
    replies: [
      {
        name: "Jay Luhar",
        text: "Lorem ipsum dolor sit amet, adip ",
        replies: [],
      },
      {
        name: "Jay Luhar",
        text: "Lorem ipsum dolor sit amet, adip ",
        replies: [],
      },
      {
        name: "Jay Luhar",
        text: "Lorem ipsum dolor sit amet, adip ",
        replies: [],
      },
    ],
  },
  {
    name: "Jay Luhar",
    text: "Lorem ipsum dolor sit amet, adip ",
    replies: [
      {
        name: "Jay Luhar",
        text: "Lorem ipsum dolor sit amet, adip ",
        replies: [],
      },
      {
        name: "Jay Luhar",
        text: "Lorem ipsum dolor sit amet, adip ",
        replies: [],
      },
      {
        name: "Jay Luhar",
        text: "Lorem ipsum dolor sit amet, adip ",
        replies: [],
      },
    ],
  },
  {
    name: "Jay Luhar",
    text: "Lorem ipsum dolor sit amet, adip ",
    replies: [
      {
        name: "Jay Luhar",
        text: "Lorem ipsum dolor sit amet, adip ",
        replies: [],
      },
      {
        name: "Jay Luhar",
        text: "Lorem ipsum dolor sit amet, adip ",
        replies: [],
      },
      {
        name: "Jay Luhar",
        text: "Lorem ipsum dolor sit amet, adip ",
        replies: [],
      },
    ],
  },
  {
    name: "Jay Luhar",
    text: "Lorem ipsum dolor sit amet, adip ",
    replies: [
      {
        name: "Jay Luhar",
        text: "Lorem ipsum dolor sit amet, adip ",
        replies: [],
      },
      {
        name: "Jay Luhar",
        text: "Lorem ipsum dolor sit amet, adip ",
        replies: [],
      },
      {
        name: "Jay Luhar",
        text: "Lorem ipsum dolor sit amet, adip ",
        replies: [],
      },
    ],
  },
  {
    name: "Jay Luhar",
    text: "Lorem ipsum dolor sit amet, adip ",
    replies: [
      {
        name: "Jay Luhar",
        text: "Lorem ipsum dolor sit amet, adip ",
        replies: [],
      },
      {
        name: "Jay Luhar",
        text: "Lorem ipsum dolor sit amet, adip ",
        replies: [],
      },
      {
        name: "Jay Luhar",
        text: "Lorem ipsum dolor sit amet, adip ",
        replies: [],
      },
    ],
  },
  {
    name: "Jay Luhar",
    text: "Lorem ipsum dolor sit amet, adip ",
    replies: [
      {
        name: "Jay Luhar",
        text: "Lorem ipsum dolor sit amet, adip ",
        replies: [],
      },
      {
        name: "Jay Luhar",
        text: "Lorem ipsum dolor sit amet, adip ",
        replies: [],
      },
      {
        name: "Jay Luhar",
        text: "Lorem ipsum dolor sit amet, adip ",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex p-2 shadow-sm bg-gray-200 rounded-lg ">
      <img
        className="w-8 h-8 "
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="ml-5 p-2 border border-l-black">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="w-[1200px]">
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
