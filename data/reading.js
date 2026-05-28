'use client';
import React, { useState, useRef } from 'react';
import AppLayout from '@/components/AppLayout';
import { Volume2, Play, Square, ChevronLeft, Eye, EyeOff, CheckCircle, XCircle } from 'lucide-react';

const passages = [
  {
    id: 'r-001',
    level: 'N5',
    title: 'My Daily Routine',
    titleJp: '私の日課',
    difficulty: 'Beginner',
    wordCount: 80,
    lines: [
      { id: 'rl-1', jp: '私は毎朝六時に起きます。', en: "I wake up at 6 o'clock every morning." },
      { id: 'rl-2', jp: 'まず顔を洗って、歯を磨きます。', en: 'First, I wash my face and brush my teeth.' },
      { id: 'rl-3', jp: '朝ごはんはトーストとコーヒーです。', en: 'Breakfast is toast and coffee.' },
      { id: 'rl-4', jp: '七時半に家を出て、電車で会社に行きます。', en: 'I leave home at 7:30 and go to work by train.' },
      { id: 'rl-5', jp: '会社は九時から始まります。', en: "Work starts at 9 o'clock." },
      { id: 'rl-6', jp: '昼ごはんは会社の近くのレストランで食べます。', en: 'I eat lunch at a restaurant near the office.' },
      { id: 'rl-7', jp: '六時に仕事が終わって、家に帰ります。', en: 'Work ends at 6 and I go home.' },
      { id: 'rl-8', jp: '夜は日本語を勉強します。', en: 'In the evening, I study Japanese.' },
    ],
    vocab: [
      { id: 'rv-1', jp: '日課', en: 'Daily routine' },
      { id: 'rv-2', jp: '起きます', en: 'Wake up' },
      { id: 'rv-3', jp: '電車', en: 'Train' },
    ],
    quiz: [
      { id: 'q1', question: 'What time does the person wake up?', options: ['5:00', '6:00', '7:00', '7:30'], answer: 1 },
      { id: 'q2', question: 'How does the person go to work?', options: ['By car', 'By bus', 'By train', 'Walking'], answer: 2 },
      { id: 'q3', question: 'What does the person do in the evening?', options: ['Watch TV', 'Exercise', 'Study Japanese', 'Cook dinner'], answer: 2 },
    ],
  },
  {
    id: 'r-002',
    level: 'N4',
    title: 'Japanese Seasons',
    titleJp: '日本の四季',
    difficulty: 'Elementary',
    wordCount: 120,
    lines: [
      { id: 'rl-1', jp: '日本には四つの季節があります。', en: 'Japan has four seasons.' },
      { id: 'rl-2', jp: '春は三月から五月で、桜の花が咲きます。', en: 'Spring is from March to May, and cherry blossoms bloom.' },
      { id: 'rl-3', jp: '多くの人が花見を楽しみます。', en: 'Many people enjoy hanami (flower viewing).' },
      { id: 'rl-4', jp: '夏は六月から八月で、とても暑いです。', en: 'Summer is from June to August and is very hot.' },
      { id: 'rl-5', jp: '海や山に行く人が多いです。', en: 'Many people go to the sea or mountains.' },
      { id: 'rl-6', jp: '秋は九月から十一月で、紅葉が美しいです。', en: 'Autumn is from September to November, and the autumn leaves are beautiful.' },
      { id: 'rl-7', jp: '冬は十二月から二月で、雪が降ることもあります。', en: 'Winter is from December to February, and it sometimes snows.' },
    ],
    vocab: [
      { id: 'rv-1', jp: '四季', en: 'Four seasons' },
      { id: 'rv-2', jp: '桜', en: 'Cherry blossom' },
      { id: 'rv-3', jp: '紅葉', en: 'Autumn leaves' },
    ],
    quiz: [
      { id: 'q1', question: 'When does spring occur in Japan?', options: ['Jan-Mar', 'Mar-May', 'Jun-Aug', 'Sep-Nov'], answer: 1 },
      { id: 'q2', question: 'What is hanami?', options: ['Snow viewing', 'Flower viewing', 'Leaf viewing', 'Star viewing'], answer: 1 },
    ],
  },
  {
    id: 'r-003',
    level: 'N3',
    title: 'The History of Sushi',
    titleJp: '寿司の歴史',
    difficulty: 'Intermediate',
    wordCount: 150,
    lines: [
      { id: 'rl-1', jp: '寿司は日本を代表する料理の一つです。', en: "Sushi is one of Japan's representative dishes." },
      { id: 'rl-2', jp: 'その起源は東南アジアにあると言われています。', en: 'Its origins are said to be in Southeast Asia.' },
      { id: 'rl-3', jp: '最初は魚を保存するための方法として発展しました。', en: 'It first developed as a method of preserving fish.' },
      { id: 'rl-4', jp: '江戸時代に現在のような握り寿司が生まれました。', en: 'Nigiri sushi as we know it today was born in the Edo period.' },
      { id: 'rl-5', jp: '今では世界中で愛されている料理になりました。', en: 'Today it has become a dish loved around the world.' },
    ],
    vocab: [
      { id: 'rv-1', jp: '起源', en: 'Origin' },
      { id: 'rv-2', jp: '保存', en: 'Preservation' },
      { id: 'rv-3', jp: '江戸時代', en: 'Edo period' },
    ],
    quiz: [
      { id: 'q1', question: 'Where are the origins of sushi said to be?', options: ['China', 'Korea', 'Southeast Asia', 'Japan'], answer: 2 },
    ],
  },
];

