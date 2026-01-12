import { GraduationCap } from "lucide-react";

import { EDUCATION } from "../../data/education";
import { Panel, PanelHeader, PanelTitle } from "../panel";

export function Education() {
    return (
        <Panel id="education">
            <PanelHeader>
                <PanelTitle>Education</PanelTitle>
            </PanelHeader>

            <div className="space-y-4 px-4 pb-4">
                {EDUCATION.map((edu) => (
                    <div
                        key={edu.id}
                        className="flex gap-4 rounded-lg border border-edge p-4"
                    >
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted">
                            <GraduationCap className="size-5 text-muted-foreground" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-semibold">{edu.institution}</h3>
                            <p className="text-sm text-muted-foreground">{edu.degree}</p>
                            <div className="mt-1 flex flex-wrap gap-2 text-xs text-muted-foreground">
                                <span>{edu.period}</span>
                                <span>•</span>
                                <span className="font-medium text-foreground">{edu.score}</span>
                                <span>•</span>
                                <span>{edu.location}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Panel>
    );
}
