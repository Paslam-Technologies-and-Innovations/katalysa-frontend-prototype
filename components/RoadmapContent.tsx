import { ArrowUpRight, Check, Clock3 } from "lucide-react";
import { upcomingFeatureGroups } from "@/lib/upcoming-features";

export default function RoadmapContent({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`roadmap-list${compact ? " roadmap-list-compact" : ""}`}>
      {upcomingFeatureGroups.map((group) => (
        <details className="roadmap-group" key={group.title} open={group.confirmed}>
          <summary>
            <span className={`roadmap-status${group.confirmed ? " is-confirmed" : ""}`} aria-hidden="true">
              {group.confirmed ? <Check size={16} /> : <Clock3 size={15} />}
            </span>
            <span className="roadmap-group-copy">
              <strong>{group.title}</strong>
              <small>{group.summary}</small>
            </span>
            <span className="roadmap-count">{group.items.length} planned</span>
            <ArrowUpRight className="roadmap-chevron" size={17} aria-hidden="true" />
          </summary>
          <ul>
            {group.items.map((item) => <li key={item}><span className="roadmap-bullet" aria-hidden="true" />{item}</li>)}
          </ul>
        </details>
      ))}
    </div>
  );
}
