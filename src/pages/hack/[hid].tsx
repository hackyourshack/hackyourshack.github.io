// Copyright 2020, Hack Your Shack [https://hackyourshack.github.io]
import { Hack } from "@components/Hack";
import { useRouter } from "next/router";

export default function HackPage() {
  const router = useRouter();
  const { hid } = router.query;
  const hackid = Array.isArray(hid) ? hid[0] : hid || "000";

  return <Hack hackid={hackid} />;
}
