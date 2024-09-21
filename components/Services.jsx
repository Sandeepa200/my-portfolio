import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Description } from "@radix-ui/react-dialog";

const servicesData = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8}/>,
        title: "Fullstack Development",
        description: "Building responsive and dynamic web applications using modern technologies like React, Next.js, and .NET Blazor to deliver seamless user experiences."
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8}/>,
        title: "Mobile Application Development",
        description: "Creating intuitive and high-performing mobile apps with Flutter and .NET MAUI offering cross-platform functionality for both Android and iOS."
    },
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8}/>,
        title: "AI Application Development",
        description: "Integrating AI solutions using Python and APIs to develop intelligent applications that solve complex real-world problems."
    }

];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
        <div className="container mx-auto">
            <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
                My Services
            </h2>
            {/* grid items  */}
            <div className="grid lg:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
                {servicesData.map((item, index) => {
                    return (
                        <Card 
                            className="w-full max-w-[420px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative" 
                            key={index}>
                            <CardHeader className="text-primary absolute -top-[60px]">
                                <div className="w-[80px] h-[40px] xs:w-[140px] xs:h-[80px] bg-white dark:bg-background flex justify-center items-center">
                                    {item.icon}
                                </div>
                            </CardHeader>
                            <CardContent className="text-center">
                                <CardTitle className="mb-4">
                                    {item.title}
                                </CardTitle>
                                <CardDescription className="text-lg">
                                    {item.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                            
                    );
                })}
            </div>
        </div>
    </section>
  )
}

export default Services