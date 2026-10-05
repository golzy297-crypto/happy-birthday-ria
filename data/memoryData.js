/**
 * =====================================================================
 * OUR LITTLE CORNER OF TIME — "SINCE THE LAST TIME..."
 * 10 REVISED CHAPTERS (DHRUV & RIA'S STORY)
 * =====================================================================
 */

const memoryData = {
  // 1. COUPLE & METADATA
  couple: {
    herName: "Ria",              // Her name
    myName: "Dhruv",             // Your name
    herAge: 21,                  // Her age turning this year
    birthdayDate: "October 5",  // Her birthday
    tagline: "Since the last time…"
  },

  // 2. OPENING: The Callback & 10 Chapter List
  opening: {
    callbackBadge: "Season 2",
    preface: [
      "Last year, I tried to put our story into a video.",
      "Turns out, a lot can happen in a year."
    ],
    headline: "Since the last time…",
    subtitle: "You already know how our story started. This is everything that happened since.",
    chaptersList: [
      { num: "01", title: "Our First Paper Acceptance 📝", tag: "You were there" },
      { num: "02", title: "Our One-Year Squash Arc 🏸", tag: "365 days on court" },
      { num: "03", title: "ACL: The Comeback 📄 → 🏆", tag: "Bad reviews: 1. Us: 1." },
      { num: "04", title: "The Birthday Surprise 🎂", tag: "When you made me feel special" },
      { num: "05", title: "The Airport ✈️", tag: "The hardest goodbye" },
      { num: "06", title: "Long Distance 🌎", tag: "8,000 miles & FaceTimes" },
      { num: "07", title: "The Odds: 97.3% 📊", tag: "Calculated survival rate" },
      { num: "08", title: "Our Petty Fights™ ⚡", tag: "What was actually underneath" },
      { num: "09", title: "Things I Don't Say Enough About You ", tag: "The person you are" },
      { num: "10", title: "Today — Her Birthday 🎂", tag: "Happy 21st Birthday" }
    ]
  },

  // 3. CHAPTER 01 — FIRST PAPER ACCEPTANCE
  chapter1_firstPaper: {
    number: "01",
    title: "First Paper Acceptance 📝",
    badge: "Milestone",
    statusBadge: "ACCEPTED",
    photo: "assets/images/11.jpg",
    story: "You happened to be at my place when the email finally arrived saying our first research paper was accepted. It wasn't just about the publication itself—it became one of the happiest memories because you were physically right there in the room when it happened. Seeing your face light up and having you celebrate with me made it ten times sweeter.",
    quote: "One of the proudest moments of my academic life became a relationship memory because you were there."
  },

  // 4. CHAPTER 02 — OUR ONE-YEAR SQUASH ARC
  chapter2_squash: {
    number: "02",
    title: "Our One-Year Squash Arc 🏸",
    badge: "One Year on Court",
    video: "assets/videos/squash.mp4",
    poster: "assets/images/squash-poster.jpg",
    story: "How a completely random activity somehow became our ritual for an entire year. The rallies, the sweat, the missed shots we laughed off, the arguments over points and my funny actions.",
    stats: [
      { label: "Matches Played", value: "100+" },
      { label: "Laughs & Banters", value: "Countless" },
      { label: "Arguments Over Points", value: "Way too many(cheater saali)" },
      { label: "Post-Match Smoothies / Food", value: "Amar😋-p.s. i miss u and these kinda dates" }
    ]
  },

  // 5. CHAPTER 03 — ACL: THE COMEBACK
  chapter3_aclComeback: {
    number: "03",
    title: "ACL: The Comeback 📄 → 🏆",
    badge: "The Rebuttal & Triumph",
    badReviews: [
      { reviewer: "Reviewer 2", score: "2/5 — Borderline Reject", comment: "The methodology has gaps and baseline comparisons are insufficient." },
      { reviewer: "Reviewer 3", score: "2.5/5 — Weak Reject", comment: "Interesting premise, but requires significant empirical validation." }
    ],
    cookedQuote: "Yeah… they cooked us for real bhaii",
    rebuttalStory: "Initial reviews arrived and it was rough and disappointing at start. But instead of giving up, we locked in: REVISION MODE ACTIVATED. Endless late nights rewriting, running experiments, fixing arguments, and writing the rebuttal of a lifetime.",
    photo: "assets/images/7-2.jpg",
    finalVerdict: "ACCEPTED TO ACL 🏆",
    quotes: [
      "We'd already celebrated wins together. But this one felt different, because we knew what it took to get there.",
      "Temporary Failure: 1. Us: 1."
    ]
  },

  // 6. CHAPTER 04 — THE BIRTHDAY SURPRISE
  chapter4_birthdaySurprise: {
    number: "04",
    title: "The Birthday Surprise 🎂",
    badge: "Your Thoughtfulness",
    photo: "assets/images/birthday_surprise.png",
    symmetryNote: "This year you made my birthday feel special. I wanted to make sure you knew I never forgot how that felt.",
    story: "You put so much thought, effort, and care into surprising me on my birthday like showing up at midnight. If I ever failed to say it enough, please know: I noticed every single detail. You made me feel deeply valued, and this whole site is my way of returning that feeling to you today.",
    quote: "You gave me a feeling I will carry with me forever."
  },

  // 7. CHAPTER 05 — THE AIRPORT
  chapter5_airport: {
    number: "05",
    title: "The Airport ✈️",
    badge: "The Turning Point",
    date: "Departure to the US",
    photo: "assets/images/airport.png",
    story: "The hardest goodbye. I know distance has made us what we r right now. But trust me we still have that thing in us to make things happen like fucking u wore the ring today😭😭. so u love me equally too...",
    quote: "The exact moment ordinary days stopped being ordinary."
  },

  // 8. CHAPTER 06 — LONG DISTANCE
  chapter6_longDistance: {
    number: "06",
    title: "Long Distance 🌎",
    badge: "8,000 Miles",
    timezones: {
      her: { city: "Mumbai", zone: "IST (UTC+5:30)" },
      him: { city: "Los Angeles", zone: "PT (UTC-7/-8)" }
    },
    story: "FaceTimes while one of us was getting ready for bed and the other was just waking up. Calculating time zones before calling. Taking screenshots of each other laughing on video calls. Sending random photos of our meals, streets, and complaints. Missing being around and hanging out in person. Distance was hard, but it also made us appreciate the little things we could do to stay connected.",
    screenshots: [
      { id: "dist-1", photo: "assets/images/vc.jpg", caption: "FaceTimes across mismatched hours" },
      { id: "dist-2", photo: "assets/images/kkk.jpg", caption: "Our KKK dates" }
    ]
  },

  // 9. CHAPTER 07 — THE 97.3%
  chapter7_odds: {
    number: "07",
    title: "The Odds: 97.3% 📊",
    badge: "Relationship Survival status",
    statValue: "97.3%",
    subtitle: "Empirical probability of making it through 8,000 miles, 100+ squash matches, and my petty attitude to fight which i really dont wanna have anymore cause you are a gem. I am very very sorry❤️",
    verdict: "Accuracy drops significantly during arguments.",
    metrics: [
      { label: "Care for each other", value: "99.1%" },
      { label: "Love for each other", value: "98.5%" },
      { label: "Effort we put into us", value: "100.0%" },
      { label: "Choosing each other after every fight", value: "∞" }
    ],
    note: "Optimal outcome across every single scenario."
  },

  // 10. CHAPTER 08 — OUR PETTY FIGHTS™
  chapter8_pettyFights: {
    number: "08",
    title: "Our Petty Fights™ ⚡",
    badge: "What Was Underneath",
    playfulOpening: "And apparently, 8,000 miles of distance wasn't enough of a challenge, so I decided to fight about stupid things too.",
    sincereReflection: `It's easy to label things as "petty" from one side of the phone. But distance amplifies silence, and over a screen, tone is so easily misunderstood.

I know that underneath, some of what hurt you wasn't petty at all. Especially feeling unappreciated, or feeling like my words focused on what went wrong instead of acknowledging everything that was right.

Being so rude and not getting what you wanted was wrong of me because it dismissed how you actually felt. I see that now, and I am genuinely sorry for making you feel unvalued.`,
    quote: "Learning that under silly arguments were things that genuinely mattered to you."
  },

  // 11. CHAPTER 09 — THINGS I DON'T SAY ENOUGH ABOUT YOU
  chapter9_appreciation: {
    number: "09",
    title: "Things I Don't Say Enough About You",
    subtitle: "Not about what you did for me. Just about who you are as a person.",
    traits: [
      {
        id: "trait-1",
        lead: "You remember tiny details",
        text: "You remember the tiny things I say and the things I want to do, and you actually make them happen. You remember the little things that make me happy and always find ways to make me feel loved. Your love language is so different from mine, and sometimes you show your love in ways I would never even think of—but somehow, they always make me feel loved and cared for."      },
      {
        id: "trait-2",
        lead: "Your joy for other people's success",
        text: "I've always admired how genuinely happy you can be when someone you care about succeeds. There is zero jealousy in your support; when you love someone, you truly want them to win."
      },
      {
        id: "trait-3",
        lead: "The way you care",
        text: "I know you're not the most emotional person, and you don't always show your feelings the way I do. But I know they're there. I know you care about me, and honestly, that's all I've ever wanted. I don't need you to love the way I do—I just want your kind of love. Because at the end of all of this, you're still the person I want to be with for the rest of my life."
      },
      {
        id: "trait-4",
        lead: "Your ability to fight back",
        text: "I know the GRE didn't go the way you wanted it to, and I know how much stress you're carrying with all these applications right now. But I've seen you fight back from things before, and I know you'll do it again. Trust me when I say that God has bigger and better plans for you. Somewhere out there is the place you're meant to be, and I genuinely believe He has already decided something incredible for you. You just haven't found out what it is yet."
      },
      {
        id: "trait-5",
        lead: "That extraordinary mind of yours",
        text: "You're such a smartass, and I mean that in the best possible way. Fucking 5+ papers under your belt, and somehow you still manage to doubt yourself. Whether it was ACL, ICMI, or any of the ideas you've worked on, I've always been amazed by how deeply and thoughtfully you think about things. Your mind genuinely blows me away sometimes. I don't know if I'll ever reach that kind of brilliance, but I do know I'll always be ridiculously proud of yours."
      },
    ]
  },

  // 12. CHAPTER 10 — TODAY (HER BIRTHDAY & UNWRITTEN ENDING)
  chapter10_today: {
    number: "10",
    title: "Today — Her Birthday 🎂",
    badge: "Happy 21st Birthday",
    transitionLines: [
      "Last year's video ended with our story.",
      "This one doesn't.",
      "Because I genuinely don't know what happens next.",
      "But today isn't about figuring that out.",
      "Today is about you."
    ],
    birthdayWish: {
      headline: "Happy Birthday, Ria.",
      wishes: [
        "I hope this year is kind to you and may you fulfill all your aspirations, I dont have any doubt about how crazy these 6 months are gonna be for you, cause ik you are gonna get the best university where you will rise and shine.",
        "I hope you do things that scare you, find things that excite you, laugh until your stomach hurts, and become even more of the person you're meant to be.",
        "And wherever I fit into that story, I'm just grateful I got to be in these chapters."
      ]
    },
    finalLetter: {
      salutation: "Dear Ria,",
      body: `Happy Birthday.

When I look back at everything that happened since the last time—the first paper acceptance, an entire year on the squash court, surviving ACL reviews together, your birthday surprise for me, the hardest goodbye at the airport, and learning how to navigate distance—I realized how much life we packed into twelve months.

I know things between us are in an uncertain place right now. I know there were times I made you feel unvalued, and times my words focused on what was wrong instead of celebrating everything you do right. I am genuinely sorry for the times I made you feel unseen and demotivating you at times. I know I have a lot to work on, and I am committed to doing that.

I didn't make this website to resolve our relationship or to force an ending on chapter 10. The ending belongs to both of us, and it remains unwritten.

Today is solely about you. Celebrating the 21 years of life that made you the kind, resilient, witty, and unforgettable person you are. Thank you for letting me be part of your story.`,
      closing: "With all my love and gratitude,",
      signature: "Dhruv"
    }
  }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = memoryData;
}
if (typeof window !== 'undefined') {
  window.memoryData = memoryData;
}
