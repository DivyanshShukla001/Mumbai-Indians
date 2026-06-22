// ===========================
//  data.js — Mumbai Indians
//  All team data lives here
// ===========================

const MI = {

  // ── SCHEDULE ──────────────────────────────────────────
  schedule: [
    { day: "22", month: "Mar", teams: "MI vs RCB", venue: "Wankhede Stadium, Mumbai", time: "7:30 PM IST", status: "won", result: "MI won by 8 wkts", type: "home" },
    { day: "28", month: "Mar", teams: "MI vs KKR", venue: "Eden Gardens, Kolkata", time: "7:30 PM IST", status: "lost", result: "KKR won by 14 runs", type: "away" },
    { day: "02", month: "Apr", teams: "MI vs CSK", venue: "Wankhede Stadium, Mumbai", time: "3:30 PM IST", status: "won", result: "MI won by 5 wkts", type: "home" },
    { day: "07", month: "Apr", teams: "MI vs PBKS", venue: "Punjab Cricket Association, Mohali", time: "7:30 PM IST", status: "won", result: "MI won by 20 runs", type: "away" },
    { day: "11", month: "Apr", teams: "MI vs DC", venue: "Wankhede Stadium, Mumbai", time: "7:30 PM IST", status: "lost", result: "DC won by 6 wkts", type: "home" },
    { day: "16", month: "Apr", teams: "MI vs SRH", venue: "Rajiv Gandhi IS, Hyderabad", time: "7:30 PM IST", status: "won", result: "MI won by 3 wkts", type: "away" },
    { day: "20", month: "Apr", teams: "MI vs LSG", venue: "Wankhede Stadium, Mumbai", time: "3:30 PM IST", status: "live", result: "MI 142/4 (16.3 ov) vs LSG 165/6", type: "home" },
    { day: "28", month: "Apr", teams: "MI vs KKR", venue: "Wankhede Stadium, Mumbai", time: "7:30 PM IST", status: "upcoming", result: "", type: "home" },
    { day: "03", month: "May", teams: "MI vs GT", venue: "Narendra Modi Stadium, Ahmedabad", time: "7:30 PM IST", status: "upcoming", result: "", type: "away" },
    { day: "09", month: "May", teams: "MI vs RR", venue: "Wankhede Stadium, Mumbai", time: "7:30 PM IST", status: "upcoming", result: "", type: "home" },
    { day: "15", month: "May", teams: "MI vs CSK", venue: "MA Chidambaram, Chennai", time: "7:30 PM IST", status: "upcoming", result: "", type: "away" },
    { day: "20", month: "May", teams: "MI vs RCB", venue: "Wankhede Stadium, Mumbai", time: "3:30 PM IST", status: "upcoming", result: "", type: "home" },
  ],

  // ── PLAYERS ───────────────────────────────────────────
  players: [
    {
      name: "Rohit Sharma", role: "batsman", country: "India 🇮🇳",
      initial: "RS", number: "45",
      keyStat: "Runs: 6,211 | Avg: 29.5",
      stats: { runs: "6,211", avg: "29.5", sr: "130.0" },
      bio: "Rohit Sharma, dubbed 'Hitman', is the most successful IPL captain ever with 5 titles under his belt. An explosive opener known for his elegant strokeplay and six-hitting ability. His record of 264 sixes in IPL is unmatched.",
      isCaptain: false
    },
    {
      name: "Hardik Pandya", role: "allrounder", country: "India 🇮🇳",
      initial: "HP", number: "33",
      keyStat: "Runs: 2,200 | Wkts: 84",
      stats: { runs: "2,200", wickets: "84", economy: "8.6" },
      bio: "Hardik Pandya is Mumbai Indians' captain for 2025, an explosive all-rounder who can change the game with both bat and ball. Known for his power hitting in the death overs and ability to bowl at crucial moments.",
      isCaptain: true
    },
    {
      name: "Jasprit Bumrah", role: "bowler", country: "India 🇮🇳",
      initial: "JB", number: "93",
      keyStat: "Wickets: 170 | Econ: 6.6",
      stats: { wickets: "170", economy: "6.6", average: "22.1" },
      bio: "The world's best fast bowler. Bumrah's unorthodox action and devastating yorkers make him virtually unplayable, especially in the death overs. He is the highest wicket-taker for MI in IPL history.",
      isCaptain: false
    },
    {
      name: "Suryakumar Yadav", role: "batsman", country: "India 🇮🇳",
      initial: "SKY", number: "63",
      keyStat: "Runs: 3,126 | SR: 148.9",
      stats: { runs: "3,126", sr: "148.9", avg: "32.0" },
      bio: "SKY is the T20 magician who plays shots others can only dream of. His 360° batting approach and ability to hit into any part of the ground has made him one of MI's most dangerous batsmen. Currently ranked No.1 T20I batter in the world.",
      isCaptain: false
    },
    {
      name: "Ishan Kishan", role: "wk", country: "India 🇮🇳",
      initial: "IK", number: "32",
      keyStat: "Runs: 2,644 | Avg: 27.5",
      stats: { runs: "2,644", sr: "136.1", dismissals: "78" },
      bio: "Ishan Kishan is MI's explosive wicket-keeper batsman who can dismantle any bowling attack at the top of the order. Known for his big-hitting ability and nimble glovework behind the stumps.",
      isCaptain: false
    },
    {
      name: "Tim David", role: "batsman", country: "Singapore 🇸🇬",
      initial: "TD", number: "8",
      keyStat: "Runs: 1,134 | SR: 157.8",
      stats: { runs: "1,134", sr: "157.8", avg: "35.4" },
      bio: "Tim David is MI's finisher extraordinaire. The Singaporean power hitter joined MI in 2022 and has been a revelation with his ability to clear the ropes at will. A vital cog in the MI batting machinery.",
      isCaptain: false
    },
    {
      name: "Piyush Chawla", role: "bowler", country: "India 🇮🇳",
      initial: "PC", number: "4",
      keyStat: "Wickets: 192 | Econ: 7.7",
      stats: { wickets: "192", economy: "7.7", average: "26.2" },
      bio: "Veteran leg-spinner Piyush Chawla brings guile and experience to the MI bowling attack. The second-highest wicket-taker in IPL history, he is a match-winner on pitches that offer turn.",
      isCaptain: false
    },
    {
      name: "Tilak Varma", role: "batsman", country: "India 🇮🇳",
      initial: "TV", number: "9",
      keyStat: "Runs: 912 | Avg: 38.0",
      stats: { runs: "912", sr: "140.0", avg: "38.0" },
      bio: "Tilak Varma is MI's exciting young talent who made a massive impression in recent seasons with his composed batting and ability to play match-defining innings under pressure.",
      isCaptain: false
    },
    {
      name: "Naman Dhir", role: "allrounder", country: "India 🇮🇳",
      initial: "ND", number: "77",
      keyStat: "Runs: 468 | Wkts: 11",
      stats: { runs: "468", wickets: "11", sr: "142.5" },
      bio: "Naman Dhir is an exciting young all-rounder who bats with authority and bowls useful off-spin. A rising star in the MI setup with a bright future ahead.",
      isCaptain: false
    },
    {
      name: "Gerald Coetzee", role: "bowler", country: "South Africa 🇿🇦",
      initial: "GC", number: "88",
      keyStat: "Wickets: 28 | Econ: 9.1",
      stats: { wickets: "28", economy: "9.1", average: "24.4" },
      bio: "Gerald Coetzee is MI's South African pacer who generates extreme pace and bounce. His ability to take wickets in powerplay makes him a valuable addition to the MI bowling attack.",
      isCaptain: false
    },
    {
      name: "Romario Shepherd", role: "allrounder", country: "West Indies 🇼🇸",
      initial: "RS", number: "11",
      keyStat: "Runs: 315 | Wkts: 19",
      stats: { runs: "315", wickets: "19", economy: "9.8" },
      bio: "Romario Shepherd is MI's West Indian match-winner who can bat aggressively lower down the order and bowl with genuine pace. His performances have been crucial to MI's middle-overs dominance.",
      isCaptain: false
    },
    {
      name: "Nuwan Thushara", role: "bowler", country: "Sri Lanka 🇱🇰",
      initial: "NT", number: "55",
      keyStat: "Wickets: 24 | Econ: 8.4",
      stats: { wickets: "24", economy: "8.4", average: "22.5" },
      bio: "Nuwan Thushara is MI's Sri Lankan pacer who swings the ball both ways and is adept at picking up early wickets in the powerplay. A quality international bowler.",
      isCaptain: false
    },
  ],

  // ── STATS ─────────────────────────────────────────────
  season: {
    played: 9, won: 6, lost: 3,
    nrr: "+0.423",
    highestScore: "214/5 vs RCB",
    lowestConceded: "141/8 vs PBKS",
    bars: [
      { label: "Run Rate (Overall)", val: 9.2, max: 12, display: "9.2" },
      { label: "Powerplay Avg Score", val: 52, max: 70, display: "52 runs" },
      { label: "Death Over Economy", val: 10.4, max: 15, display: "10.4" },
      { label: "Boundary %", val: 54, max: 100, display: "54%" },
      { label: "Win Rate 2025", val: 67, max: 100, display: "67%" },
    ]
  },

  topScorers: [
    { name: "Rohit Sharma", runs: 367, avg: 40.8 },
    { name: "Suryakumar Yadav", runs: 312, avg: 34.7 },
    { name: "Ishan Kishan", runs: 289, avg: 32.1 },
    { name: "Tilak Varma", runs: 241, avg: 30.1 },
    { name: "Tim David", runs: 198, avg: 28.3 },
  ],

  topWickets: [
    { name: "Jasprit Bumrah", wickets: 18, economy: 6.4 },
    { name: "Piyush Chawla", wickets: 14, economy: 7.2 },
    { name: "Gerald Coetzee", wickets: 11, economy: 9.3 },
    { name: "Hardik Pandya", wickets: 9, economy: 8.7 },
    { name: "Nuwan Thushara", wickets: 8, economy: 8.6 },
  ],

  // ── NEWS ──────────────────────────────────────────────
  news: [
    {
      tag: "Match Report",
      emoji: "🏏",
      title: "Bumrah's 4-fer powers MI to dramatic 3-wicket win over SRH",
      excerpt: "Jasprit Bumrah delivered a stunning bowling performance, taking 4 wickets for just 14 runs as Mumbai Indians pulled off a nervy chase in Hyderabad.",
      date: "April 16, 2025",
      category: "match"
    },
    {
      tag: "Squad Update",
      emoji: "💪",
      title: "Hardik Pandya declared fully fit, raring to go against KKR",
      excerpt: "MI captain Hardik Pandya has recovered from his hamstring niggle and is expected to lead the side in the upcoming crucial clash against Kolkata Knight Riders.",
      date: "April 18, 2025",
      category: "team"
    },
    {
      tag: "Milestone",
      emoji: "⭐",
      title: "Rohit Sharma becomes fastest to 6000 IPL runs — a historic moment",
      excerpt: "In an illustrious career spanning 17 years of IPL cricket, Rohit Sharma etched his name further into the record books during MI's win over CSK.",
      date: "April 2, 2025",
      category: "milestone"
    },
    {
      tag: "Training",
      emoji: "🎯",
      title: "SKY in scintillating form at Wankhede nets ahead of KKR clash",
      excerpt: "Suryakumar Yadav looked in tremendous touch during MI's pre-match training session, smashing the ball to all corners of the Wankhede ground.",
      date: "April 19, 2025",
      category: "team"
    },
    {
      tag: "Analysis",
      emoji: "📊",
      title: "How MI's death-overs bowling has been their secret weapon in 2025",
      excerpt: "A detailed look at Mumbai Indians' strategy of relying on Bumrah and Pandya to defend totals in the last four overs — and why it's been so effective.",
      date: "April 14, 2025",
      category: "analysis"
    },
    {
      tag: "Fan Story",
      emoji: "💙",
      title: "The Blue Army speaks: 10,000 fans share why they bleed blue",
      excerpt: "Ahead of the home stretch of IPL 2025, we spoke to thousands of Mumbai Indians fans about what the team means to them and their most cherished memories.",
      date: "April 10, 2025",
      category: "fans"
    },
  ],

  // ── FAN ZONE ──────────────────────────────────────────
  poll: {
    question: "Who will be MI's Player of the Tournament 2025?",
    options: [
      { label: "Rohit Sharma", votes: 4120 },
      { label: "Jasprit Bumrah", votes: 5680 },
      { label: "Suryakumar Yadav", votes: 3290 },
      { label: "Hardik Pandya", votes: 2100 },
    ]
  },

  socialPosts: [
    { handle: "@mi_fan_forever", text: "Bumrah is literally an alien 👽🔥 That yorker to dismiss Abid Ali… INSANE! #MumbaiIndians #OneFamily", likes: 4231 },
    { handle: "@rohit_admirer45", text: "Rohit Sharma in 2025 looks like he's on a mission to win one more title. The hunger is unreal. 💙 #Hitman", likes: 3872 },
    { handle: "@ipl_cricket_fan", text: "SKY's reverse scoop for SIX off the world's fastest bowler is the shot of IPL 2025 no contest 🔥🔥 #MIvsKKR", likes: 2945 },
    { handle: "@wankhede_blue", text: "The atmosphere at Wankhede tonight was something else. 33,000 fans going absolutely mental 🏟️ #BlueArmy", likes: 2103 },
    { handle: "@pandya_fan_girl", text: "Captain Hardik leading from the front AGAIN. That's the energy we needed. #OneFamily #MumbaiIndians 💪", likes: 1887 },
  ],

  trivia: [
    {
      q: "In which year did Mumbai Indians win their first IPL title?",
      opts: ["2010", "2011", "2013", "2015"],
      ans: 2,
      exp: "MI won their maiden IPL title in 2013, defeating Chennai Super Kings in the final at Eden Gardens, Kolkata."
    },
    {
      q: "Who is Mumbai Indians' all-time leading wicket-taker in IPL?",
      opts: ["Lasith Malinga", "Jasprit Bumrah", "Harbhajan Singh", "Mitchell Johnson"],
      ans: 1,
      exp: "Jasprit Bumrah surpassed Lasith Malinga's tally to become MI's all-time leading wicket-taker with 170+ wickets."
    },
    {
      q: "What is Mumbai Indians' home ground?",
      opts: ["Brabourne Stadium", "DY Patil Stadium", "Wankhede Stadium", "CCI"],
      ans: 2,
      exp: "Wankhede Stadium, located in South Mumbai, is the iconic home ground of the Mumbai Indians since the IPL's inception in 2008."
    },
    {
      q: "Which MI player scored the fastest fifty in IPL history?",
      opts: ["Rohit Sharma", "Chris Gayle", "Kieron Pollard", "Ishan Kishan"],
      ans: 3,
      exp: "Ishan Kishan scored the then-fastest IPL fifty in just 13 balls against Delhi Capitals in 2021."
    },
    {
      q: "How many times has Rohit Sharma captained MI to IPL glory?",
      opts: ["3", "4", "5", "6"],
      ans: 2,
      exp: "Rohit Sharma captained Mumbai Indians to 5 IPL titles (2013, 2015, 2017, 2019, 2020) — the most by any captain in IPL history."
    },
  ],

};
