'use client';
import React, { useState, useRef } from 'react';
import AppLayout from '@/components/AppLayout';
import { Volume2, Play, Square, ChevronLeft, CheckCircle, XCircle } from 'lucide-react';

/* =========================================================
   LISTENING DATA
   ========================================================= */
const dialogues = [
  {
    id: 'dlg-001',
    level: 'N5',
    topic: 'At the Station',
    topicJp: '駅で',
    lineCount: 6,
    preview: 'Asking for directions to the platform',
    script: [
      { id: 'l1', speaker: 'Tanaka', jp: 'すみません、新幹線のホームはどこですか？', en: 'Excuse me, where is the Shinkansen platform?' },
      { id: 'l2', speaker: 'Staff',  jp: '三番ホームです。エレベーターで上に行ってください。', en: "It's platform 3. Please go up by elevator." },
      { id: 'l3', speaker: 'Tanaka', jp: 'ありがとうございます。何時に出発しますか？', en: 'Thank you. What time does it depart?' },
      { id: 'l4', speaker: 'Staff',  jp: '次の新幹線は十時三十分に出発します。', en: 'The next Shinkansen departs at 10:30.' },
      { id: 'l5', speaker: 'Tanaka', jp: 'わかりました。切符はどこで買えますか？', en: 'I see. Where can I buy a ticket?' },
      { id: 'l6', speaker: 'Staff',  jp: '自動券売機はあちらにあります。', en: 'The ticket machines are over there.' },
    ],
    phrases: [
      { id: 'p1', jp: 'すみません', en: 'Excuse me' },
      { id: 'p2', jp: 'どこですか', en: 'Where is it?' },
      { id: 'p3', jp: 'ありがとうございます', en: 'Thank you very much' },
    ],
    quiz: [
      { id: 'q1', question: 'Which platform is the Shinkansen on?', options: ['Platform 1', 'Platform 2', 'Platform 3', 'Platform 4'], answer: 2 },
      { id: 'q2', question: 'What time does the next Shinkansen depart?', options: ['10:00', '10:15', '10:30', '11:00'], answer: 2 },
    ],
  },
  {
    id: 'dlg-002',
    level: 'N5',
    topic: 'At the Restaurant',
    topicJp: 'レストランで',
    lineCount: 5,
    preview: 'Ordering food and asking about the menu',
    script: [
      { id: 'l1', speaker: 'Waiter',   jp: 'いらっしゃいませ。何名様ですか？', en: 'Welcome. How many people?' },
      { id: 'l2', speaker: 'Customer', jp: '二人です。窓際の席はありますか？', en: 'Two people. Do you have a window seat?' },
      { id: 'l3', speaker: 'Waiter',   jp: 'はい、こちらへどうぞ。ご注文はお決まりですか？', en: 'Yes, this way please. Are you ready to order?' },
      { id: 'l4', speaker: 'Customer', jp: 'ラーメンと餃子をください。', en: "I'll have ramen and gyoza please." },
      { id: 'l5', speaker: 'Waiter',   jp: 'かしこまりました。少々お待ちください。', en: 'Certainly. Please wait a moment.' },
    ],
    phrases: [
      { id: 'p1', jp: 'いらっしゃいませ', en: 'Welcome (to a shop)' },
      { id: 'p2', jp: 'ご注文はお決まりですか', en: 'Are you ready to order?' },
      { id: 'p3', jp: 'かしこまりました', en: 'Certainly (formal)' },
    ],
    quiz: [
      { id: 'q1', question: 'How many people are dining?', options: ['1', '2', '3', '4'], answer: 1 },
      { id: 'q2', question: 'What did the customer order?', options: ['Sushi and miso soup', 'Ramen and gyoza', 'Tempura and rice', 'Udon and salad'], answer: 1 },
    ],
  },
  {
    id: 'dlg-003',
    level: 'N4',
    topic: 'Job Interview',
    topicJp: '就職面接',
    lineCount: 6,
    preview: 'A formal job interview conversation',
    script: [
      { id: 'l1', speaker: 'Interviewer', jp: '本日はお越しいただきありがとうございます。', en: 'Thank you for coming today.' },
      { id: 'l2', speaker: 'Applicant',   jp: 'こちらこそ、よろしくお願いいたします。', en: 'Thank you for having me.' },
      { id: 'l3', speaker: 'Interviewer', jp: '自己紹介をお願いできますか？', en: 'Could you please introduce yourself?' },
      { id: 'l4', speaker: 'Applicant',   jp: '田中と申します。大学でコンピューターサイエンスを専攻しました。', en: 'My name is Tanaka. I majored in computer science at university.' },
      { id: 'l5', speaker: 'Interviewer', jp: 'なぜ当社を志望されましたか？', en: 'Why did you apply to our company?' },
      { id: 'l6', speaker: 'Applicant',   jp: '御社の革新的な技術に魅力を感じました。', en: "I was attracted by your company's innovative technology." },
    ],
    phrases: [
      { id: 'p1', jp: 'よろしくお願いいたします', en: 'I look forward to working with you' },
      { id: 'p2', jp: '自己紹介', en: 'Self-introduction' },
      { id: 'p3', jp: '志望動機', en: 'Reason for applying' },
    ],
    quiz: [
      { id: 'q1', question: 'What did Tanaka major in?', options: ['Business', 'Computer Science', 'Engineering', 'Literature'], answer: 1 },
    ],
  },
];

