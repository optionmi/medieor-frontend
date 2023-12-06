import PollOption from "./poll-option";

const PollOptions = [
  {
    option: "Call of Duty Ghosts",
    percentage: "50%",
    color: "#9a58b5",
  },
  {
    option: "Titanfall",
    percentage: "20%",
    color: "#3497db",
  },
  {
    option: "Battlefield 4",
    percentage: "30%",
    color: "#e77e23",
  },
];

export default function Poll() {
  return (
    <>
      <h1 className="mb-10 text-xl ">Poll of the week</h1>
      <h2 className="text-lg">Which game you are playing this week?</h2>
      <ul className="flex flex-col gap-2 py-5">
        {PollOptions.map((opt) => (
          <PollOption key={opt.option} {...opt} />
        ))}
      </ul>
      <small>Voting ends on 19th of October</small>
    </>
  );
}
