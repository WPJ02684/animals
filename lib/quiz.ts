export type AnimalId =
  | "capybara"
  | "cat"
  | "owl"
  | "snow-leopard"
  | "sea-otter"
  | "retriever"
  | "elephant"
  | "lion";

export type Option = {
  text: string;
  animal: AnimalId;
};

export type Question = {
  id: number;
  title: string;
  options: Option[];
};

export type Strength = {
  icon: string;
  text: string;
};

export type Animal = {
  id: AnimalId;
  emoji: string;
  name: string;
  title: string;
  tags: string[];
  traits: string;
  intro: string[];
  strengths: Strength[];
  jobs: string[];
  image: string;
  color: string;
};

export const LINE_URL = "https://line.me/R/ti/p/@691cwwnw";
export const JOBS_URL = LINE_URL;

export const ANIMALS: Animal[] = [
  {
    id: "capybara",
    emoji: "🦫",
    name: "水豚",
    title: "穩定水豚",
    tags: ["穩定派", "好相處", "團隊穩定劑"],
    traits: "情緒穩定、配合度高、不喜歡太多衝突",
    intro: [
      "不管現場多忙多亂，你總是能保持冷靜，照著步調把事情做好。",
      "你配合度高、好溝通，是主管放心、同事喜歡的那種人。比起爭輸贏，你更在意大家能不能順順地把工作完成。",
    ],
    strengths: [
      { icon: "😌", text: "情緒穩定" },
      { icon: "🤝", text: "配合度高" },
      { icon: "🧩", text: "容易融入團隊" },
      { icon: "🕊️", text: "化解衝突" },
    ],
    jobs: ["包裝", "品檢", "固定產線", "行政"],
    image: "/images/Capybara.png",
    color: "#b8865a",
  },
  {
    id: "cat",
    emoji: "🐱",
    name: "傲嬌貓",
    title: "自在傲嬌貓",
    tags: ["自由派", "照自己節奏", "專注型選手"],
    traits: "喜歡有自己的工作空間，不愛一直被打擾",
    intro: [
      "給你一個自己的位子、一份清楚的工作，你就能安靜又專注地完成。",
      "你不喜歡一直被打斷，也不愛太多無謂的社交。只要照自己的節奏來，你的產出往往比誰都穩定。",
    ],
    strengths: [
      { icon: "🎧", text: "專注力高" },
      { icon: "🧘", text: "能獨立作業" },
      { icon: "🎵", text: "有自己的節奏" },
      { icon: "✨", text: "做事有品質" },
    ],
    jobs: ["組裝", "作業員", "資料處理", "獨立工作"],
    image: "/images/Cat.png",
    color: "#d8913a",
  },
  {
    id: "owl",
    emoji: "🦉",
    name: "貓頭鷹",
    title: "細節貓頭鷹",
    tags: ["細節控", "觀察派", "品質守門員"],
    traits: "細心、先觀察再行動，容易發現問題",
    intro: [
      "別人沒注意到的小地方，你常常第一眼就看見。",
      "你習慣先搞清楚流程再動手，所以很少出錯。在需要仔細、需要把關的工作上，你就是團隊裡最可靠的那雙眼睛。",
    ],
    strengths: [
      { icon: "🔍", text: "觀察力強" },
      { icon: "📋", text: "做事細心" },
      { icon: "🧠", text: "容易發現問題" },
      { icon: "✅", text: "重視正確性" },
    ],
    jobs: ["品檢", "倉管", "盤點", "行政"],
    image: "/images/Owl.png",
    color: "#7a5f4a",
  },
  {
    id: "snow-leopard",
    emoji: "🐆",
    name: "雪豹",
    title: "效率雪豹",
    tags: ["獨立作業", "效率派", "任務型選手"],
    traits: "動作快、目標明確，喜歡把事情快速完成",
    intro: [
      "你不太需要別人一直提醒你該做什麼。",
      "只要把目標告訴你，你通常會自己找到最快的方法完成。比起一直開會、一直討論，你更喜歡「事情給我，我來處理」。",
    ],
    strengths: [
      { icon: "⚡", text: "動作快" },
      { icon: "🎯", text: "目標感強" },
      { icon: "🧠", text: "能獨立解決問題" },
      { icon: "📈", text: "喜歡看到明確成果" },
    ],
    jobs: ["物流理貨", "倉儲", "機台操作", "技術員", "計件／績效型工作"],
    image: "/images/SnowLeopard.png",
    color: "#5f7a94",
  },
  {
    id: "sea-otter",
    emoji: "🦦",
    name: "海獺",
    title: "團隊海獺",
    tags: ["團隊派", "氣氛組", "默契擔當"],
    traits: "喜歡跟人一起工作，重視工作氣氛",
    intro: [
      "有你在的地方，工作氣氛總是特別好。",
      "你喜歡跟大家一起分工、互相支援，也很會照顧身邊的人。對你來說，好同事就是上班最大的動力。",
    ],
    strengths: [
      { icon: "💬", text: "溝通能力好" },
      { icon: "🤝", text: "樂於團隊合作" },
      { icon: "😊", text: "帶動工作氣氛" },
      { icon: "🙌", text: "願意互相支援" },
    ],
    jobs: ["團隊產線", "包裝", "門市", "服務類"],
    image: "/images/Otter.png",
    color: "#4f8fa6",
  },
  {
    id: "retriever",
    emoji: "🐕",
    name: "黃金獵犬",
    title: "活力黃金獵犬",
    tags: ["行動派", "活力滿點", "現場主力"],
    traits: "不怕忙、不怕動，事情來了就做",
    intro: [
      "事情來了？沒問題，捲起袖子就開始！",
      "你不怕忙、不怕動，越是需要體力和速度的現場，越能看到你的活力。有你在，大家做起事來都更有衝勁。",
    ],
    strengths: [
      { icon: "🔥", text: "行動力強" },
      { icon: "💪", text: "體力好不怕忙" },
      { icon: "🏃", text: "反應快" },
      { icon: "☀️", text: "正能量滿點" },
    ],
    jobs: ["物流", "理貨", "出貨", "搬運", "現場作業"],
    image: "/images/Retriever.png",
    color: "#d9912a",
  },
  {
    id: "elephant",
    emoji: "🐘",
    name: "大象",
    title: "可靠大象",
    tags: ["可靠派", "耐力王", "長期戰力"],
    traits: "穩定、耐心、責任感強，可以長期做重複工作",
    intro: [
      "你也許不是最快的那一個，但一定是最穩、最能撐的那一個。",
      "交給你的事情，你會負責到底。就算是長時間重複的工作，你也能一天一天穩穩做好，是公司最想留下的長期戰力。",
    ],
    strengths: [
      { icon: "🛡️", text: "責任感強" },
      { icon: "⏳", text: "耐心十足" },
      { icon: "🔁", text: "能長期穩定工作" },
      { icon: "📚", text: "經驗累積快" },
    ],
    jobs: ["長期派遣", "產線", "倉儲", "機台操作"],
    image: "/images/Elephant.png",
    color: "#7d8896",
  },
  {
    id: "lion",
    emoji: "🦁",
    name: "獅子",
    title: "挑戰獅子",
    tags: ["挑戰派", "目標導向", "天生帶頭者"],
    traits: "喜歡挑戰、效率與成就感，願意承擔責任",
    intro: [
      "給你目標，你就會想辦法達成，而且還想做得更好。",
      "你喜歡挑戰、看重成果，也願意扛起責任帶著大家往前衝。努力就有回報的環境，最能讓你發揮。",
    ],
    strengths: [
      { icon: "👑", text: "領導力強" },
      { icon: "🎯", text: "目標導向" },
      { icon: "🚀", text: "喜歡挑戰" },
      { icon: "🏆", text: "追求成就感" },
    ],
    jobs: ["儲備幹部", "線長", "技術職", "高獎金職缺"],
    image: "/images/Lion.png",
    color: "#c9731f",
  },
];

