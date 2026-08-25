import ScrollReveal from '../react-bits/ScrollReveal';
import PlaceholderBadge from '../common/PlaceholderBadge';
import { problemSolvingStats } from '../../data/problemSolving';

export default function ProblemSolving() {
  const { problemsSolved, accuracy, topics, profileLink } = problemSolvingStats;

  return (
    <section className="section pt-0">
      <div className="container-content">
        <ScrollReveal>
          <div className="rounded-lg border border-ink-700 bg-ink-800/40 p-7 sm:p-9">
            <div className="flex items-center gap-2 mb-1">
              <p className="eyebrow">problem-solving</p>
              <PlaceholderBadge>stats pending</PlaceholderBadge>
            </div>
            <h3 className="font-display text-xl font-semibold text-ink-100 mt-2">Problem Solving</h3>

            <div className="mt-6 grid sm:grid-cols-2 gap-8">
              <div className="flex gap-8">
                <div>
                  <p className="font-display text-3xl font-semibold text-ink-100">
                    {problemsSolved ?? '—'}
                  </p>
                  <p className="text-xs text-ink-400 mt-1">Problems Solved</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-semibold text-ink-100">{accuracy ?? '—'}</p>
                  <p className="text-xs text-ink-400 mt-1">Accuracy</p>
                </div>
              </div>

              <div>
                <p className="text-xs text-ink-400 mb-2">Practiced topics</p>
                <div className="flex flex-wrap gap-2">
                  {topics.map((t) => (
                    <span key={t} className="font-mono text-[11px] text-ink-300 border border-ink-600 rounded-full px-2.5 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <a
              href={profileLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm text-mint-500 hover:text-mint-300"
            >
              {profileLink.label}
              {profileLink.isPlaceholder && <PlaceholderBadge>add link</PlaceholderBadge>}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
