import ExcerciseCard from "./ExcerciseCard";
import SectionWrapper from "./SectionWrapper";

const Workout = (props) => {
  const { workout } = props;
  return (
    <SectionWrapper
      id={"workout"}
      header={"Welcome to"}
      title={["The", "Danger", "Zone"]}
    >
      <div className="flex flex-col gap-4">
        {workout.map((exercise, i) => {
          return <ExcerciseCard exercise={exercise} key={i} i={i} />;
        })}
      </div>
    </SectionWrapper>
  );
};

export default Workout;
