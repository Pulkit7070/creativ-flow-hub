
import { Job, Freelancer } from "@/types/job";

// Mock job data
export const jobData: Job[] = [
  {
    id: "job-1",
    title: "Need Professional Video Editor for YouTube Gaming Channel",
    description: "Looking for an experienced video editor to help with my gaming YouTube channel that has 500k+ subscribers. You'll be responsible for editing gameplay footage, adding effects, creating engaging intros and outros. Need someone who can work with Adobe Premiere Pro and After Effects.",
    budget: {
      min: 300,
      max: 500,
      type: "fixed"
    },
    client: {
      id: "client-1",
      name: "GameMaster Studios",
      avatarUrl: "https://source.unsplash.com/ZHvM3XIOHoE",
      verified: true,
      rating: 4.8,
      reviewCount: 32
    },
    skills: ["Video Editing", "Adobe Premiere Pro", "After Effects", "Gaming", "YouTube"],
    duration: "1-3 weeks",
    applications: 18,
    createdAt: "2023-04-05T10:30:00Z",
    category: "video-editing",
    experience: "intermediate"
  },
  {
    id: "job-2",
    title: "Podcast Editor Needed for Weekly Business Podcast",
    description: "We run a weekly interview podcast about entrepreneurship and need a skilled podcast editor. You'll be responsible for cleaning up audio, removing filler words, adding intro/outro music, and ensuring professional sound quality. Experience with Adobe Audition required.",
    budget: {
      min: 100,
      max: 200,
      type: "fixed"
    },
    client: {
      id: "client-2",
      name: "StartupInsights",
      avatarUrl: "https://source.unsplash.com/sibVwORYqs0",
      verified: false,
      rating: 4.5,
      reviewCount: 12
    },
    skills: ["Podcast Editing", "Adobe Audition", "Audio Engineering", "Sound Design"],
    duration: "Ongoing",
    location: "Remote",
    applications: 7,
    createdAt: "2023-04-06T14:20:00Z",
    category: "podcast-editing",
    experience: "entry"
  },
  {
    id: "job-3",
    title: "Thumbnail Designer for Fashion YouTube Channel",
    description: "My fashion and beauty channel needs eye-catching thumbnails that convert. Looking for a designer who understands YouTube trends and can create thumbnails that drive clicks. Need someone who can work in Photoshop and has experience with fashion/beauty content.",
    budget: {
      min: 50,
      max: 100,
      type: "fixed"
    },
    client: {
      id: "client-3",
      name: "StyleByEmma",
      avatarUrl: "https://source.unsplash.com/W7b3eDUb_2I",
      verified: true,
      rating: 4.9,
      reviewCount: 28
    },
    skills: ["Thumbnail Design", "Photoshop", "YouTube", "Graphic Design", "Fashion"],
    duration: "Less than 1 week",
    applications: 24,
    createdAt: "2023-04-07T09:15:00Z",
    category: "thumbnail-design",
    experience: "any"
  },
  {
    id: "job-4",
    title: "2D Animation for Educational Content",
    description: "We create educational content about science and history. Looking for an animator who can create engaging 2D animations to explain complex concepts. Need clean, professional animations that are informative and visually appealing.",
    budget: {
      min: 1000,
      max: 2000,
      type: "fixed"
    },
    client: {
      id: "client-4",
      name: "LearnSmart Academy",
      avatarUrl: "https://source.unsplash.com/rPOmLGwai2w",
      verified: true,
      rating: 5.0,
      reviewCount: 19
    },
    skills: ["2D Animation", "After Effects", "Illustrator", "Educational Content", "Explainer Videos"],
    duration: "1-3 months",
    applications: 12,
    createdAt: "2023-04-03T11:45:00Z",
    category: "animation",
    experience: "expert"
  },
  {
    id: "job-5",
    title: "Voiceover Artist for Corporate Training Videos",
    description: "We need a professional voiceover artist with a warm, authoritative voice for our corporate training materials. Should have high-quality recording equipment and be able to deliver edited, clean audio files.",
    budget: {
      min: 200,
      max: 350,
      type: "fixed"
    },
    client: {
      id: "client-5",
      name: "CorpTrain Solutions",
      avatarUrl: "https://source.unsplash.com/DO9NER1X5o0",
      verified: false,
      rating: 4.7,
      reviewCount: 9
    },
    skills: ["Voiceover", "Audio Engineering", "Corporate", "Clear Dictation"],
    duration: "Less than 1 week",
    location: "Remote",
    applications: 16,
    createdAt: "2023-04-08T13:30:00Z",
    category: "voiceover",
    experience: "intermediate"
  },
  {
    id: "job-6",
    title: "Livestream Editor for Twitch Gaming Content",
    description: "I'm a Twitch streamer looking for an editor to create highlight reels and YouTube content from my livestreams. Need someone who can identify entertaining moments and create engaging videos optimized for YouTube.",
    budget: {
      min: 250,
      max: 400,
      type: "fixed"
    },
    client: {
      id: "client-6",
      name: "TwitchKing",
      avatarUrl: "https://source.unsplash.com/7YVZYZeITc8",
      verified: true,
      rating: 4.6,
      reviewCount: 23
    },
    skills: ["Livestream Editing", "Premiere Pro", "Gaming", "Twitch", "YouTube"],
    duration: "Ongoing",
    applications: 9,
    createdAt: "2023-04-04T16:20:00Z",
    category: "livestream",
    experience: "entry"
  }
];

