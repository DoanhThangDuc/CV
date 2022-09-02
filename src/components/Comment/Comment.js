import {
  StyledComment,
  StyledOneComment,
  Img,
  StyledPersonCommentRole,
  P7,
  P8,
  StyledPersonCommentQuote,
  StyledPersonCommentInfo,
} from "../Comment/Comment.styled.js";

const comments = [
  {
    name: "Name1",
    role: "role",
    comment:
      "Molestiae incidunt consequatur quis ipsa autem nam sit enim magni. Voluptas tempore rem. Explicabo a quaerat sint autem dolore ducimusut consequatur neque. Nisi dolores quaerat fuga rem nihil nostrum.Laudantium quia consequatur molestias delectus culpa.",
  },
  {
    name: "Name2",
    role: "role",
    comment:
      "Molestiae incidunt consequatur quis ipsa autem nam sit enim magni.Voluptas tempore rem. Explicabo a quaerat sint autem dolore ducimusut consequatur neque. Nisi dolores quaerat fuga rem nihil nostrum.Laudantium quia consequatur molestias delectus culpa.",
  },
];

export default function Comments() {
  return (
    <StyledComment>
      {comments.map(({ name, role, comment }) => {
        return (
          <StyledOneComment key={name}>
            <StyledPersonCommentInfo>
              <Img src="./assets/images/sun-flowers.jpg" alt="person"></Img>
              <StyledPersonCommentRole>
                <P7>{name}</P7>
                <P8>{role}</P8>
              </StyledPersonCommentRole>
            </StyledPersonCommentInfo>
            <StyledPersonCommentQuote>{comment}</StyledPersonCommentQuote>
          </StyledOneComment>
        );
      })}
    </StyledComment>
  );
}