/* =========================================================
   HELPERS
   ========================================================= */
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
  const map = {
    N5: 'var(--jlpt-n5)',
    N4: 'var(--jlpt-n4)',
    N3: 'var(--jlpt-n3)',
    N2: 'var(--jlpt-n2)',
    N1: 'var(--jlpt-n1)',
  };
  return map[level] || 'var(--primary)';
};

/* =========================================================
   LISTENING PAGE COMPONENT
   ========================================================= */
export default function ListeningPage() {
  const [selected, setSelected] = useState(null);
  const [activeLine, setActiveLine] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const playRef = useRef(false);

  /* ── Play full dialogue sequentially ── */
  const playDialogue = async (script) => {
    if (isPlaying) {
      window.speechSynthesis?.cancel();
      setIsPlaying(false);
      setActiveLine(null);
      playRef.current = false;
      return;
    }
    setIsPlaying(true);
    playRef.current = true;

    for (const line of script) {
      if (!playRef.current) break;
      setActiveLine(line.id);
      await new Promise((resolve) => {
        if (!window.speechSynthesis) { resolve(); return; }
        const utt = new SpeechSynthesisUtterance(line.jp);
        utt.lang = 'ja-JP';
        utt.rate = 0.85;
        utt.onend = () => setTimeout(resolve, 1200);
        window.speechSynthesis.speak(utt);
      });
    }
    setIsPlaying(false);
    setActiveLine(null);
    playRef.current = false;
  };

  /* ══════════════════════════════════════════
     DETAIL VIEW (dialogue selected)
  ══════════════════════════════════════════ */
  if (selected) {
    const score = selected.quiz.filter(q => quizAnswers[q.id] === q.answer).length;

    return (
      <AppLayout>
        <div className="max-w-screen-lg mx-auto px-4 lg:px-6 py-6">

          {/* Back button */}
          <button
            onClick={() => {
              setSelected(null);
              setQuizAnswers({});
              setShowResults(false);
              window.speechSynthesis?.cancel();
            }}
            className="btn-press flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-5 transition-colors"
          >
            <ChevronLeft size={16} /> Back to dialogues
          </button>

          {/* Title row */}
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
              <h1 className="text-xl font-bold text-foreground">{selected.topic}</h1>
              <p className="text-sm font-sans-jp text-muted-foreground">{selected.topicJp}</p>
            </div>
          </div>

          {/* ── Audio player / script ── */}
          <div className="rounded-xl border border-border bg-card p-5 mb-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'var(--primary-dim)' }}>
                  🎙️
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Read Aloud</p>
                  <p className="text-xs text-muted-foreground">Uses Web Speech API</p>
                </div>
              </div>
              <button
                onClick={() => playDialogue(selected.script)}
                className="btn-press flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all"
                style={{ background: isPlaying ? 'var(--jlpt-n3)' : 'var(--primary)' }}
              >
                {isPlaying ? <><Square size={13} /> Stop</> : <><Play size={13} /> Play Dialogue</>}
              </button>
            </div>

            {/* Script lines */}
            <div className="space-y-3">
              {selected.script.map((line) => (
                <div
                  key={line.id}
                  className="flex gap-3 p-3 rounded-lg transition-all"
                  style={{
                    background: activeLine === line.id ? 'var(--primary-dim)' : 'var(--card-elevated)',
                    borderLeft: activeLine === line.id ? '3px solid var(--primary)' : '3px solid transparent',
                  }}
                >
                  <div className="flex-shrink-0">
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-card border border-border text-muted-foreground">
                      {line.speaker}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-sans-jp text-sm text-foreground mb-0.5">{line.jp}</p>
                    <p className="text-xs text-muted-foreground italic">{line.en}</p>
                  </div>
                  <button
                    onClick={() => speak(line.jp)}
                    className="btn-press p-1.5 rounded-lg hover:bg-card transition-colors flex-shrink-0"
                  >
                    <Volume2 size={14} className="text-primary" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* ── Key phrases ── */}
          <div className="rounded-xl border border-border bg-card p-5 mb-5">
            <h3 className="text-sm font-semibold text-foreground mb-3">Key Phrases</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {selected.phrases.map((p) => (
                <div key={p.id} className="flex items-center justify-between p-3 rounded-lg bg-card-elevated border border-border">
                  <div>
                    <p className="font-sans-jp text-sm font-semibold text-foreground">{p.jp}</p>
                    <p className="text-xs text-muted-foreground">{p.en}</p>
                  </div>
                  <button
                    onClick={() => speak(p.jp)}
                    className="btn-press p-1.5 rounded-lg hover:bg-card transition-colors"
                  >
                    <Volume2 size={13} className="text-primary" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* ── Comprehension quiz ── */}
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
                      const chosen  = quizAnswers[q.id] === i;
                      const correct = i === q.answer;
                      let bg     = 'var(--card-elevated)';
                      let border = 'var(--border)';
                      let color  = 'var(--foreground)';
                      if (showResults && chosen && correct)  { bg = 'var(--jlpt-n5-dim)'; border = 'var(--jlpt-n5)'; color = 'var(--jlpt-n5)'; }
                      else if (showResults && chosen)        { bg = 'var(--primary-dim)'; border = 'var(--primary)'; color = 'var(--primary)'; }
                      else if (showResults && correct)       { bg = 'var(--jlpt-n5-dim)'; border = 'var(--jlpt-n5)'; color = 'var(--jlpt-n5)'; }
                      else if (chosen)                       { bg = 'var(--primary-dim)'; border = 'var(--primary)'; color = 'var(--primary)'; }
                      return (
                        <button
                          key={`${q.id}-opt-${i}`}
                          onClick={() => !showResults && setQuizAnswers(prev => ({ ...prev, [q.id]: i }))}
                          className="btn-press p-3 rounded-lg border text-sm text-left transition-all flex items-center gap-2"
                          style={{ background: bg, borderColor: border, color }}
                        >
                          {showResults && chosen && correct  && <CheckCircle size={13} />}
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
                className="btn-press w-full mt-4 py-2.5 rounded-lg text-sm font-semibold text-white transition-all disabled:opacity-40"
                style={{ background: 'var(--primary)' }}
              >
                Check Answers
              </button>
            ) : (
              <button
                onClick={() => { setQuizAnswers({}); setShowResults(false); }}
                className="btn-press w-full mt-4 py-2.5 rounded-lg text-sm font-semibold border border-border bg-card-elevated text-foreground transition-all"
              >
                Try Again
              </button>
            )}
          </div>

        </div>
      </AppLayout>
    );
  }

  /* ══════════════════════════════════════════
     LIST VIEW (no dialogue selected)
  ══════════════════════════════════════════ */
  return (
    <AppLayout>
      <div className="max-w-screen-xl mx-auto px-4 lg:px-6 py-6">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground mb-1">聴解 Listening</h1>
          <p className="text-sm text-muted-foreground">Practice listening comprehension with real dialogues</p>
        </div>

        {/* Dialogue cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {dialogues.map((dlg) => (
            <div
              key={dlg.id}
              onClick={() => setSelected(dlg)}
              className="card-hover rounded-xl border border-border bg-card p-5 cursor-pointer"
              style={{ borderTop: `3px solid ${levelColor(dlg.level)}` }}
            >
              <div className="flex items-center justify-between mb-3">
                <div
                  className="px-2 py-0.5 rounded text-xs font-bold font-mono"
                  style={{ background: `${levelColor(dlg.level)}22`, color: levelColor(dlg.level) }}
                >
                  {dlg.level}
                </div>
                <span className="text-xs text-muted-foreground">{dlg.lineCount} lines</span>
              </div>
              <h3 className="text-base font-bold text-foreground mb-0.5">{dlg.topic}</h3>
              <p className="font-sans-jp text-sm text-muted-foreground mb-2">{dlg.topicJp}</p>
              <p className="text-xs text-foreground-subtle mb-4">{dlg.preview}</p>
              <button
                className="btn-press w-full flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-semibold text-white transition-all"
                style={{ background: levelColor(dlg.level) }}
              >
                🎧 Start Listening
              </button>
            </div>
          ))}
        </div>

      </div>
    </AppLayout>
  );
}
