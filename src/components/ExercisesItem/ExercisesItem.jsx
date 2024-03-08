const ExercisesItem = ({ calories, target, NameBodyPart, name }) => {
  return (
    <>
      <li>
        <div>
          <p>WORKOUT</p>
          <button>
            <p>Start</p>
          </button>
        </div>
        <div>
          <p>{name}</p>
        </div>
        <div>
          <div>
            <p>Burned calories:</p>
            <p>{calories}</p>
          </div>
          <div>
            <p>Body part:</p>
            <p>{NameBodyPart}</p>
          </div>
          <div>
            <p>Target:</p>
            <p>{target}</p>
          </div>
        </div>
      </li>
    </>
  );
};

export default ExercisesItem;
