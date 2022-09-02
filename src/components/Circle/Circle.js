import { StyledCircle } from "./Circle.styled";
function Circle() {
  const circles = [
    { id: 1, className: "one__cirle circle-1", width: 100, height: 100 },
    { id: 2, className: "one__cirle circle-2", width: 80, height: 80 },
    { id: 3, className: "one__cirle circle-3", width: 60, height: 60 },
    { id: 4, className: "one__cirle circle-4", width: 40, height: 40 },
    { id: 5, className: "one__cirle circle-5", width: 20, height: 20 },
  ];
  return (
    <StyledCircle>
      {circles.map((circle) => {
        return (
          <span
            key={circle.id}
            className={circle.className}
            style={{ width: circle.width + "%", height: circle.height + "%" }}
          ></span>
        );
      })}
    </StyledCircle>
  );
}

export default Circle;
