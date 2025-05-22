import { RadioGroup } from "@/stories/RadioGroup/RadioGroup";

export default function Home() {
  return (
    <div>
      <RadioGroup
        name="Fruits"
        label="Fruits"
        radios={[
          {
            title: "Apple",
            value: "Apple",
          },
          {
            title: "Orange",
            value: "Orange",
          },
          {
            title: "Cherry",
            value: "Charry",
          },
        ]}
      />
    </div>
  );
}
