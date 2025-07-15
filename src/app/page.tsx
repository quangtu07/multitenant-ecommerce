import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";


export default function Home() {
  return (
    <div className="container p-4">
      <div className="flex flex-col gap-y-4">
        <div>
          <Button variant={"elevated"}>I'm a button</Button>
        </div>
        <div>
          <Input placeholder="I'm an input" />
        </div>
        <div>
          <Progress value={50} />
        </div>
        <div>
          <Textarea placeholder="I'm a textarea" />
        </div>
        <div>
          <Checkbox />
        </div>
      </div>
    </div>
  );
}
