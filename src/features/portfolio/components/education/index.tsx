import { GraduationCap } from "lucide-react";

import { CollapsibleList } from "@/components/collapsible-list";
import {
    CollapsibleChevronsIcon,
    CollapsibleContent,
    CollapsibleTrigger,
    CollapsibleWithContext,
} from "@/components/ui/collapsible";

import { EDUCATION } from "../../data/education";
import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "../panel";

function EducationItem({
    className,
    education,
}: {
    className?: string;
    education: {
        id: string;
        institution: string;
        degree: string;
        period: string;
        score: string;
        location: string;
    };
}) {
    return (
        <CollapsibleWithContext defaultOpen={true} asChild>
            <div className={className}>
                <div className="flex items-center hover:bg-accent2">
                    <div
                        className="mx-4 flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-edge ring-offset-1 ring-offset-background select-none"
                        aria-hidden="true"
                    >
                        <GraduationCap className="size-4" />
                    </div>

                    <div className="flex-1 border-l border-dashed border-edge">
                        <CollapsibleTrigger className="flex w-full items-center gap-2 p-4 pr-2 text-left">
                            <div className="flex-1">
                                <h3 className="mb-1 leading-snug font-medium text-balance">
                                    {education.institution}
                                </h3>

                                <dl className="text-sm text-muted-foreground">
                                    <dt className="sr-only">Period</dt>
                                    <dd className="flex items-center gap-0.5">
                                        <span>{education.period}</span>
                                    </dd>
                                </dl>
                            </div>

                            <div
                                className="shrink-0 text-muted-foreground [&_svg]:size-4"
                                aria-hidden
                            >
                                <CollapsibleChevronsIcon />
                            </div>
                        </CollapsibleTrigger>
                    </div>
                </div>

                <CollapsibleContent className="group overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
                    <div className="border-t border-edge shadow-inner">
                        <div className="space-y-2 p-4 duration-300 group-data-[state=closed]:animate-fade-out group-data-[state=open]:animate-fade-in">
                            <p className="text-sm text-foreground">{education.degree}</p>
                            <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                                <span className="font-medium text-foreground">
                                    {education.score}
                                </span>
                                <span>•</span>
                                <span>{education.location}</span>
                            </div>
                        </div>
                    </div>
                </CollapsibleContent>
            </div>
        </CollapsibleWithContext>
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

            <CollapsibleList
                items={EDUCATION}
                max={3}
                renderItem={(item) => <EducationItem education={item} />}
            />
        </Panel>
    );
}
