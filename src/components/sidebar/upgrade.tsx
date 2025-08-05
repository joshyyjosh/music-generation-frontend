"use client";

import { authClient } from "~/lib/auth-client";
import { Button } from "../ui/button";

export default function Upgrade() {
  const upgrade = async () => {
    await authClient.checkout({
      products: [
        "d2564637-0bc5-4612-9725-da70af9deebc",
        "88fdea8f-b4ce-40ab-ac7e-95e4f017cb4d",
        "a17d1fff-f0ae-4651-bf87-a59e6496226c",
      ],
    });
  };
  return (
    <Button
      variant="outline"
      size="sm"
      className="ml-2 cursor-pointer text-orange-400"
      onClick={upgrade}
    >
      Upgrade
    </Button>
  );
}