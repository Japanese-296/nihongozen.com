'use client';
import React, { useState } from 'react';
import AppLayout from '@/components/AppLayout';
import { Volume2, ChevronDown, ChevronUp } from 'lucide-react';

/* =========================================================
   GRAMMAR DATA
   ========================================================= */
const grammarPoints = [
  {
    id: 'g-001',
    pattern: '〜は〜です',
    level: 'N5',
    title: 'Topic Marker + Copula',
    explanation: 'Used to state that something is something. は (wa) marks the topic, and です (desu) is the polite copula meaning "is/am/are".',
    structure: '[Topic] は [Noun/Adjective] です',
    examples: [
      { id: 'ex-1', jp: '私は学生です。', en: 'I am a student.' },
      { id: 'ex-2', jp: 'これは本です。', en: 'This is a book.' },
      { id: 'ex-3', jp: '田中さんは先生です。', en: 'Mr. Tanaka is a teacher.' },
    ],
  },
  {
    id: 'g-002',
    pattern: '〜が好きです',
    level: 'N5',
    title: 'Expressing Likes',
    explanation: 'Used to express that you like something. が (ga) marks the object of liking, and 好き (suki) means "like/fond of".',
    structure: '[Subject] は [Object] が 好きです',
    examples: [
      { id: 'ex-1', jp: '私は音楽が好きです。', en: 'I like music.' },
      { id: 'ex-2', jp: '彼女は猫が好きです。', en: 'She likes cats.' },
      { id: 'ex-3', jp: '日本語が好きですか？', en: 'Do you like Japanese?' },
    ],
  },
  {
    id: 'g-003',
    pattern: '〜てください',
    level: 'N5',
    title: 'Polite Request',
    explanation: 'Used to make polite requests. Attach てください to the て-form of a verb to ask someone to do something.',
    structure: '[Verb て-form] ください',
    examples: [
      { id: 'ex-1', jp: 'ゆっくり話してください。', en: 'Please speak slowly.' },
      { id: 'ex-2', jp: 'ここに名前を書いてください。', en: 'Please write your name here.' },
      { id: 'ex-3', jp: '窓を開けてください。', en: 'Please open the window.' },
    ],
  },
  {
    id: 'g-004',
    pattern: '〜ことができる',
    level: 'N4',
    title: 'Expressing Ability',
    explanation: 'Used to express ability or possibility. Attach ことができる to the dictionary form of a verb.',
    structure: '[Verb dictionary form] ことができる',
    examples: [
      { id: 'ex-1', jp: '日本語を話すことができます。', en: 'I can speak Japanese.' },
      { id: 'ex-2', jp: '泳ぐことができますか？', en: 'Can you swim?' },
      { id: 'ex-3', jp: '明日来ることができません。', en: 'I cannot come tomorrow.' },
    ],
  },
  {
    id: 'g-005',
    pattern: '〜ために',
    level: 'N4',
    title: 'Purpose / For the Sake of',
    explanation: 'Used to express purpose or reason. Attach ために to the dictionary form of a verb or a noun.',
    structure: '[Verb dict. form / Noun の] ために',
    examples: [
      { id: 'ex-1', jp: '日本語を勉強するために、毎日練習します。', en: 'In order to study Japanese, I practice every day.' },
      { id: 'ex-2', jp: '健康のために、運動します。', en: 'For the sake of health, I exercise.' },
      { id: 'ex-3', jp: '試験に合格するために、頑張ります。', en: 'I will work hard in order to pass the exam.' },
    ],
  },
  {
    id: 'g-006',
    pattern: '〜ば〜ほど',
    level: 'N3',
    title: 'The More... The More...',
    explanation: 'Used to express that as one thing increases, another also increases proportionally.',
    structure: '[Verb ば-form] [Verb dict. form] ほど',
    examples: [
      { id: 'ex-1', jp: '練習すればするほど上手になります。', en: 'The more you practice, the better you become.' },
      { id: 'ex-2', jp: '食べれば食べるほど太ります。', en: 'The more you eat, the more weight you gain.' },
      { id: 'ex-3', jp: '勉強すればするほど、わかります。', en: 'The more you study, the more you understand.' },
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
   GRAMMAR PAGE COMPONENT
   ========================================================= */
export default function GrammarPage() {
  const [expanded, setExpanded] = useState(new Set(['g-001']));
  const [activeLevel, setActiveLevel] = useState('All');

  const levels = ['All', 'N5', 'N4', 'N3'];
  const filtered = activeLevel === 'All'
    ? grammarPoints
    : grammarPoints.filter(g => g.level === activeLevel);

  const toggle = (id) => {
    setExpanded(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <AppLayout>
      <div className="max-w-screen-lg mx-auto px-4 lg:px-6 py-6">

        {/* ── Header ── */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground mb-1">文法 Grammar</h1>
          <p className="text-sm text-muted-foreground">Master Japanese grammar patterns from N5 to N1</p>
        </div>

        {/* ── Level filter ── */}
        <div className="flex gap-2 mb-5">
          {levels.map(lv => (
            <button
              key={lv}
              onClick={() => setActiveLevel(lv)}
              className="btn-press px-4 py-2 rounded-lg text-sm font-semibold transition-all"
              style={{
                background: activeLevel === lv
                  ? (lv === 'All' ? 'var(--primary)' : `${levelColor(lv)}22`)
                  : 'var(--card-elevated)',
                color: activeLevel === lv
                  ? (lv === 'All' ? '#fff' : levelColor(lv))
                  : 'var(--muted-foreground)',
                border: `1px solid ${activeLevel === lv
                  ? (lv === 'All' ? 'var(--primary)' : levelColor(lv))
                  : 'var(--border)'}`,
              }}
            >
              {lv}
            </button>
          ))}
        </div>

        {/* ── Grammar cards ── */}
        <div className="space-y-3">
          {filtered.map((g) => (
            <div key={g.id} className="rounded-xl border border-border bg-card overflow-hidden">

              {/* Card header / toggle row */}
              <button
                onClick={() => toggle(g.id)}
                className="btn-press w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-card-elevated"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="px-2 py-0.5 rounded text-xs font-bold font-mono flex-shrink-0"
                    style={{ background: `${levelColor(g.level)}22`, color: levelColor(g.level) }}
                  >
                    {g.level}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-sans-jp text-base font-bold text-foreground">{g.pattern}</span>
                      <button
                        onClick={(e) => { e.stopPropagation(); speak(g.pattern); }}
                        className="btn-press p-1 rounded hover:bg-card transition-colors"
                      >
                        <Volume2 size={13} className="text-primary" />
                      </button>
                    </div>
                    <p className="text-xs text-muted-foreground">{g.title}</p>
                  </div>
                </div>
                {expanded.has(g.id)
                  ? <ChevronUp size={16} className="text-muted-foreground flex-shrink-0" />
                  : <ChevronDown size={16} className="text-muted-foreground flex-shrink-0" />}
              </button>

              {/* Expanded body */}
              {expanded.has(g.id) && (
                <div className="px-5 pb-5 border-t border-border">
                  <p className="text-sm text-muted-foreground mt-4 mb-3 leading-relaxed">{g.explanation}</p>

                  {/* Structure */}
                  <div className="p-3 rounded-lg bg-card-elevated border border-border mb-4">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Structure</p>
                    <p className="font-mono text-sm text-foreground">{g.structure}</p>
                  </div>

                  {/* Examples */}
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Examples</p>
                  <div className="space-y-2">
                    {g.examples.map((ex) => (
                      <div
                        key={ex.id}
                        className="flex items-start gap-3 p-3 rounded-lg bg-card-elevated border border-border"
                      >
                        <div className="flex-1">
                          <p className="font-sans-jp text-sm text-foreground mb-0.5">{ex.jp}</p>
                          <p className="text-xs text-muted-foreground italic">{ex.en}</p>
                        </div>
                        <button
                          onClick={() => speak(ex.jp)}
                          className="btn-press p-1.5 rounded-lg hover:bg-card transition-colors flex-shrink-0"
                        >
                          <Volume2 size={13} className="text-primary" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </AppLayout>
  );
}
