import { GraduationCap } from "lucide-react";

import { EDUCATION } from "../../data/education";
import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "../panel";

function EducationItem({
    education,
    isFirst,
}: {
    education: {
        id: string;
        institution: string;
        degree: string;
        period: string;
        score: string;
        location: string;
    };
    isFirst: boolean;
}) {
    return (
        <div className={`flex items-start hover:bg-accent2 ${!isFirst ? "border-t border-edge" : ""}`}>
            <div
                className="mx-4 mt-4 flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-edge ring-offset-1 ring-offset-background select-none"
                aria-hidden="true"
            >
                <GraduationCap className="size-4" />
            </div>

            <div className="flex-1 border-l border-dashed border-edge p-4">
                <h3 className="mb-1 leading-snug font-medium text-balance">
                    {education.institution}
                </h3>

                <p className="text-sm text-muted-foreground">{education.degree}</p>

                <div className="mt-1 flex flex-wrap gap-2 text-xs text-muted-foreground">
                    <span>{education.period}</span>
                    <span>•</span>
                    <span className="font-medium text-foreground">{education.score}</span>
                    <span>•</span>
                    <span>{education.location}</span>
                </div>
            </div>
        </div>
    );
}

export function Education() {
    return (
        <Panel id="education">
            <PanelHeader>
                <PanelTitle>
                    Education
                    <PanelTitleSup>({EDUCATION.length})</PanelTitleSup>
                </PanelTitle>
            </PanelHeader>

            <div>
                {EDUCATION.map((item, index) => (
                    <EducationItem key={item.id} education={item} isFirst={index === 0} />
                ))}
            </div>
        </Panel>
    );
}