// Mock freelancer data
export const freelancerData: Freelancer[] = [
  {
    id: "freelancer-1",
    name: "Alex Johnson",
    title: "Professional Video Editor & Motion Graphics Designer",
    avatarUrl: "https://source.unsplash.com/iFgRcqHznqg",
    verified: true,
    rating: 4.9,
    reviewCount: 156,
    hourlyRate: 45,
    skills: ["Video Editing", "After Effects", "Premiere Pro", "Motion Graphics", "Color Grading"],
    description: "Award-winning video editor with 7+ years of experience working with YouTubers, brands, and agencies. Specialized in creating engaging content that drives viewer retention.",
    completedJobs: 124
  },
  {
    id: "freelancer-2",
    name: "Sarah Miller",
    title: "Thumbnail Designer & Graphic Artist",
    avatarUrl: "https://source.unsplash.com/7YVZYZeITc8",
    verified: true,
    rating: 5.0,
    reviewCount: 89,
    hourlyRate: 35,
    skills: ["Thumbnail Design", "Photoshop", "Illustrator", "Graphic Design", "YouTube"],
    description: "I create eye-catching thumbnails that get clicks! Worked with 50+ content creators to increase CTR by an average of 40%. Fast turnaround and unlimited revisions.",
    completedJobs: 218
  },
  {
    id: "freelancer-3",
    name: "Michael Chen",
    title: "2D Animator & Motion Designer",
    avatarUrl: "https://source.unsplash.com/C8Ta0gwPbQg",
    verified: false,
    rating: 4.7,
    reviewCount: 42,
    hourlyRate: 50,
    skills: ["2D Animation", "After Effects", "Illustrator", "Character Animation", "Explainer Videos"],
    description: "Animation specialist with a background in traditional and digital animation. I bring ideas to life with engaging, professional animations for businesses and content creators.",
    completedJobs: 68
  },
  {
    id: "freelancer-4",
    name: "Emma Rodriguez",
    title: "Podcast Editor & Audio Engineer",
    avatarUrl: "https://source.unsplash.com/mEZ3PoFGs_k",
    verified: true,
    rating: 4.8,
    reviewCount: 103,
    hourlyRate: 40,
    skills: ["Podcast Editing", "Audio Engineering", "Sound Design", "Adobe Audition", "Pro Tools"],
    description: "Experienced podcast editor who has worked on shows with millions of downloads. I'll make your podcast sound professional with clean editing, noise reduction, and perfect levels.",
    completedJobs: 175
  },
  {
    id: "freelancer-5",
    name: "David Wilson",
    title: "Voiceover Artist & Narrator",
    avatarUrl: "https://source.unsplash.com/sibVwORYqs0",
    verified: true,
    rating: 4.9,
    reviewCount: 127,
    hourlyRate: 60,
    skills: ["Voiceover", "Clear Dictation", "Audio Engineering", "Accents", "Narration"],
    description: "Professional voiceover artist with broadcast-quality home studio. Warm, engaging voice that has been featured in commercials, explainer videos, and corporate training materials.",
    completedJobs: 243
  },
  {
    id: "freelancer-6",
    name: "Jessica Kim",
    title: "Livestream Editor & Content Strategist",
    avatarUrl: "https://source.unsplash.com/7YVZYZeITc8",
    verified: false,
    rating: 4.6,
    reviewCount: 35,
    hourlyRate: 38,
    skills: ["Livestream Editing", "Premiere Pro", "YouTube Strategy", "Twitch", "Content Planning"],
    description: "Specialized in transforming livestream content into engaging videos for YouTube. I understand both platforms and how to optimize content for maximum engagement and growth.",
    completedJobs: 61
  }
];
