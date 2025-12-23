import { SubjectLayout } from "@/components/student/SubjectLayout";
import { GameMissionCard } from "@/components/student/GameMissionCard";
import { Heart, Brain, TreeDeciduous, Bug, Microscope, Activity } from "lucide-react";
import { useNavigate } from "react-router-dom";

const biologyMissions = [
  {
    title: "Body Explorer",
    description: "Journey inside the human body and discover how organs work",
    icon: Activity,
    reward: 100,
    difficulty: "medium" as const,
    status: "in-progress" as const,
    progress: 60,
    path: "/student/biology/explorer",
  },
  {
    title: "Brain Power",
    description: "Learn about the nervous system and how your brain works",
    icon: Brain,
    reward: 90,
    difficulty: "medium" as const,
    status: "available" as const,
  },
  {
    title: "Plant Life Cycle",
    description: "Grow virtual plants and understand photosynthesis",
    icon: TreeDeciduous,
    reward: 75,
    difficulty: "easy" as const,
    status: "completed" as const,
  },
  {
    title: "Insect World",
    description: "Explore the fascinating world of insects and their roles",
    icon: Bug,
    reward: 80,
    difficulty: "easy" as const,
    status: "available" as const,
  },
  {
    title: "Microscope Master",
    description: "Use a virtual microscope to study cells and microorganisms",
    icon: Microscope,
    reward: 120,
    difficulty: "hard" as const,
    status: "locked" as const,
  },
];

export default function BiologyPage() {
  const navigate = useNavigate();

  return (
    <SubjectLayout
      title="Biology"
      icon={Heart}
      iconColor="text-destructive"
      progress={30}
      totalLessons={10}
      completedLessons={3}
      xpEarned={180}
    >
      <div className="slide-up" style={{ animationDelay: "150ms" }}>
        <h3 className="mb-4 font-heading font-semibold">Missions & Games</h3>
        <div className="space-y-3">
          {biologyMissions.map((mission, index) => (
            <div
              key={mission.title}
              className="slide-up"
              style={{ animationDelay: `${200 + index * 50}ms` }}
            >
              <GameMissionCard
                {...mission}
                onClick={() => mission.path && navigate(mission.path)}
              />
            </div>
          ))}
        </div>
      </div>
    </SubjectLayout>
  );
}
