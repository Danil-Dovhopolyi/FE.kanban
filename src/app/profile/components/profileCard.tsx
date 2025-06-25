import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProfileCard() {
  return (
    <Card className="w-full max-w-sm mx-auto">
      <CardHeader className="flex flex-col items-center">
        <Avatar className="w-24 h-24">
          <AvatarImage src="https://github.com/your-avatar.png" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <CardTitle className="mt-4 text-center">John Doe</CardTitle>
      </CardHeader>
      <CardContent className="text-center text-sm text-gray-600">
        Software Developer at Example Inc. Passionate about web development and
        UI/UX design.
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button>Edit Profile</Button>
      </CardFooter>
    </Card>
  );
}
