
import { frontendLearningItems, frontendLearningTracks } from '@/data/frontendLearningApi';
import { ILearningItem, ICourseTrack, IQuiz, ICodeExample } from '@/types/learningApi';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const LearningApi = {
  // Get all learning items
  getAllItems: async (): Promise<ILearningItem[]> => {
    await delay(300); // Simulate network delay
    return frontendLearningItems;
  },
  
  // Get single learning item by ID
  getItemById: async (id: number): Promise<ILearningItem | null> => {
    await delay(200);
    const item = frontendLearningItems.find(item => item.id === id);
    return item || null;
  },
  
  // Get items by category
  getItemsByCategory: async (category: string): Promise<ILearningItem[]> => {
    await delay(300);
    return frontendLearningItems.filter(item => item.category === category);
  },
  
  // Get items by level
  getItemsByLevel: async (level: "basic" | "intermediate" | "advanced"): Promise<ILearningItem[]> => {
    await delay(300);
    return frontendLearningItems.filter(item => item.level === level);
  },
  
  // Get items by tag
  getItemsByTag: async (tag: string): Promise<ILearningItem[]> => {
    await delay(300);
    return frontendLearningItems.filter(item => item.tags.includes(tag));
  },
  
  // Get all learning tracks
  getAllTracks: async (): Promise<ICourseTrack[]> => {
    await delay(300);
    return frontendLearningTracks;
  },
  
  // Get track by ID
  getTrackById: async (id: string): Promise<ICourseTrack | null> => {
    await delay(200);
    const track = frontendLearningTracks.find(track => track.id === id);
    return track || null;
  },
  
  // Get all items in a track
  getTrackItems: async (trackId: string): Promise<ILearningItem[]> => {
    await delay(400);
    const track = frontendLearningTracks.find(track => track.id === trackId);
    if (!track) return [];
    
    const items = await Promise.all(
      track.items.map(itemId => LearningApi.getItemById(itemId))
    );
    
    return items.filter((item): item is ILearningItem => item !== null);
  },
  
  // Search learning items
  searchItems: async (query: string): Promise<ILearningItem[]> => {
    await delay(500);
    const lowercaseQuery = query.toLowerCase();
    
    return frontendLearningItems.filter(item => 
      item.title.toLowerCase().includes(lowercaseQuery) ||
      item.description.toLowerCase().includes(lowercaseQuery) ||
      item.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    );
  }
};

export default LearningApi;
