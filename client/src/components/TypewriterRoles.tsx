import { useEffect, useState } from "react";

const ROLES = [
  "AI Engineer",
  "Computer Vision Developer",
  "Robotics Enthusiast",
  "Deep Learning Engineer",
  "GenAI Builder",
];

const TYPE_SPEED = 70;
const DELETE_SPEED = 40;
const HOLD_AFTER_TYPE = 1800;
const HOLD_AFTER_DELETE = 350;

export default function TypewriterRoles() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = ROLES[roleIndex];
    let delay: number;

    if (!deleting) {
      if (text === role) {
        delay = HOLD_AFTER_TYPE;
      } else {
        delay = TYPE_SPEED;
      }
    } else {
      delay = text === "" ? HOLD_AFTER_DELETE : DELETE_SPEED;
    }

    const timer = setTimeout(() => {
      if (!deleting) {
        if (text === role) {
          setDeleting(true);
        } else {
          setText(role.slice(0, text.length + 1));
        }
      } else {
        if (text === "") {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % ROLES.length);
        } else {
          setText(text.slice(0, -1));
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, roleIndex]);

  return (
    <span className="inline-flex items-baseline text-2xl md:text-3xl font-semibold">
      <span className="text-muted-foreground mr-2">I'm a</span>
      <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent min-h-[1.2em]">
        {text}
      </span>
      <span className="typewriter-caret text-primary" aria-hidden="true">
        |
      </span>
    </span>
  );
}
