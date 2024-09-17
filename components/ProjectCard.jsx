import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Link2Icon } from "lucide-react";
import { Github } from "simple-icons";
import { Badge } from "./ui/badge";

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <CardHeader>
        {/* image  */}
        <div>
          <Image
            className="absolute bottom-0 shadow-2xl"
            src={project.image}
            width={247}
            height={250}
            alt=""
            priority
          />
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
            {project.category}
        </Badge>
        <h4 className="h4 mb-1">{project.name}</h4>
        <p className="text-muted-foreground text-lg">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