function speak(text, lang = 'ja-JP', rate = 0.85) {
  if (typeof window !== 'undefined' && window.speechSynthesis) {
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = lang;
    utt.rate = rate;
    window.speechSynthesis.speak(utt);
  }
}

const levelColor = (level) => {
  const map = { N5: 'var(--jlpt-n5)', N4: 'var(--jlpt-n4)', N3: 'var(--jlpt-n3)' };
  return map[level] || 'var(--primary)';
};

export default function ReadingPage() {
  const [selected, setSelected] = useState(null);
  const [showTranslations, setShowTranslations] = useState(false);
  const [visibleLines, setVisibleLines] = useState(new Set());
  const [activeLine, setActiveLine] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const playRef = useRef(false);

  const toggleLine = (id) => {
    setVisibleLines((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const readAloud = async (lines) => {
    if (isPlaying) {
      window.speechSynthesis?.cancel();
      setIsPlaying(false);
      setActiveLine(null);
      playRef.current = false;
      return;
    }
    setIsPlaying(true);
    playRef.current = true;
    for (const line of lines) {
      if (!playRef.current) break;
      setActiveLine(line.id);
      await new Promise((resolve) => {
        if (!window.speechSynthesis) { resolve(); return; }
        const utt = new SpeechSynthesisUtterance(line.jp);
        utt.lang = 'ja-JP';
        utt.rate = 0.85;
        utt.onend = () => setTimeout(resolve, 1000);
        window.speechSynthesis.speak(utt);
      });
    }
    setIsPlaying(false);
    setActiveLine(null);
    playRef.current = false;
  };

  if (selected) {
    const score = selected.quiz.filter((q) => quizAnswers[q.id] === q.answer).length;
    return (
      <AppLayout>
        <div className="max-w-screen-lg mx-auto px-4 lg:px-6 py-6">
          <button
            onClick={() => {
              setSelected(null);
              setQuizAnswers({});
              setShowResults(false);
              window.speechSynthesis?.cancel();
            }}
            className="btn-press flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-5 transition-colors"
          >
            <ChevronLeft size={16} /> Back to passages
          </button>

          <div className="flex items-center gap-3 mb-6">
            <div
              className="px-2.5 py-1 rounded-lg text-xs font-bold font-mono"
              style={{
                background: `${levelColor(selected.level)}22`,
                color: levelColor(selected.level),
                border: `1px solid ${levelColor(selected.level)}`,
              }}
            >
              {selected.level}
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">{selected.title}</h1>
              <p className="text-sm font-sans-jp text-muted-foreground">{selected.titleJp}</p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={() => readAloud(selected.lines)}
              className="btn-press flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all"
              style={{ background: isPlaying ? 'var(--jlpt-n3)' : 'var(--primary)' }}
            >
              {isPlaying ? <><Square size={13} /> Stop</> : <><Play size={13} /> 📖 Read Aloud</>}
            </button>
            <button
              onClick={() => setShowTranslations(!showTranslations)}
              className="btn-press flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-border bg-card-elevated text-foreground transition-all"
            >
              {showTranslations ? <EyeOff size={14} /> : <Eye size={14} />}
              {showTranslations ? 'Hide' : 'Show'} Translations
            </button>
          </div>

          {/* Passage */}
          <div className="rounded-xl border border-border bg-card p-5 mb-5 space-y-3">
            {selected.lines.map((line) => (
              <div
                key={line.id}
                className="flex gap-3 p-3 rounded-lg transition-all"
                style={{
                  background: activeLine === line.id ? 'var(--primary-dim)' : 'transparent',
                  borderLeft: activeLine === line.id ? '3px solid var(--primary)' : '3px solid transparent',
                }}
              >
                <div className="flex-1">
                  <p className="font-sans-jp text-base text-foreground leading-relaxed mb-1">{line.jp}</p>
                  {(showTranslations || visibleLines.has(line.id)) && (
                    <p className="text-sm text-muted-foreground italic">{line.en}</p>
                  )}
                </div>
                <div className="flex items-start gap-1 flex-shrink-0">
                  <button
                    onClick={() => toggleLine(line.id)}
                    className="btn-press p-1.5 rounded-lg hover:bg-card-elevated transition-colors"
                    title={visibleLines.has(line.id) ? 'Hide translation' : 'Show translation'}
                  >
                    {visibleLines.has(line.id)
                      ? <EyeOff size={13} className="text-muted-foreground" />
                      : <Eye size={13} className="text-muted-foreground" />}
                  </button>
                  <button
                    onClick={() => speak(line.jp)}
                    className="btn-press p-1.5 rounded-lg hover:bg-card-elevated transition-colors"
                  >
                    <Volume2 size={13} className="text-primary" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Vocabulary */}
          <div className="rounded-xl border border-border bg-card p-5 mb-5">
            <h3 className="text-sm font-semibold text-foreground mb-3">Key Vocabulary</h3>
            <div className="flex flex-wrap gap-2">
              {selected.vocab.map((v) => (
                <button
                  key={v.id}
                  onClick={() => speak(v.jp)}
                  className="btn-press flex items-center gap-2 px-3 py-2 rounded-lg bg-card-elevated border border-border hover:border-primary transition-all"
                >
                  <span className="font-sans-jp text-sm font-semibold text-foreground">{v.jp}</span>
                  <span className="text-xs text-muted-foreground">{v.en}</span>
                  <Volume2 size={11} className="text-primary" />
                </button>
              ))}
            </div>
          </div>

          {/* Quiz */}
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-foreground">Comprehension Quiz</h3>
              {showResults && (
                <span
                  className="text-sm font-semibold"
                  style={{ color: score === selected.quiz.length ? 'var(--jlpt-n5)' : 'var(--primary)' }}
                >
                  {score}/{selected.quiz.length} correct
                </span>
              )}
            </div>
            <div className="space-y-4">
              {selected.quiz.map((q) => (
                <div key={q.id}>
                  <p className="text-sm font-semibold text-foreground mb-2">{q.question}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {q.options.map((opt, i) => {
                      const chosen = quizAnswers[q.id] === i;
                      const correct = i === q.answer;
                      let bg = 'var(--card-elevated)';
                      let border = 'var(--border)';
                      let color = 'var(--foreground)';
                      if (showResults && correct) { bg = 'var(--jlpt-n5-dim)'; border = 'var(--jlpt-n5)'; color = 'var(--jlpt-n5)'; }
                      if (showResults && chosen && !correct) { bg = 'var(--primary-dim)'; border = 'var(--primary)'; color = 'var(--primary)'; }
                      else if (!showResults && chosen) { bg = 'var(--primary-dim)'; border = 'var(--primary)'; color = 'var(--primary)'; }
                      return (
                        <button
                          key={`${q.id}-opt-${i}`}
                          onClick={() => !showResults && setQuizAnswers((prev) => ({ ...prev, [q.id]: i }))}
                          className="btn-press p-3 rounded-lg border text-sm text-left transition-all flex items-center gap-2"
                          style={{ background: bg, borderColor: border, color }}
                        >
                          {showResults && correct && <CheckCircle size={13} />}
                          {showResults && chosen && !correct && <XCircle size={13} />}
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
            {!showResults ? (
              <button
                onClick={() => setShowResults(true)}
                disabled={Object.keys(quizAnswers).length < selected.quiz.length}
                className="btn-press w-full mt-4 py-2.5 rounded-lg text-sm font-semibold text-white disabled:opacity-40"
                style={{ background: 'var(--primary)' }}
              >
                Check Answers
              </button>
            ) : (
              <button
                onClick={() => { setQuizAnswers({}); setShowResults(false); }}
                className="btn-press w-full mt-4 py-2.5 rounded-lg text-sm font-semibold border border-border bg-card-elevated text-foreground"
              >
                Try Again
              </button>
            )}
          </div>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="max-w-screen-xl mx-auto px-4 lg:px-6 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground mb-1">読解 Reading</h1>
          <p className="text-sm text-muted-foreground">Improve reading comprehension with graded passages</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {passages.map((p) => (
            <div
              key={p.id}
              onClick={() => setSelected(p)}
              className="card-hover rounded-xl border border-border bg-card p-5 cursor-pointer"
              style={{ borderTop: `3px solid ${levelColor(p.level)}` }}
            >
              <div className="flex items-center justify-between mb-3">
                <div
                  className="px-2 py-0.5 rounded text-xs font-bold font-mono"
                  style={{ background: `${levelColor(p.level)}22`, color: levelColor(p.level) }}
                >
                  {p.level}
                </div>
                <span className="text-xs text-muted-foreground">{p.wordCount} words</span>
              </div>
              <h3 className="text-base font-bold text-foreground mb-0.5">{p.title}</h3>
              <p className="font-sans-jp text-sm text-muted-foreground mb-2">{p.titleJp}</p>
              <p className="text-xs text-foreground-subtle mb-4">{p.difficulty} · {p.lines.length} sentences</p>
              <button
                className="btn-press w-full flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-semibold text-white"
                style={{ background: levelColor(p.level) }}
              >
                📖 Start Reading
              </button>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
