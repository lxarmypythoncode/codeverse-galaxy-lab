
export interface IModule {
  id: number;
  title: string;
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile' | 'cyber';
  level: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  content: string;
  imageUrl: string;
  authorName: string;
  duration: number; // in minutes
  tags: string[];
  slug: string;
}

export interface ILearningPath {
  id: string;
  title: string;
  description: string;
  category: string;
  level: string;
  duration: string;
  modules: number[];
  coverImage: string;
  author: string;
}