export const QUESTIONS: Question[] = [
  {
    id: 1,
    title: "第一天到新公司，你通常會？",
    options: [
      { text: "先觀察大家怎麼做，搞清楚流程再開始", animal: "owl" },
      { text: "有事情就直接做，邊做邊學最快", animal: "retriever" },
      { text: "先跟旁邊同事聊聊，熟悉環境比較重要", animal: "sea-otter" },
      { text: "先確認今天要完成什麼，照目標往前衝", animal: "lion" },
    ],
  },
  {
    id: 2,
    title: "如果今天工作突然變超多，你會？",
    options: [
      { text: "沒關係，一件一件慢慢處理", animal: "capybara" },
      { text: "找最快的方法，把事情全部解決", animal: "snow-leopard" },
      { text: "二話不說，捲起袖子直接開做", animal: "retriever" },
      { text: "重新排優先順序，重要的先處理", animal: "lion" },
    ],
  },
  {
    id: 3,
    title: "你比較喜歡哪種工作環境？",
    options: [
      { text: "工作內容固定，每天知道自己要做什麼", animal: "elephant" },
      { text: "給我自己的工作區域，不要一直打擾我", animal: "cat" },
      { text: "可以跟同事一起做事情", animal: "sea-otter" },
      { text: "有目標、有挑戰，做得好可以往上升", animal: "lion" },
    ],
  },
  {
    id: 4,
    title: "主管交代一個你沒做過的工作，你會？",
    options: [
      { text: "先確認細節，避免等等做錯", animal: "owl" },
      { text: "先試試看，有問題再調整", animal: "retriever" },
      { text: "問一下有經驗的同事怎麼做", animal: "sea-otter" },
      { text: "研究一下，自己找到最有效率的方法", animal: "snow-leopard" },
    ],
  },
  {
    id: 5,
    title: "如果工作需要長時間做重複的事情？",
    options: [
      { text: "可以啊，穩穩做完就好", animal: "elephant" },
      { text: "可以，但我會想辦法讓自己做得更快", animal: "snow-leopard" },
      { text: "如果旁邊有人一起做，我可以", animal: "sea-otter" },
      { text: "做久了我會想換點不同的事情", animal: "cat" },
    ],
  },
  {
    id: 6,
    title: "工作時，你最受不了哪件事？",
    options: [
      { text: "一直有人來打斷我", animal: "cat" },
      { text: "流程亂七八糟、沒有規則", animal: "owl" },
      { text: "大家氣氛很差", animal: "sea-otter" },
      { text: "明明可以快一點，大家卻一直拖", animal: "snow-leopard" },
    ],
  },
  {
    id: 7,
    title: "如果同事突然需要你幫忙？",
    options: [
      { text: "能幫就幫，大家工作順利最重要", animal: "capybara" },
      { text: "先把自己的事情處理好再幫", animal: "elephant" },
      { text: "看一下怎麼分工最快", animal: "lion" },
      { text: "如果是緊急的，我會直接過去處理", animal: "retriever" },
    ],
  },
  {
    id: 8,
    title: "哪句話最像你的工作方式？",
    options: [
      { text: "「不要急，穩穩做就好。」", animal: "capybara" },
      { text: "「先讓我搞清楚到底怎麼回事。」", animal: "owl" },
      { text: "「直接做啦！做了就知道。」", animal: "retriever" },
      { text: "「給我目標，我想辦法完成。」", animal: "lion" },
    ],
  },
  {
    id: 9,
    title: "如果主管沒有一直盯著你？",
    options: [
      { text: "更好，我喜歡自己把工作完成", animal: "cat" },
      { text: "我會照原本流程繼續做", animal: "elephant" },
      { text: "我會看看還有沒有其他事情可以幫忙", animal: "capybara" },
      { text: "我會想辦法提早完成", animal: "snow-leopard" },
    ],
  },
  {
    id: 10,
    title: "你找工作時最在意什麼？",
    options: [
      { text: "穩定，可以長期做", animal: "elephant" },
      { text: "工作環境跟同事好不好相處", animal: "sea-otter" },
      { text: "薪水跟獎金，有努力就有回報", animal: "lion" },
      { text: "工作內容適不適合自己的節奏", animal: "cat" },
    ],
  },
  {
    id: 11,
    title: "遇到工作出錯時，你第一個反應是？",
    options: [
      { text: "先冷靜，不要讓事情變得更亂", animal: "capybara" },
      { text: "找出到底是哪個環節出問題", animal: "owl" },
      { text: "趕快處理，先把問題解決", animal: "retriever" },
      { text: "記住這次經驗，下次不要再發生", animal: "elephant" },
    ],
  },
  {
    id: 12,
    title: "如果今天提早把工作做完，你比較可能？",
    options: [
      { text: "檢查一次，看有沒有漏掉", animal: "owl" },
      { text: "看看能不能把流程做得更有效率", animal: "snow-leopard" },
      { text: "問同事需不需要幫忙", animal: "capybara" },
      { text: "安靜等下一個工作，我喜歡自己的空間", animal: "cat" },
    ],
  },
];

export function calculateResult(
  answers: AnimalId[],
  random: () => number = Math.random,
): Animal {
  const scores = new Map<AnimalId, number>();
  for (const id of answers) {
    scores.set(id, (scores.get(id) ?? 0) + 1);
  }

  const top = Math.max(...scores.values());
  const tied = ANIMALS.filter((animal) => scores.get(animal.id) === top);
  return tied[Math.floor(random() * tied.length)];
}

export function getAnimal(id: string): Animal | undefined {
  return ANIMALS.find((animal) => animal.id === id);
}
